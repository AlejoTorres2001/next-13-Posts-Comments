import Link from 'next/link'
import React from 'react'
import getPosts from '../../services/getPosts'
import { LikeButton } from './index'

export default async function PostsList (): Promise<React.ReactNode> {
  const posts = await getPosts({
    next: {
      revalidate: 20
    }
  })
  return posts.slice(0, 10).map((post) => (
    <article key={post.id}>
      <Link href='/posts/[id]' as={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.body}</p>
      <LikeButton id={post.id} />
    </article>
  ))
}
