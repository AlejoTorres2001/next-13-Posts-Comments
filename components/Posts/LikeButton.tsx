'use client'

import React, { useState } from 'react'
type Props = {
  id: number
}
export function LikeButton ({ id }: Props): React.ReactElement {
  const [liked, setLiked] = useState(false)
  return <button onClick={() => setLiked(!liked)}>{liked ? '💖' : '🖤'}</button>
}
