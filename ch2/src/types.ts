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
    
    let c : 10 = 10;
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
types_symbols();