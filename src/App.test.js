// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ApiPulse title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ApiPulse/i);
    expect(titleElement).toBeInTheDocument();
});
