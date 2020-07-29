import React from 'react';

export default class YouTubeDebugger extends React.Component{
    constructor() {
        super()

        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                test: 0,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleBitRateClick = (event) => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResolutionClick = (event) => {
        console.log({...this.state})
        this.setState({
            
            settings: {
                ...this.state.settings,
                // bitrate: this.state.settings.bitrate,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
            
        })
    }

    render(){
        return(
            <div>
                <button className="bitrate" onClick={this.handleBitRateClick}>{this.state.settings.bitrate}</button>
                <button className="resolution" onClick={this.handleResolutionClick}>{this.state.settings.video.resolution}</button>
            </div>
        )
    }
}