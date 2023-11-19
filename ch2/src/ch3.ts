function ch3() {
    let a: unknown = 30
    let b = a === 123
    //let c = a + 10 //ts(18046) 'a' is of type 'unknown'.
    if (typeof a === 'number') {
        let d = a + 10
    }
}
//ch3()
function ch3_1() {
    let a: any = 30
    let b = a === 123
    let c = a + 10
    if (typeof a === 'number') {
        let d = a + 10
        console.log(typeof a);
    } else {
        console.log('a is NaN');
    }
}
//ch3_1()
function ch3_union() {
    let a: number | unknown = 30
    let b = a === 123
    //let c = a + 10 //ts(18046) 'a' is of type 'unknown'.
    if (typeof a === 'number') {
        let d = a + 10
        console.log(typeof a);
    } else {
        console.log('a is NaN');
    }

    let value: unknown;
    value = "Hello, World!"; // This is fine
    value = 42;              // This too is fine

    // But...
    //let str: string = value; //Type 'unknown' is not assignable to type 'string'.ts(2322)    
}
ch3_union()

