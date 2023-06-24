import React, { Component } from 'react'

export default class Clock extends Component {
  render() {
    return (
      <div>
        <p>Hello User!</p>
        <p>It is {new Date().toLocaleTimeString()}</p>
      </div>
    )
  }
}
