import React from 'react';
import { render } from '@testing-library/react';
import About from './About';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});
describe('About', () => {
  test('should be rendered', () => {
    render(<About />, container);
    expect(container.textContent).toBe('');
  });
});
