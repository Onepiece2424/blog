export const dataTransfer = async(value, dispatch) => {
  console.log(value)
  await dispatch({ type: 'ADD_TODO' })
  // console.log(dispatch({ type: 'ADD_TODO' }))
}
