import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Tweet = ({ name, username, tweetText }) => (
  <div className={'tweet'}>
    <div className={'name'}>{ name }</div>
    <div className={'screen-name'}><Link to={`/@{ username }`}>@{ username }</Link></div>
    <div className={'tweet-text'}>{ tweetText }</div>
  </div>
)

Tweet.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tweetText: PropTypes.string.isRequired,
}

export default Tweet