class VisibilityToggle extends React.Component {
    constructor(props){
        super(props)
        this.showDetail = this.showDetail.bind(this)
        this.state = {
            visibility: false
        }
    }

    showDetail(){
        this.setState((state) =>{
            return {
                visibility: !state.visibility
            }
        })
    }

    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.showDetail}>{this.state.visibility ? 'Hide Detail' : 'Show Detail'}</button>
                {this.state.visibility && <p>text is visible</p>}
            </div>
        )
    }


}


ReactDOM.render(<VisibilityToggle />,document.getElementById('app'))