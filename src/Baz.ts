// import Bar from "./Bar"
// import Foo from "./Foo"

class Baz {
    foo: Foo // Auto-importing this will work.
    bar: Bar // Then auto-importing this will fail.
}