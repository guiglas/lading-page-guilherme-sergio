import React from 'react';
import { render, screen } from '@testing-library/react';
import Inicio from './pages/Inicio';
import Application from './application';

test('renders learn react link', () => {
 render(<Application/>);
const linkElement = screen.getByText(/learn react/i);
 expect(linkElement).toBeInTheDocument();
});
