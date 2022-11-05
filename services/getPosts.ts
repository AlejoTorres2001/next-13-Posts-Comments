import { Post, cacheOptions } from '../@types'
const getPosts = async (cacheOptions?:cacheOptions): Promise<Post[] | []> => {
  return fetch('https://jsonplaceholder.typicode.com/posts', cacheOptions)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err)
      return []
    })
}
export default getPosts
