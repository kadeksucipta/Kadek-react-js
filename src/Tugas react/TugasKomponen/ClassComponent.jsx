import React from "react";

class ClassComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            value : 0
        }

        this.handlePlus = this.handlePlus.bind(this)
        this.handleMin = this.handleMin.bind(this)
    }

    handlePlus() {
        this.setState({value: this.state.value + 1})
    }

    handleMin() {
        if(this.state.value > 0){
            this.setState({value: this.state.value - 1})
        }
    }

    render() {
        return(
            <div>
                <h1 style={{fontFamily: "calibri"}}>Ini adalah contoh komponen Props dan State</h1>
                <h2 style={{fontFamily: "calibri"}}>Silahkan {this.props.nama}</h2>
                <button style={{background:"none", color:"black", borderRadius:"6px",cursor:"pointer"}} onClick={this.handleMin}>-</button>
                <span>{'  '}{this.state.value}{'  '}</span>
                <button style={{background:"none", color:"black", borderRadius:"6px",cursor:"pointer"}} onClick={this.handlePlus}>+</button>
                <hr />
            </div>
        )
    }
}

export default ClassComponent