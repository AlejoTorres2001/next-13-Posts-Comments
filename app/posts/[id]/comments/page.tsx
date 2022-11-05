import { PostParams } from '../../../../@types'
import getComments from '../../../../services/getComments'

export default async function CommentPage ({ params }: { params: PostParams }) {
  const { id } = params
  const comments = await getComments(id)
  return (
    <ul>
      {comments?.map((comment) => (
        <div key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
        </div>
      ))}
    </ul>
  )
}
