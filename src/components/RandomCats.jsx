import { catURL } from '../services/catURL';
import { useState, useEffect } from 'react';

function RandomCats(props) {
  const [cat, setCat] = useState("")

  async function handleClick() {
    const answer = await catURL()

    setCat(breeds.id.url)
  }
useEffect(() => {
   handleClick()
 }, [])

  return(
    <div>
      <h1>Random Cat</h1>
      <button oncClick={() => handleClick()}>Click Here for a Random Cat Pic</button>
      <p>{cat}</p>
    </div>
  )
}

export default RandomCats;
