console.log("Hello") //disable-eslint- line no-console

import './index.css'

const arr = [1,2,3,4,25,22,28.3, 22]
let accum = arr.reduce((a,r) => a+r )

console.log(accum)