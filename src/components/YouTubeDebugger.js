import React, { Component } from "react";

class YouTubeDebugger extends Component {

  constructor() {
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
    this.setState ({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }
  handleResolution = () => {
    this.setState ({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return(
      <div>
        <div>
          <button className="bitrate" onClick={this.handleBitrate}>
            Bitrate {this.state.settings.bitrate}
          </button>
        </div>
        <div>
          <button className='resolution' onClick={this.handleResolution}>
            Resolution {this.state.settings.video.resolution}
          </button>
        </div>

       
      </div>
    )
  }
}

export default YouTubeDebugger