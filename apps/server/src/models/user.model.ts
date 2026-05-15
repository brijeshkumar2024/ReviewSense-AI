import { Schema, model } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  password: string;
  avatar?: string;
  role: 'user' | 'admin';
  plan: 'free' | 'premium';
  usageLimit: number;
  refreshToken?: string;
  createdAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    avatar: { type: String },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    plan: { type: String, enum: ['free', 'premium'], default: 'free' },
    usageLimit: { type: Number, default: 20 },
    refreshToken: { type: String }
  },
  { timestamps: true }
);

export default model<IUser>('User', userSchema);
