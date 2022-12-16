import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const AlphaNumeral = () => {

  const dispatch = useDispatch();

  const alphanumerals = useSelector((state) => state.alphaNumeralReducer.alphanumerals)

  useEffect(() => {
    const getAlphaNumerals = async () => {
      const res = await
      fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json()
      dispatch({
        type: 'GET_DATA',
        payload: data
      })
    }
    getAlphaNumerals();
  }, [dispatch])

  return (
    <ul>
      {alphanumerals.map((alphanumeral) => (
        <li key={alphanumeral.id}>{alphanumeral.title}</li>
      ))}
    </ul>
  )
}

export default AlphaNumeral
