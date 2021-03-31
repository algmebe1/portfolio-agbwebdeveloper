import React from 'react';
import { render } from '@testing-library/react';
import Skills from './Skills';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});
describe('Skills', () => {
  test('should be rendered', () => {
    render(<Skills />, container);
    expect(container.textContent).toBe('');
  });
});
