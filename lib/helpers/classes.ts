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
  return function(name?: string | ClassToggles, options?: Options) {
    let name2;
    let result;
    if (typeof name === "string" || name === undefined) {
      name2 = name;
      result = [prefix, name].filter(Boolean).join("-");
    } else {
      name2 = Object.entries(name)
        .filter(kv => kv[1])
        .map(kv => kv[0]);
      result = name2.map(n => [prefix, n].filter(Boolean).join("-")).join(" ");
      console.log(
        "name2",
        name2.map(n => [prefix, n].filter(Boolean).join("-"))
      );
    }
    if (options && options.extra) {
      return [result, options.extra].filter(Boolean).join(" ");
    } else {
      return result;
    }
  };
}

export default classes;
export { scopedClassMaker };
