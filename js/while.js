let x = 2

while (x <= 65536) {
    console.log(x)
    x *= 2
}


// let allCones = Math.floor(Math.random() * 50) + 50;
//
// do {
//     let i = Math.floor(Math.random() * 5) + 1
//     if (allCones - i > 0) {
//         return
//     }
// }while (i > 0){
//     con
// }

function sellMyCones() {
    let allCones = Math.floor(Math.random() * 5) + 1;
    do{
        const customerCones = Math.floor(Math.random() * 5) + 1
        if(allCones - customerCones < 0) {
            console.log(`I can't sell ${customerCones} I only have ${allCones}`)
            continue
        } else if (allCones - customerCones === 0) {
            console.log(`Yay I've sold them all`)
            break
        } else {
            console.log(`${customerCones} cones sold`);
            allCones -= customerCones
        }
        console.log(`I now have ${allCones} left `)
    }while (allCones > 0)
}

