// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handleClicked = () => {
        this.setState(previouseState => {
            return {
                timesClicked: previouseState.timesClicked + 1
            }

        })
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClicked}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker