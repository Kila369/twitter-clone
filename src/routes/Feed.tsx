import PostCard from "../components/posts/PostCard";
import ErrorComponent from "../components/shared/ErrorComponent";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import useFetch from "../hooks/useFetch";
import Post from "../types/Post";

const Feed = () => {
  const { data, loading, error } = useFetch<Post[]>('/posts');

  if (loading) return <div className="h-40"><LoadingSpinner /></div>
  if (error) return <ErrorComponent />

  return (
    <div className="flex justify-center">
      <div className='max-w-2xl'>
        {data.map((post) => <PostCard key={post.id} post={post} />)}
      </div>
    </div>
  )
}

export default Feed;
