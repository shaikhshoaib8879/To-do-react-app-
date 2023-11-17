const isAdult = (age) => age >= 18;
const canDrink = (age) => age >= 21

const isSenior = (age) => age >= 65

export {isAdult,canDrink, isSenior as default};


// export example

// comment -> app.js file code for tetsing

// // import defaultOperation, {add,square} from './utils.js'


// // import isSenior , { isAdult, canDrink } from "./person";

// // console.log(isAdult(20))
// // console.log(canDrink(5))
// // console.log(isSenior(75))

// // console.log(defaultOperation(100,20))