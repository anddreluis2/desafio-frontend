import style from './CharacterInfo.module.scss'
import { Link, useParams } from 'react-router-dom'
import { getCharacter } from '../../services/getCharacter'
import { useEffect, useState } from 'react'

export function CharacterInfo() {
    const [info, setInfo] = useState({})
    const { id } = useParams()
    useEffect(async () => {
        const characterResponse = await getCharacter(id)
        setInfo(characterResponse)

    }, []
    )
    return (
        <>
            <Link to='/'>
                <div className={style.logo}>
                    <img src='../assets/img/Rick_and_Morty_logo.svg' />
                </div>
            </Link>
            <div className={style.container} >
                <div className={style.cartao}><img src={info.image} /> </div>

                <div className={style.info}>
                    Nome: {info.name} <br />
                    Status: {info.status} <br />
                    Especie: {info.species} <br />
                    Gênero: {info.gender} <br />
                </div>
            </div>
        </>
    )
}