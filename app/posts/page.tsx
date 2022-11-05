import React from 'react'
import { PostsList } from '../../components/Posts/index'
export default async function PostsPage (): Promise<React.ReactElement> {
  return (
    <section>
      {/* eslint-ignore-next-line */}
      <PostsList />
    </section>
  )
}
