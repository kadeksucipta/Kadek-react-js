import React from "react";
import Title from "./pembahasan/Title";

export default class Lifecycle extends React.Component {
    state = {
        name: "Component",
        view: true,
        count: 0
    }
    render() {
        return(
            <div>
                {
                    this.state.view && <Title name={this.state.name} count={this.state.count} />
                }

                <button onClick={() => this.setState({view: false})}>Copot</button>
                <button onClick={() => this.setState({name: "Fuction"})}>Update</button>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Count</button>
            </div>
        )
    }
}