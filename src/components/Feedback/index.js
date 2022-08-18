// Write your React code here.
import {Component} from 'react'
import './index.css'
import EmojiItem from '../EmojiItem/index'

class Feedback extends Component {
  state = {clickstatus: 0}

  updatestatusonclick = () => {
    this.setState(currentstate => ({clickstatus: !currentstate.clickstatus}))
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {clickstatus} = this.state
    return (
      <div className="bg-container">
        <div className="feedback-card">
          {clickstatus === 0 ? (
            <div className="Emoji-content">
              <h1 className="question">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="emoji-container">
                {emojis.map(each => (
                  <EmojiItem
                    item={each}
                    key={each.id}
                    updatestatusonclick={this.updatestatusonclick}
                  />
                ))}
              </ul>
            </div>
          ) : (
            <div className="thankyou-content">
              <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
              <h1 className="thanks-text">Thank You</h1>
              <p className="thanks-description">
                We will use your feedback to improve our customer support
                performance
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
