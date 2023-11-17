// challenge map on object

let user = {
    name: "shoaib",
    studies: ['SSC','Diploma','B.E.'],
    printQualification: function() {
        console.log(this)
        this.studies.forEach((study)=>{
            console.log(this)
            console.log(this.name + ' had studied ' + study)
        })
    }
}

user.printQualification()


// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
  };
  console.log(add(55, 1, 1001));
  
  // this keyword - no longer bound
  
  const newUser = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
      return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
  };
  console.log(newUser.printPlacesLived());
  
  // Challenge area
  
  const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
      return this.numbers.map((number) => number * this.multiplyBy);
    }
  };
  
  console.log(multiplier.multiply());