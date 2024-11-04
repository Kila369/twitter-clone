import Post from "../../types/Post";

const PostCard = ({ post } : { post: Post }) => {
  return (
    <div className='border-[1px] border-[#2F3336] border-width-[1px] flex text-[#D9D9D9]'>
      <div className='px-4 py-3 flex items-start'>
       <img src="./favicon.svg" alt={`user-${post.userId}`} className="pr-3" />
        <div>
          <h1 className="font-bold">{post.title}{new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}</h1>
          <p>{post.body}</p>
          <h6>{post.userId}</h6>
        </div>
      </div>
    </div>
  )
}

export default PostCard;
