// @flow
import React from 'react';
import {render} from 'react-dom';

const body: Node = (document.body: any);

export default function(): void {
  if (!document.body) throw new ReferenceError('Document.body not defined!');
  const app = document.createElement('app');

  body.appendChild(app);

  console.log(render);
  console.log('app:', app);

  render(<h1>Hello World!</h1>, app);
}



