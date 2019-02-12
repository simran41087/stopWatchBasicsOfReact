import React, { Component } from 'react';

class TimerComponent extends React.Component {
    state = {lapse : 0, running : false}
    handleRunClick = () => {
        const startTime = Date.now() - this.state.lapse;
        if(this.state.running) {
            clearInterval(this.timer)
            this.setState({lapse: this.state.lapse, running: false})
        } else {
            this.timer = setInterval( () => {
                this.setState({lapse: Date.now() - startTime})}
            )
            this.setState({running: true})
        }
        
    }
    handleClearClick = () => {
        clearInterval(this.timer)
        this.setState({lapse:0, running:false})
    }
    render() {
        const {lapse, running} = this.state;
        return (
            <div>
                <label>{lapse/1000}s</label>
                <button onClick={this.handleRunClick}>{running?'stop':'start'}</button>
                <button onClick={this.handleClearClick}>Clear</button>
            </div>
        );
      }
    }
    export default TimerComponent;
