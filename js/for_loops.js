function showMultiplicationTable(input){
    for (let i = 1; i <= 10; i++){
        console.log(`${input} x ${i} = ${input * i}` )
    }
}

showMultiplicationTable(7)


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


for (let x = 1; x <= 10; x++) {
    const rndInt = randomIntFromInterval(20, 200)
    if (rndInt % 2 == 0) {
        console.log(rndInt + ' Is even')
    }else {
        console.log(rndInt + ' is odd')
    }

}

let string = ''
let n = 9
for (let c = 1; c <= n; c++) {
    console.log(String(c).repeat(c))
    // for (let t = 1; t <= c; t++ ) {
    //     string += c
    // }
    // string += '/n'
}
console.log(string)

for (let l = 100; l >= 5; l -= 5) {
    console.log(l)
}
