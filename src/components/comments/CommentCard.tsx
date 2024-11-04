import Comment from "../../types/Comment";

const CommentCard = ({ comment, postTitle } : { comment: Comment, postTitle: string }) => {
  return (
    <div className="border-[1px] border-[#2F3336] border-width-[1px] text-[#D9D9D9] px-4 py-3">
      <div className='px-4 py-3 flex items-start'>
       <img src="./favicon.svg" alt={`user-${comment.id}`} className="pr-3" />
        <div>
          <h2 className="font-light">Reply to {postTitle.slice(0, 30)} @User{comment.email}{new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}</h2>
          <h1 className="font-bold">{comment.name.slice(0, 30)}</h1>
          <p>{comment.body}</p>
        </div>
      </div>
    </div>
  )
}

export default CommentCard;
