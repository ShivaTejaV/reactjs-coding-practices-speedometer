// Write your code
import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  render() {
    return (
      <div className="bg">
        <h1 className="title">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="heading">
          Speed is <span>0</span>mph
        </h1>
        <p className="para">Min Limit is 0mph,Max Limit is 200mph</p>
        <div>
          <button className="btn btn1" type="button">
            Accelretae
          </button>
          <button className="btn btn2" type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
