import useFetch from "../../hooks/useFetch";
import Comment from "../../types/Comment";
import ErrorComponent from "../shared/ErrorComponent";
import LoadingSpinner from "../shared/LoadingSpinner";
import CommentCard from "./CommentCard";

const Comments = ({ postId, postTitle } : { postId: number, postTitle: string }) => {
  const { data, loading, error } = useFetch<Comment[]>(`/comments?postId=${postId}`);
  if (loading) return <div className="h-8"><LoadingSpinner /></div>
  if (error) return <ErrorComponent />

  return (
    <div>
      {data && data.map((comment) => (
        <CommentCard comment={comment} postTitle={postTitle} />
      ))}
    </div>
  )
}

export default Comments;
