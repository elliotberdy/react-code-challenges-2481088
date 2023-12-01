 // have a state that maintains what the dog image is
 // when button is clicked get new dog image and update the state

import { useEffect, useState } from "react"

const getDogPic = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random')
  const dog = await response.json()
  return dog.message
}
 
 export default function DogPics () {
  // API: https://dog.ceo/dog-api/

  const [dogPic, setDogPic] = useState('null')

  useEffect(() => {
    getDogPic().then(pic => setDogPic(pic))
  }, [])

  return (
    <div className='dog-pics'>
      <img src={dogPic} alt="" />
      <button onClick={async e => setDogPic(await getDogPic())}>🐶</button>
    </div>
  )
}
