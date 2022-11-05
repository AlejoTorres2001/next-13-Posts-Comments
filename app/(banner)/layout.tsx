import React from 'react'

export default function SharedLayout ({
  children
}: {
  children: React.ReactNode
}): React.ReactElement {
  return (
    <div>
      <marquee>Shared Layout</marquee>
      {children}
    </div>
  )
}
