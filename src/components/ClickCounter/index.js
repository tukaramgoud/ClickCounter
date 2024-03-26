import {Component} from 'react'
import './index.css'
// Write your code here
class ClickCounter extends Component {
  state = {count: 0}

  buttonClicked = () => {
    this.setState(pervState => ({count: pervState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="background-container">
        <h1 className="main-heading">
          The Button has been clicked{' '}
          <span className="counter-styling"> {count} </span>
          times
        </h1>
        <p>Click the Button to Increase the count</p>
        <button
          type="button"
          className="click-here-button"
          onClick={this.buttonClicked}
        >
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
