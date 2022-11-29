export function getLowLetters() {
    let arr = []
    for (let i = 97; i < 123; i++) {
        arr.push(String.fromCharCode(i))
    }
    return arr
}
export function getUpLetters() {
    let arr = []
    for (let i = 65; i < 91; i++) {
        arr.push(String.fromCharCode(i))
    }
    return arr
}

export function getRandomId() {
    let r = Math.round(Math.random()*25)
    let x = Math.round(Math.random()*10)
    let low = []
    let upper = []
    for (let i = 97; i < 123; i++) {
        low.push(String.fromCharCode(i))
    }
    for (let i = 65; i < 91; i++) {
        upper.push(String.fromCharCode(i))
    }
    let arr = [low[r],x,upper[r],x,x]
    let randomId = ''
    for (let i = 0; i < 5; i++) {
        let y = Math.round(Math.random()*4)
        randomId += arr[y]
    }
    return randomId
}