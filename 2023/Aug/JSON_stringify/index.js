// 1. 序列化json
{
  const title = "1. 序列化json";
  const obj = {
    name: "zll",
    age: 27,
    a: new Number(1),
    b: new String("1"),
    c: new Boolean(true),
  };
  console.log(title);
  console.log(JSON.stringify(obj, null, 2));
}

// 2. 深拷贝 略

// 3. 第二个参数是函数
{
  const title = "\n3. 第二个参数是函数";
  const obj = {
    name: "zll",
    age: 27,
    a: new Number(1),
    b: new String("1"),
    c: new Boolean(true),
    d: undefined
  };
  console.log(title);
  console.log(
    JSON.stringify(obj, (key, value) => {
      if (key === "age") {
        return value + 100;
      }
      return value;
    })
  );
}

// 4. 第二个参数是数组
{
  const title = "\n4. 第二个参数是数组";
  const obj = {
    name: "zll",
    age: 27,
  };
  console.log(title);
  console.log(JSON.stringify(obj, ["age"]));
}

// 5. 序列化函数、undefined、symbol、Date
{
  const title = "\n5. 序列化函数、undefined、symbol、Date";
  const obj = {
    a: null,
    b: new Date(),
    c: [undefined, () => {}, Symbol("zll"), new Date()],
    name: Symbol("zll"),
    age: undefined,
    say: function () {
      console.log("hello");
    },
  };
  console.log(title);
  console.log(JSON.stringify(obj));
}

// 6. 值包含toJSON函数
{
  const title = "\n6. 值包含toJSON函数";
  const obj = {
    a: null,
    b: new Date(),
  };
  obj.toJSON = function () {
    return "toJSON";
  };
  console.log(title);
  console.log(JSON.stringify(obj));
}

// 7. 序列化undefined、null、NaN、Infinity、Symbol、fn
{
  const title = "\n7. 序列化undefined、null、NaN、Infinity、Symbol、fn";
  console.log(title);
  console.log(JSON.stringify(undefined));
  console.log(JSON.stringify(null));
  console.log(JSON.stringify(NaN));
  console.log(JSON.stringify(Infinity));
  console.log(JSON.stringify(Symbol("zll")));
  console.log(JSON.stringify(function () {}));
}

// 8. 基本类型的序列化
{
  const title = "\n8. 基本类型的序列化";
  console.log(title);
  console.log(JSON.stringify(new Number(1)));
  console.log(JSON.stringify(new String("1")));
  console.log(JSON.stringify(new Boolean(true)));
}

// 9. 可枚举
{
  const title = "\n9. 可枚举";
  console.log(title);
  console.log(
    JSON.stringify(
      Object.create(null, {
        name: {
          value: "zll",
          enumerable: false,
        },
        age: {
          value: 27,
          enumerable: true,
        },
      })
    )
  );
}

// 10. 循环引用
{
  const title = "\n10. 循环引用";
  console.log(title);
  const obj = {
    a: 1,
    b: 2,
  };
  obj.c = obj;
  try {
    console.log(JSON.stringify(obj));
  } catch (e) {
    console.log(e);
  }
}

// 11. 利用序列化实现对象的map函数
{
  const title = "\n11. 利用序列化实现对象的map函数";
  console.log(title);
  const myMap = (obj, fn) => {
    return JSON.parse(JSON.stringify(obj, fn))
  }
  console.log(JSON.stringify(myMap({
    name: 'zll',
    age: 27
  },(key, value) => {
    if (typeof value === 'string' || typeof value === 'number') {
      return key + value;
    }
    return value;
  }), undefined, 2));
}

// 12. 使用replacer以支持undefined、symbol、fn
{
  const title = "\n12. 使用replacer以支持undefined、symbol、fn";
  console.log(title);
  const obj = {
    a: undefined,
    b: Symbol("zll"),
    c: function () {}
  }
  console.log(JSON.stringify(obj, (key, value) => {
    switch (typeof value) {
        case "undefined":
          return "undefined";
        case "symbol":
          return value.toString();
        case "function":
          return value.toString();
      }
      return value;
    }))
}

