import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/Indecision';
import 'normalize.css/normalize.css'
import './styles/styles.scss'

// stateless functional component


// class OldSyntax {
//     constructor(){
//         this.name= 'Mike'
//     }
// }

// const old = new OldSyntax()
// console.log(old)

// class NewSyntax {
//     name = "Mike"
// }

// const newSyntax = new NewSyntax()
// console.log(newSyntax)
  

  

  


  
  // const User = (props) => {
  //   return (
  //     <div>
  //       <p>Name: {props.name}</p>
  //       <p>Age: {props.age}</p>
  //     </div>
  //   );
  // };
  
  ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

