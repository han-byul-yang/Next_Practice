import { useState } from 'react'

const CommentPage = () => {
  const [commentData, setCommentData] = useState([])

  const handleFetchDataClick = async () => {
    const response = await fetch('/api/comments')
    const data = await response.json()
    setCommentData(data)
  }

  return (
    <>
      <button type='button' onClick={handleFetchDataClick}>
        fetch comments data
      </button>
      {commentData.map((comment: { id: number; comment: string }) => {
        return <li key={comment.id}>{comment.comment}</li>
      })}
    </>
  )
}

export default CommentPage
