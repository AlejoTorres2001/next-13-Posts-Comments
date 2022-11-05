import React from 'react'

export default function PostLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <small>Home &bull; Posts</small>
      {children}
    </div>
  )
}
