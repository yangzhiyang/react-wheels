function classes(...names: Array<string | undefined>) {
  return names.filter(Boolean).join(" ");
}

interface Options {
  extra: string | undefined;
}

interface ClassToggles {
  [key: string]: boolean;
}

function scopedClassMaker(prefix: string) {
  return function(name: string | ClassToggles, options?: Options) {
    const name2 =
      typeof name === "string" || name === undefined ? { [name]: name } : name;
    const scoped = Object.entries(name2)
      .filter(kv => kv[1])
      .map(kv => kv[0])
      .map(name => [prefix, name].filter(Boolean).join("-"))
      .join(" ");

    if (options && options.extra) {
      return [scoped, options.extra].filter(Boolean).join(" ");
    } else {
      return scoped;
    }
  };
}

export default classes;
export { scopedClassMaker };
