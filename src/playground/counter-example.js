ReactDOM.render(templateTwo,appRoot);

// update count

let renderCounterApp = () => {
    let templateThree = (
            <div>
                <h1>Count: {count}</h1>
                <button onClick={minusOne}>-1</button>
                <button onClick={addOne}>+1</button>
                <button onClick={reset}>reset</button>
            </div>
    );
    ReactDOM.render(templateThree,appRoot);
}

renderCounterApp()

let count = 0
const addOne = () => {
    count++;
    renderCounterApp()

}

const minusOne = ()=>{
    count--
    renderCounterApp()
}

const reset = ()=>{
    count=0
    renderCounterApp()
    
}


let templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={minusOne}>-1</button>
        <button onClick={addOne}>+1</button>
        <button onClick={reset}>reset</button>
    </div>
)