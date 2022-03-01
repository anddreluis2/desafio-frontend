import { useEffect, useState } from 'react'
import style from './Cards.module.scss'
import { Link } from 'react-router-dom'
import { getCharacter } from '../../services/getCharacter'


export function Cards() {
    const [char, setChar] = useState([])
    useEffect(async () => {
        const getChar = await getCharacter()
        setChar(getChar)
    }, []
    )

    return (
        <div className={style.cards}>
            {char.map(resp => {
                return (
                    <Link to={`/character/${resp.name}`} key={resp.id}>
                        <div className={style.card} >
                            <img src={resp.image} />
                            <div className={style.cardname}>
                                {resp.name}
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}