import React from 'react'
import _ from 'lodash'
import Answer from './Answer'

var Question = React.createClass({

    getInitialState() {
        return {
            selected: []
        }
    },

    onClickAnswer(index) {
        if (this.props.radio) {
            let selected = [index]
            this.setState({selected})
        } else {
            if (this.state.selected.indexOf(index) > -1) {
                let selected = _.filter(this.state.selected, (s) => { return s !== index})
                this.setState({selected})
            } else {
                let selected = this.state.selected
                selected.push(index)
                this.setState({selected})
            }
        }
    },

    renderAnswerOptions() {
        let answers = []
        _.forEach(this.props.answerOptions, (answer, i) => {
            let selected = this.state.selected.indexOf(i) > -1
            answers.push(<Answer {...answer} selected={selected}
                onClick={() => {this.onClickAnswer(i)}}
                key={`answer-${i}`} />)
        })
        return answers
    },

    render() {
        let wrap = this.props.answerOptions.length > 3 ? true : false;
        return (<div className="question-container">
            <div className="question-title">{this.props.question}</div>
            <div className={wrap ? 'answer-container wrap' : 'answer-container'}>
              {this.renderAnswerOptions()}
            </div>
            {this.props.note? <div className="footer-stat">{this.props.note}</div> : '' }
        </div>)
    }
})

export default Question
