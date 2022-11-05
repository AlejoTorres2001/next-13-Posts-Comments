import { Post, cacheOptions } from '../@types'
const getPost = async (
  id: string,
  cacheOptions?: cacheOptions
): Promise<Post | undefined> => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, cacheOptions)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err)
    })
}
export default getPost
