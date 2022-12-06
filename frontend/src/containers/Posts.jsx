import React, { useEffect,useReducer } from 'react';

// component
import Api from './Api'

// apis
import { fetchPosts } from '../apis/posts';

// reducers
import {
  initialState,
  postsActionTyps,
  postsReducer,
} from '../reducers/posts';

export const Posts = () => {

   useEffect(() => {
    fetchPosts()
    .then((data) =>
      console.log(data)
    )
  }, [])

  const [state, dispatch] = useReducer(postsReducer, initialState);

  useEffect(() => {
    dispatch({ type: postsActionTyps.FETCHING });
    fetchPosts()
    .then((data) =>
      dispatch({
        type: postsActionTyps.FETCH_SUCCESS,
        payload: {
          posts: data.data
        }
      })
    )
  }, [])

  // postsを配列として取得
  console.log(state.postsList.posts)
  const array = state.postsList.posts
  console.log(array)

  return (
    <>
      <p>Post一覧</p>
      <Api />
    </>
  )
}
