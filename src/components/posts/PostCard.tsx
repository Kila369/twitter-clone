import { useState } from "react";
import Post from "../../types/Post";
import Comments from "../comments/Comments";

const PostCard = ({ post } : { post: Post }) => {
  const [showComment, setShowComments] = useState(false);

  return (
    <>
    <div className='border-[1px] border-[#2F3336] border-width-[1px] text-[#D9D9D9]'>
      <div className='px-4 py-3 flex items-start'>
       <img src="./favicon.svg" alt={`user-${post.userId}`} className="pr-3" />
        <div>
          <h3 className="font-normal">
            @User-{post.userId} &nbsp;
            <span className=" text-gray-600">{new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}</span>
          </h3>
          <h2 className="font-bold">{post.title.slice(0, 30)} </h2>
          <p>{post.body}</p>
          <button className="mt-2" onClick={() => setShowComments(!showComment)}>{showComment ? "Hide" : "Show"} comments</button>
        </div>
      </div>
      {showComment ? (
          <Comments postId={post.id} postTitle={post.title} />
        ) : <></>}
    </div>
    </>
  )
}

export default PostCard;
