import { dogURL } from '../services/dogURL';
import { useState, useEffect } from 'react';

function RandomDogs(props) {
  const [dog, setDog] = useState("")

  async function handleClick() {
    const answer = await dogURL()

    setDog(answer.data.message.status)
  }

useEffect(() => {
   handleClick()
 }, [])

  return(
    <div>
      <h1>Random Dog</h1>
      <button oncClick={() => handleClick()}>Click Here for a Random Dog Pic</button>
      <p>{dog}</p>
    </div>
  )
}

export default RandomDogs;
