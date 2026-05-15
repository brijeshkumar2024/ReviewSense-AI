import { render, screen } from '@testing-library/react';
import LandingPage from '../routes/LandingPage';

describe('LandingPage', () => {
  it('renders hero headline', () => {
    render(<LandingPage />);
    expect(screen.getByText(/Turn customer feedback into decisions/i)).toBeInTheDocument();
  });
});
