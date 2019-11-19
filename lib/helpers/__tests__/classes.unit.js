import classes, {
  scopedClassMaker
} from '../classes'
describe('classes', () => {
  it('接收一个 classname', () => {
    const result = classes('a');
    expect(result).toEqual('a');
  });
  it('接收多个 classname', () => {
    const result = classes('a', 'b', 'c');
    expect(result).toEqual('a b c');
  });
  it('接收一个参数为 undefined', () => {
    const result = classes('a', undefined);
    expect(result).toEqual('a');
  });
  it('不传参数', () => {
    const result = classes();
    expect(result).toEqual('');
  });
})

describe('scopedClassMaker', () => {
  it('可以传入字符串或对象', () => {
    const sc = scopedClassMaker('wheels-layout');
    expect(sc('')).toEqual('wheels-layout')
    expect(sc('x')).toEqual('wheels-layout-x')
    expect(sc({
      hasAside: true,
      active: false
    })).toEqual('wheels-layout-hasAside')
    expect(sc({
      hasAside: true,
      active: true
    })).toEqual('wheels-layout-hasAside wheels-layout-active')
    expect(sc({
      hasAside: true,
    }, {
      extra: 'active'
    })).toEqual('wheels-layout-hasAside active')
  })
})