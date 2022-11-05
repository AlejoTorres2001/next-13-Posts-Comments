import React from 'react'

export default function PostPage ({
  params
}: {
  params: { id: string }
}): React.ReactElement {
  const { id } = params
  return <div>Esto es un post {id}</div>
}
