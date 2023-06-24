import React, { Component } from 'react'

export default class Clock extends Component {
    constructor (props){
        super(props);
        this.state = {
            date: new Date()
        }
    }
  render() {
    return (
      <div>
        <p>Hello User!</p>
        <p>It is {new Date().toLocaleTimeString()}</p>
      </div>
    )
  }
}
