import classes from '../classes'
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