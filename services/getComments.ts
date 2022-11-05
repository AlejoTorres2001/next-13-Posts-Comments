import { CommentType, cacheOptions } from '../@types'
import sleep from './sleep'
const getPost = async (
  Postid: string,
  cacheOptions?: cacheOptions
): Promise<CommentType[] | undefined> => {
  await sleep(5000)
  //throw new Error('error loading comments')
  return fetch(`https://jsonplaceholder.typicode.com/posts/${Postid}/comments`, cacheOptions)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err)
    })
}
export default getPost
