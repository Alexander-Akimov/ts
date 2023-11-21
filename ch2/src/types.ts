function types_TYPE_LITERAL() {
    const c = true
    console.log(typeof c) // boolean
    let e: true = true
    console.log(typeof e) // boolean
}
//types_TYPE_LITERAL();

function types_numbers() {
    const c = Infinity
    const d = NaN
    console.log(typeof NaN) // boolean
}
// types_numbers();

function types_symbols() {

    let c: 10 = 10;
    //c = 11 //Type '11' is not assignable to type '10'.ts(2322)

    let n1 = Symbol('e')
    let n = Symbol('e')
    console.log(n1 == n) // always false
    //let i = e === n
    //unique symbols
    const e = Symbol('e')
    const f: unique symbol = Symbol('f') // typeof f
    const g: unique symbol = Symbol('f')
    n = g
    /* This comparison appears to be unintentional because the types
     'typeof e' and 'typeof f' have no overlap.ts(2367)

    let h = e === f
    */
}
//types_symbols();

(function types_objects() {

    //object literals
    let a: object = {
        b: 'x'
    }
    //Property 'b' does not exist on type 'object'.ts(2339)
    //console.log(a.b)
    let a3 = {
        b: "x"
    }
    console.log(typeof a3)

    const a1: { b: number } = {
        b: 12
    }
    console.log(a1.b)

    let a2: { b: number } = {
        b: 12
    }
    console.log(a2.b)
    a2 = a1

    let a4: { b: number }
    //Property 'b' is missing in type '{}' but required in type '{ b: number; }'.ts(2741)
    //a4 = {}

    //Variable 'a4' is used before being assigned.ts(2454)
    //console.log(a4)

    // Type '{ b: number; c: number; }' is not assignable to type '{ b: number; }'.
    // Object literal may only specify known properties, and 'c' does not exist in type '{ b: number; }'.ts(2322)
    a4 = {
        b: 1,
        //c: 2
    }




    let c: {
        firstName: string
        lastName: string
    } = {
        firstName: 'john',
        lastName: 'barrowman'
    }

    class Person {
        constructor(
            public firstName: string,
            public readonly lastName: string,
            public lastName3: string
        ) {
            // public является сокращением
            // this.firstName = firstName
        }
    }
    let p: Person = new Person('matt', 'smith', "sdf")
    //p.lastName = ""
    c = p// no problem
    // but
    // Property 'lastName3' is missing in type '{ firstName: string; lastName: string; }' but required in type 'Person'.ts(2741)
    //p = c;

    //let r = (Person as c).lastName3

    console.log(c)   

})();
