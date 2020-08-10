// Code YouTubeDebugger Component Here
import React from 'react'
class YouTubeDebugger extends React.Component{
    
    constructor(){
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

    clickBit = () =>{
        this.setState({
            settings:{
                ...this.state.settings,
                bitrate: 12
            }
        })
    }
    clickRes = () =>{
        this.setState({
            settings:{
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.settings.bitrate}</h1>
                <button className="bitrate" onClick={this.clickBit}></button>
                <h1>{this.state.settings.video.resolution}</h1>
                <button className="resolution" onClick={this.clickRes}></button>
            </div>
        )
    }

}
export default YouTubeDebugger