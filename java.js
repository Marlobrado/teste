const arrayPositions = ["Rafael", "Manoel", "Daniel"]

console.log(arrayPositions)

function positions(firstPlace, secondPlace, lastPlace) {
    const arrayPosicao = [firstPlace, secondPlace, lastPlace]
    if ("Daniel" == secondPlace) {
        arrayPosicao[1] = firstPlace
        arrayPosicao[0] = 'Daniel'
    } else if ('Daniel' == lastPlace) {
        arrayPosicao[2] = secondPlace
        arrayPosicao[1] = 'Daniel'
    }
    console.log(`1ª - Colocado ${arrayPosicao[0]} 2ª - Colocado ${arrayPosicao[1]} 3ª - Colocado ${arrayPosicao[2]}`)
}


positions('Rafael', 'Daniel', 'Manoel')







































// }
// positions(arrayPositions)
// let arrayAt = ["Rafael", "Manoel", "Daniel"]

// function position(first, second, last) {
//     arrayAt = []

//     if (last == 'Daniel') {
//         arrayAt.push(second)
//         arrayAt.push(last)
//         arrayAt.push(first)
//     }
//     else if (second == 'Daniel') {
//         arrayAt.push(second)
//         arrayAt.push(last)
//         arrayAt.push(first)
//     }
//     else {
//         arrayAt.push(first)
//         arrayAt.push(second)
//         arrayAt.push(last)
//     }
//     console.log(`1º Colocado - ${arrayAt[0]} 2º Colocado - ${arrayAt[1]} 3º Colocado - ${arrayAt[2]}')
// }

// function position (first, second, last){
//     let arrayAt = []

// if (last == 'Daniel'){
//     arrayAt.push(second)
//     arrayAt.push(last)
//     arrayAt.push(first)
// }
// else if (second == 'Daniel') {
//     arrayAt.push(second)
//     arrayAt.push(last)
//     arrayAt.push(first)
// }
// else {
//     arrayAt.push(first)
//     arrayAt.push(second)
//     arrayAt.push(last)
// }

// console.log(`1º Colocado - ${arrayAt[0]}    2º Colocado - ${arrayAt[1]} 3º Colocado - ${arrayAt[2]}`)
// }
// position ('Daniel', 'Rafael', 'Manoel' )

