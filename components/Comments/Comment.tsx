import React from 'react'

export default async function Comment ({
  id,
  name,
  body
}: {
  id: number
  name: string
  body: string
}): Promise<React.ReactElement> {
  return (
    <li key={id}>
      <h4>{name}</h4>
      <small>{body}</small>
    </li>
  )
}
