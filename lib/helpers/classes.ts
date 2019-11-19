function classes(...names: Array<string | undefined>) {
  return names.filter(Boolean).join(" ");
}

interface x {
  extra: string | undefined;
}

function scopedClassMaker(prefix: string) {
  return function(name?: string, option?: x) {
    const result = [prefix, name].filter(Boolean).join("-");
    if (option && option.extra) {
      return [result, option.extra].filter(Boolean).join(" ");
    } else {
      return result;
    }
  };
}

export default classes;
export { scopedClassMaker };
