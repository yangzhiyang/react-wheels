import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../button';

describe('button test', () => {
  it('是个div', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})