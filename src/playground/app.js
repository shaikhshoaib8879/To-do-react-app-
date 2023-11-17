// class based components
class IndecisionApp extends React.Component {
  constructor(props){
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.handleDeleteOneOption = this.handleDeleteOneOption.bind(this);
    this.state = {
      options: props.options
    }
  }

  handleDeleteOption(){

    // this.setState(() => ({options:[]}))

    this.setState(() =>{
      return{
        options:[]
      }
    })
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }



  handleDeleteOneOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  // handleDeleteOneOption(optionToRemove){
  //   this.setState((prevState) =>({
  //     options: prevState.options.filter((option) =>{
  //       return optionToRemove !== option
  //     })
  //   })
  //   )
  // }
  handleAddOption(option){
    if (!option){
      return 'Enter Valid Value'
    }
    else if (this.state.options.indexOf(option) > -1){
      return 'This Option already exist'
    }
    this.setState((prevState) =>{
      return {
        options: prevState.options.concat(option)
      }
    })
  }
  handlePick(){
    let value = Math.floor(Math.random() * this.state.options.length)
  }

  render () {
    const title = "Indecision"
    const subtitle = "Life without Computer"
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action 
          hasOption={this.state.options.length>0}
          handlePick={this.handlePick}  
        />
        <Options 
          options={this.state.options}
          handleDeleteOption={this.handleDeleteOption}
          handleDeleteOneOption={this.handleDeleteOneOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

//default props for class

IndecisionApp.defaultProps = {
  options: []
}

// class Header extends React.Component{
//   render(){
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>

//       </div>

//       )
//     }
// }

//stateless function component

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>

    </div>

    )
}

Header.defaultProps = {
  title: 'some default'
}

const Action = (props) =>{
  return (
      <div>
        <button
          onClick={props.handlePick}
          disabled={!props.hasOption}
          >
          What Should I do?</button>
      </div>   
  )
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleOptions}>Remove All</button>
      {props.options.length ===0 && <p>Please add an Option to gte</p>}
      {
        props.options.map((option) => (
        <Option 
          key={option} 
          optionText={option}
          handleDeleteOneOption={props.handleDeleteOneOption}
          />
        ))
      }
    
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      Option: {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOneOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  )
}

// class Action extends React.Component{
//   // handleClick() {
//   // };
//   render(){
//     return (
//       <div>
//         <button
//           onClick={this.props.handlePick}
//           disabled={!this.props.hasOption}
//           >
//           What Should I do?</button>
//       </div>
//     )
//   }
// }



// class Options extends React.Component{
//   // removeAll(){
//   //   alert('remove')
//   // }
//   render() {
//     return (
      
//       <div>
//         <button onClick={this.props.handleOptions}>Remove All</button>
//         {
//           this.props.options.map((option) => <Option key={option} optionText={option}/>)
//         }
        
//       </div>
//     )
//   }
// }

// class Option extends React.Component{
//   render() {
//     return (
//       <div>
//         Option: {this.props.optionText}
//       </div>
//     )
//   }
// }

class AddOption extends React.Component{
  constructor(props){
    super(props)
    this.getFormData = this.getFormData.bind(this)
    this.state = {
      error: undefined
    }
  }
  getFormData(e) {
    e.preventDefault();
    let option = e.target.elements.option.value
    let error = this.props.handleAddOption(option)


    // this.setState(() => ({error}))
    
    this.setState(() =>{
      return{ error }
    })

    if(!error){
      e.target.elements.option.value = ''
    }


  }
  render() {
    return (
      <div>
        <form onSubmit={this.getFormData}>
          {this.state.error && <p>{this.state.error}</p>}
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

//stateless function component

// const User = () => {
//   return (
//     <div>
//       <p>Name: </p>
//       <p>Age: </p>
//     </div>
//   )
// }





ReactDOM.render(<IndecisionApp />,document.getElementById('app'))