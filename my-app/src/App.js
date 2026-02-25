import logo from './logo.svg';
import './App.css';

let userMessage = "Hello Nilesh"
console.log(userMessage);
console.log("Hello" + "World");

const user = {
  name: "max",
  age: 34,
  greet(){
    console.log("Hello");
    console.log(this.age);
  }
};
console.log(user.name);
user.greet();


const hobbies = ["sports", "Cooking", "React"]
console.log(hobbies[0]);

hobbies.push("working");
console.log(hobbies);

const index = hobbies.findIndex((item) => {
  return item === 'React ';
});
console.log(index)

function Header() {
  return ( <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to React Nilesh</h1>
        <p>
          <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      )
}

function App() {
  return (
    <div className="App">

     <div>
      <Header />
      <main>
        <h2>Welcome to React</h2>
      </main>
     </div>
    </div>
  );
}

export default App;
