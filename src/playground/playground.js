console.log("App.js is running");

//JSX - JAVASCRIPT XML

var app = {
    title: "Appp",
    subtitle: "This is my sub"
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
    </div>
);
var templateTwo = (
    <div>
        <h1>Maria</h1>
        <p>Age: 26</p>
        <p>Location: NL</p>

    </div>
);
var approot = document.getElementById("app");


const mulitiplier = {
    numbers: [1,2,3],
    multiplyBy : 5,

    multiply() {   
        return this.numbers.map((mult) => mult * this.multiplyBy);
    }

};

mulitiplier.multiply();

ReactDOM.render(template, approot);
