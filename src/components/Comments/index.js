import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const listSize = initialContainerBackgroundClassNames.length

// Write your code here

class Comments extends Component {
  state = {commentsList: [], name: '', comment: ''}

  onAddComment = event => {
    event.preventDefault()

    const {name, comment} = this.state

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      randomVal: Math.floor(Math.random() * listSize),
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onDeleteItem = id => {
    const {commentsList} = this.state

    const filteredList = commentsList.filter(each => each.id !== id)

    this.setState({commentsList: filteredList})
  }

  toggleLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  updateName = event => {
    this.setState({name: event.target.value})
  }

  updateComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {commentsList, name, comment} = this.state

    return (
      <div className="comments-app-container">
        <div className="bg-container">
          <h1 className="main-heading">Comments</h1>
          <div className="cards-container">
            <form className="form-element" onSubmit={this.onAddComment}>
              <p className="topic">Say Something about 4.0 Technologies</p>
              <div>
                <input
                  type="text"
                  className="input-element"
                  placeholder="Your Name"
                  value={name}
                  onChange={this.updateName}
                />
              </div>
              <div>
                <textarea
                  rows="7"
                  className="input-element"
                  placeholder="Your Comment"
                  value={comment}
                  onChange={this.updateComment}
                ></textarea>
              </div>
              <button type="submit" className="add-btn">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="comments-img"
              alt="comments"
            />
          </div>

          <div className="comments-item-container">
            <p className="title">
              <span className="count">{commentsList.length}</span> Comments
            </p>

            <ul className="comments-items-list">
              {commentsList.map(eachComment => (
                <CommentItem
                  detailedObj={eachComment}
                  key={eachComment.id}
                  onDeleteItem={this.onDeleteItem}
                  toggleLike={this.toggleLike}
                  bgColorsList={initialContainerBackgroundClassNames}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
