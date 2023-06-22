//전개 연산자(spread operator)

function fn(x, y, z){
    console.log(x, y, z) // 1 2 3 
}

fn(1,2,3)
fn(2,4,6)

const fn2 = (a, b, c) => {
    console.log(b)
    console.log(a+b+c)
}

//fn2(2,3,4)

const a = [1,3,5]

//fn2(a)

fn2(...a)

