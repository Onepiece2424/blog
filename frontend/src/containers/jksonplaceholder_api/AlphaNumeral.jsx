import { useEffect,useReducer } from 'react'
import {initialState, alphaNumeralReducer} from '../../reducers/data_api/data_api'


const AlphaNumeral = () => {

  const [state, dispatch] = useReducer(alphaNumeralReducer, initialState);

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
  }, [])

  useEffect(() => {
    const fetchQiitaItems = async () => {
    const response = await fetch(
      "https://qiita.com/api/v2/users/ryosuketter/items"
    );
    const json = await response.json();
    console.log(json);
    };
    fetchQiitaItems();
  }, [])

  return (
    <ul>
      {state.alphanumerals.map((alphanumeral) => (
        <li key={alphanumeral.id}>{alphanumeral.title}</li>
      ))}
    </ul>
  )
}

export default AlphaNumeral
