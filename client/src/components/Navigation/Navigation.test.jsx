import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import Navigation from './Navigation';

let container = null;
const spy = jest.fn();
const testWidth = 420;

describe('Navigation', () => {
  beforeAll(() => {
    window.addEventListener('resize', spy);
  });

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  test('renders without issues', () => {
    render(<Navigation />, container);
    expect(container.textContent).toBe('');
  });

  test('does not fire resize event by default', () => {
    expect(spy).not.toHaveBeenCalled();
    expect(window.innerWidth).not.toBe(testWidth);
  });
});

describe('when resize event is fired', () => {
  beforeAll(() => {
    window.innerWidth = testWidth;
    window.dispatchEvent(new Event('resize'));
  });

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);

    act(() => {
      render(<Navigation />, container);
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  test('updates navigation style', () => {
    expect(spy).toHaveBeenCalled();
    expect(window.innerWidth).toBe(testWidth);
  });
});

describe('Navigation function', () => {
  test('scrollToTop executes without issues', () => {
    const { getByAltText } = render(<Navigation />);

    const scrollToTop = fireEvent.click(getByAltText('logo'));
    expect(scrollToTop).toBeDefined();
  });

  test('handleClose executes without issues', () => {
    const { getByTestId } = render(<Navigation />);

    const handleClose = fireEvent.click(getByTestId('about-link'));
    expect(handleClose).toBeDefined();
  });
});
