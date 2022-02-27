import { useEffect, useState } from 'react'
import { api  } from '../services/api'
import style from './Cards.module.scss'


export function Cards(){
    const [char, setChar] = useState([])


    useEffect(async () => {
      const response = await api.get("character")
  
      setChar(response.data.results.slice(0, 5))
      console.log(response.data)
    }, []
    )
  
    return(
<div className={style.cards}>
{char.map(resp => {
  return (
    <div className={style.card}  key={resp.id}>
      <img src={resp.image} className='avatar' />
      <div className={style.cardname}>
        {resp.name}
      </div>
    </div>
  )
})}
</div>
    )
}