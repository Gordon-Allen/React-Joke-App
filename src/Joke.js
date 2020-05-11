import React from "react";

function Joke(props) {
    // console.log(props);
    return (
        <div>
            <div><h3>Question: <em>{props.question}</em></h3></div>
            <div><h3>Punch-Line: <em>{props.punchline}</em></h3></div>
            <br/>
        </div>
    );
}
export default Joke;