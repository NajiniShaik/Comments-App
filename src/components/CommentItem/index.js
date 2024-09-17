import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {detailedObj, onDeleteItem, toggleLike, bgColorsList} = props

  const {name, comment, isLiked, id, randomVal} = detailedObj

  const imgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const isActive = isLiked ? ' active' : ''

  const onClickDelete = () => {
    onDeleteItem(id)
  }

  const onClickLike = () => {
    toggleLike(id)
  }

  const formattedTime = formatDistanceToNow(new Date())

  return (
    <li className="list-item">
      <div className="detailed-card">
        <h1 className={`logo ${bgColorsList[randomVal]}`}>{name[0]}</h1>
        <div>
          <h1 className="name">
            {name}
            <span className="time">{formattedTime} ago</span>
          </h1>
          <p className="comment">{comment}</p>
        </div>
      </div>

      <div className="bottom-card">
        <button
          className={`btn ${isActive}`}
          type="button"
          onClick={onClickLike}
        >
          <img src={imgUrl} className="img" alt="like" />
          Like
        </button>

        <button
          className="btn"
          type="button"
          onClick={onClickDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="img"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
