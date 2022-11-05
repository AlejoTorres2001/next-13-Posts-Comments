import Link from 'next/link'
import React from 'react'
import getPost from '../../services/getPost'

export default async function Post ({
  id
}: {
  id: string
}): Promise<React.ReactElement> {
  const post = await getPost(id, { cache: 'no-cache' })
  return (
    <article>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
      <Link href={`/posts/${id}/comments`}>
        See Comments
      </Link>
    </article>
  )
}
