import PostCard from "../components/posts/PostCard";
import useFetch from "../hooks/useFetch";
import Post from "../types/Post";

const Feed = () => {
  const { data, loading, error } = useFetch<Post[]>('/posts');

  if (loading) return <div>Loading</div>
  if (error) return <div>Ops, something went wrong</div>

  return (
    <div className="flex justify-center">
      <div className='max-w-xl'>
        {data.map((post) => <PostCard key={post.id} post={post} />)}
      </div>
    </div>
  )
}

export default Feed;
