import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model';
import { config } from '../config';

const router = Router();

const createToken = (payload: object, secret: string, expiresIn: string): string => {
  return jwt.sign(payload, secret, { expiresIn });
};

const googleRedirectUri = `${config.serverUrl}/api/v1/auth/google/callback`;

router.get('/google', (req, res) => {
  const params = new URLSearchParams({
    client_id: config.googleClientId,
    redirect_uri: googleRedirectUri,
    response_type: 'code',
    scope: 'openid email profile',
    access_type: 'offline',
    prompt: 'consent'
  });
  res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`);
});

router.get('/google/callback', async (req, res, next) => {
  try {
    const { code } = req.query;
    if (!code || typeof code !== 'string') {
      return res.status(400).json({ success: false, message: 'Authorization code missing' });
    }

    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: config.googleClientId,
        client_secret: config.googleClientSecret,
        redirect_uri: googleRedirectUri,
        grant_type: 'authorization_code'
      })
    });

    const tokenPayload = await tokenResponse.json();
    const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: `Bearer ${tokenPayload.access_token}` }
    });
    const profile = await userInfoResponse.json();

    let user = await User.findOne({ email: profile.email });
    if (!user) {
      user = await User.create({
        name: profile.name ?? 'Google User',
        email: profile.email,
        password: Math.random().toString(36).slice(2),
        avatar: profile.picture,
        plan: 'free',
        usageLimit: 20
      });
    }

    const token = createToken({ id: user.id, email: user.email, role: user.role, plan: user.plan }, config.jwtSecret, '15m');
    const refreshToken = createToken({ id: user.id, email: user.email, role: user.role, plan: user.plan }, config.jwtRefreshSecret, '30d');
    user.refreshToken = refreshToken;
    await user.save();

    res.redirect(`${config.clientUrl}/dashboard?token=${token}`);
  } catch (error) {
    next(error);
  }
});

router.post('/register', async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ success: false, message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      plan: 'free',
      usageLimit: 20
    });

    const token = createToken({ id: user.id, email: user.email, role: user.role, plan: user.plan }, config.jwtSecret, '15m');
    const refreshToken = createToken({ id: user.id, email: user.email, role: user.role, plan: user.plan }, config.jwtRefreshSecret, '30d');
    user.refreshToken = refreshToken;
    await user.save();

    res.status(201).json({ success: true, data: { token, refreshToken, user: { name: user.name, email: user.email, role: user.role, plan: user.plan } } });
  } catch (error) {
    next(error);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = createToken({ id: user.id, email: user.email, role: user.role, plan: user.plan }, config.jwtSecret, '15m');
    const refreshToken = createToken({ id: user.id, email: user.email, role: user.role, plan: user.plan }, config.jwtRefreshSecret, '30d');
    user.refreshToken = refreshToken;
    await user.save();

    res.json({ success: true, data: { token, refreshToken, user: { name: user.name, email: user.email, role: user.role, plan: user.plan } } });
  } catch (error) {
    next(error);
  }
});

router.post('/refresh', async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return res.status(400).json({ success: false, message: 'Refresh token is required' });
    }

    const decoded = jwt.verify(refreshToken, config.jwtRefreshSecret) as { id: string };
    const user = await User.findById(decoded.id);
    if (!user || user.refreshToken !== refreshToken) {
      return res.status(401).json({ success: false, message: 'Invalid refresh token' });
    }

    const token = createToken({ id: user.id, email: user.email, role: user.role, plan: user.plan }, config.jwtSecret, '15m');
    res.json({ success: true, data: { token } });
  } catch (error) {
    next(error);
  }
});

router.get('/me', async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : undefined;
    if (!token) {
      return res.status(401).json({ success: false, message: 'Authentication required' });
    }
    const payload = jwt.verify(token, config.jwtSecret) as { id: string };
    const user = await User.findById(payload.id).select('-password -refreshToken');
    res.json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
});

export default router;
