// Code YouTubeDebugger Component Here
import React from 'react'; 

export default class YouTubeDebugger extends React.Component {

	constructor(props) {
		super()

		this.state = {
  			errors: [],
  			user: null,
  			settings: {
    			bitrate: 8,
    			video: {
      				resolution: '1080p'
    			}
    		}
  		}
	}

	handleBitrate = () => {
		this.setState({
				settings: {
					...this.state.settings,
					bitrate: 12
				}
			}, () => console.log(this.state.settings.bitrate))
	}

	handleResolution = () => {
		this.setState({
			settings: {
				...this.state.settings,
					video: {
					resolution: '720p'
				}
			}
		}, () => console.log(this.state.settings))
	}

	render() {
		return (
			<div>
			<button className='bitrate' onClick={this.handleBitrate}>Change Bitrate</button>
			<button className='resolution' onClick={this.handleResolution}>Change Resolution</button>
			</div>
		)
	}
}