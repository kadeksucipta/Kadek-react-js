import React from "react";
import PropTypes from 'prop-types'

class ClassComponent extends React.Component{
    state = {
        value: 0
    }

    handlePlus = () => {
        this.setState({value: this.state.value + 1})
    }

    handleMin = () => {
        if(this.state.value > 0){
            this.setState({value: this.state.value -1})
        }
    }

    render() {
        return(
            <div>
                <h1>komponen ini dibuat dengan class componennt </h1>
                <h2>hello {this.props.nama}</h2>
                <button onClick={this.handleMin}>-</button>
                <span>{'  ' }{this.state.value} {'  '}</span>
                <button onClick={this.handlePlus}>+</button>
            </div>
        )
    }
}

ClassComponent.propTypes = {
    nama: PropTypes.string.isRequired
}
export default ClassComponent