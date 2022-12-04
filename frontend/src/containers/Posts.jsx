import React, { useEffect } from 'react';

// apis
import { fetchPosts } from '../apis/posts';

export const Posts = () => {

   useEffect(() => {
    fetchPosts()
    .then((data) =>
      console.log(data)
    )
  }, [])

  return (
    <>
      <p>Post一覧</p>
    </>
  )
}
