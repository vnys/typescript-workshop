{
  // TIP: use generics!
  
  // Write the type for assign, replace the `any`s
  function assign(object1: any, object2: any): any {
    throw "Not implemented" // ignore this line
  }

  {
    // Ok
    const x = assign({ a: 1, b: 2}, { b: 2, c: false})

    x.a = 3
    x.b = 3
    x.c = false

    const y = assign({ z: "hi" }, { lolCat: { meow: true }})
    y.z = "hello"
    y.lolCat.meow = false

    // Not ok
    x.d = 1
    x.c = "test"
  }
}