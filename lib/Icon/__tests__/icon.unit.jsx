import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme'
import Icon from '../index';

describe('icon', () => {
  it('render successfully', () => {
    const tree = renderer.create(<Icon name="alipay"/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('onClick', () => {
    const fn = jest.fn();
    const component = mount(<Icon name="alipay" onClick={fn}/>);
    component.find('svg').simulate('click');
    expect(fn).toBeCalled();
  })
})