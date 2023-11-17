var object = {
    title: "New React App",
    subtitle: "indecision App",
    options: []
}
var template = (
    <div>
        {object.title && <p>{object.title}</p>}
        <p>{object.subtitle}</p>
        <p>{(object.options.length > 0) ? 'here are your options' : 'NO options'}</p>
        <ol>
            <li>udemy</li>
            <li>coursera</li>
        </ol>
    </div>
)
function gettitle(title){
    if (title){
        return <h1>{title}</h1>
    }
}
