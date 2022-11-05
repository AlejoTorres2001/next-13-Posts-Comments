import React from 'react'
import { PostParams } from '../../../@types'
import Post from '../../../components/Posts/Post'

export default async function PostPage ({
  params,
  children
}: {
  params: PostParams
  children: React.ReactNode
}): Promise<React.ReactElement> {
  const { id } = params

  return (
    <>
      <Post id={id} />
      {children}
    </>
  )
}
