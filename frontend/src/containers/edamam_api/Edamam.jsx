import React, { useState,useEffect } from 'react'

// components
import Recipe from './Recipe'

const Edamam = () => {

  // keyの設置
  const APPLICATION_ID = '95034093'
  const APPLICATION_KEY = '37a1d3f71428fe238a8358091c3d863d'


  // stateの作成
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("banana")
  const [recipes, setRecipes] = useState([])

  // APIの取得
  const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APPLICATION_ID}&app_key=${APPLICATION_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  // 入力した時にsearchの更新
  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query] )

  return (
    <>
      <>Edamam</>
      <form onSubmit={getSearch}>
        <input type='text' value={search} onChange={updateSearch} />
        <button type='submit'>検索</button>
      </form>
      <div>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.title}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </>
  )
}

export default Edamam;
