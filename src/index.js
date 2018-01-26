// @flow
import React from 'react';
import {render} from 'react-dom';

const body: Node = (document.body: any);

export default function app(): void {
  if (!document.body) throw new ReferenceError('Document.body not defined!');
  const app = document.createElement('div');

  body.appendChild(app);

  render(<h1>Hello World!</h1>, app);
}

app();

