import React from 'react'
import questionData from './questions.js'
import Question from './Question'
import _ from 'lodash'

var Quiz = React.createClass({

    getInitialState() {
        return {
            visible: true
        }
    },

    renderQuestions(){
        let questions = []
        _.forEach(questionData, (question, i)=> {
            questions.push(<Question key={`question-${i}`}
                {...question}/>)
        })
        return questions
    },

    closeQuiz() {
        this.setState({"visible":false});
    },

    render() {
        return (
          <div className="eater-profile">
            <div className={this.state.visible ? 'quiz-cover open' : 'quiz-cover'} onClick={this.closeQuiz}>
              <img src="images/start_page.png"></img>
            </div>
            <div className="quiz-container">
              <div className="quiz-title">Eat your way through the Pharma 2017 conference and we will reveal which kind of event attendee you are.</div>
              {this.renderQuestions()}
              <img src="images/jet_setter.png"></img>
            </div>
          </div>
      )

    }

})

export default Quiz
