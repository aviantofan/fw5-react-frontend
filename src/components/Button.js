import React from "react"
import { FaPlus, FaMinus } from 'react-icons/fa'

export class Button extends React.Component {
  state = {
    angka: 0
  }
  plus = () => {
    this.setState({
      angka: this.state.angka + 1
    })
  }
  minus = () => {
    if (this.state.angka > 0) {
      this.setState({
        angka: this.state.angka - 1
      })
    }
  }

  render() {
    return (
      <div className="day d-flex row justify-content-between align-items-center">
        <div className="col">
          <button onClick={this.plus} className="plus"><FaPlus /></button>
        </div>
        <div className="col">
          <div className="count">{this.state.angka}</div>
        </div>
        <div className="col">
          <button onClick={this.minus} className="minus"><FaMinus /></button>
        </div>
      </div>
    )
  }
}

export default Button