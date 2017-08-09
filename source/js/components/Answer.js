import React from 'react'

var Answer = React.createClass({

    getInitialState() {
        return { afterVisible: false }
    },

    onClick() {
        this.props.onClick()
        this.setState({afterVisible: true})
    },

    render() {
        let className = this.props.selected ? "answer-option selected" : "answer-option"
        return (<div className={className} onClick={this.onClick}>
            <img className={this.props.imageSrc ? "anwer-image" : 'hidden'} src={this.props.imageSrc} />
            <div className="answer-title">{this.props.afterText && this.state.afterVisible ? this.props.afterText: this.props.text}</div>
        </div>)
    }
})

export default Answer
