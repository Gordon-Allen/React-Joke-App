import React from "react"
import ReactDOM from "react-dom"

import Joke from './Joke';
import jokesData from './jokesdata';

class App extends React.Component {
  jokeComponents = jokesData.map((joke) => (
    <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />
  ));
  render() {
    return (
      <div className="App">
        <h1><em>Looking For a Laugh? </em>Here's A Few Office-Friendly Knee-Slappers For Ya:</h1>
          {this.jokeComponents}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"))

// #1
// function App() {
//     return (<div>
//                 {/* <Header username="Gordon"/> */}
//                 {/* <Greeting /> */}
//                 <Login />
//                 </div>)
// }
// #2
// function Header(props) {
//     return (<header><p>Welcome, {props.username}!</p></header>)
// }

// class Header extends React.Component {
//     render() {
//         return (
//             <header><p>Welcome, {this.props.username}!</p></header>
//         )
//     }
// }
// #3
// function Greeting() {
//     const date = new Date()
//     const hours = date.getHours()
//     let timeOfDay
//     if (hours < 12) {timeOfDay = "morning"}
//     else if (hours >= 12 && hours < 17) {timeOfDay = "afternoon"}
//     else {timeOfDay = "night"}
//     return (<h1>Good {timeOfDay} to you, sir or madam!</h1>)
// }


// class Greeting extends React.Component {
//     render() {
//         const date = new Date()
//         const hours = date.getHour
//         let timeOfDay
//         if (hours < 12) {
//             timeOfDay = "morning"
//         }
//         else if (hours >= 12 && hours < 17) {
//             timeOfDay = "afternoon"
//         }
//         else {
//             timeOfDay = "night"
//         }
//         return (<h1>Good {timeOfDay} to you, sir or madam!</h1>)
//     }
// }

// export class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {isLoggedIn: true};
//     this.toggleLogin = this.toggleLogin.bind(this);
//   }
//   toggleLogin() {
//     this.setState(() => {return {isLoggedIn: !this.state.isLoggedIn}})
//   }

//   render = () => {
//     return (
//       <div>
//         You are currently logged {this.state.isLoggedIn ? "in" : "out"}
//         <button onClick={this.toggleLogin}>Switch</button>
//       </div>
//     );
//   }

// }

// class Login extends React.Component {
//     state = {
//         isLoggedIn: true
//     }

//     toggleLogin = () => {
//         this.setState(state => ({
//             isLoggedIn: !state.isLoggedIn
//         }));
//     }

//     render() {
//         return (
//             <div className="App">
//                 <h1>Are You Logged In? Answer =>  {this.state.isLoggedIn}</h1>
//                 <button on Click={this.toggleLogin}>Switch</button>
//             </div>
//         )
//     };

// };
