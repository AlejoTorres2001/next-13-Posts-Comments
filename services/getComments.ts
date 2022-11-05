import { Comment, cacheOptions } from '../@types'
const getPost = async (
  Postid: string,
  cacheOptions?: cacheOptions
): Promise<Comment[] | undefined> => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${Postid}/comments`, cacheOptions)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err)
    })
}
export default getPost
