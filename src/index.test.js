import React from 'react';
import app from './index.js';
import { render } from 'react-dom';

jest.mock('react-dom');

describe('app', () => {
  it('should call render with known JSX', () => {
    expect(render).toHaveBeenCalled();
    expect(render).toHaveBeenCalledTimes(1);
    expect(render).toHaveBeenCalledWith(<h1>Hello World!</h1>, document.createElement('div'));
  });

  it('should call render with the DOM node');
});

