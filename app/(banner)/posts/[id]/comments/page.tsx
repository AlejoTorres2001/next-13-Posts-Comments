import { PostParams } from '../../../../../@types'
import Comment from '../../../../../components/Comments/Comment'
import getComments from '../../../../../services/getComments'

export default async function CommentPage ({ params }: { params: PostParams }) {
  const { id } = params
  const comments = await getComments(id)
  return (
    <ul style={{ background: '#444', fontSize: '15px' }}>
      {comments?.map(({ id, name, body }) => (
        <Comment key={id} id={id} name={name} body={body} />
      ))}
    </ul>
  )
}
