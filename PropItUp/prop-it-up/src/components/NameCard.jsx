import React, { Component } from 'react'
import '../assets/style.css'
export class NameCard extends Component {
    constructor(props) {
        super(props);{
            this.state = {
                increaseAge: 0
            }
        }
    }

    
    render() {
        const {firstName, lastName, age, hairColor} = this.props

        return (
            <div className="main">
                <h3>{firstName}, {lastName} </h3>
                <p>Age: { this.state.increaseAge + age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={() => this.setState({increaseAge: this.state.increaseAge +1})}>Birthday Button</button>
                
            </div>
        )
    }
}

export default NameCard
