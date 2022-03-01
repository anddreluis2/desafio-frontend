import style from './CharacterInfo.module.scss'
import { Link, useParams } from 'react-router-dom'
import { getCharacter } from '../../services/getCharacter'
import { useEffect } from 'react'

export function CharacterInfo() {
    const { id } = useParams()
    useEffect(async () => {
        const characterResponse = await getCharacter(id)
        console.log(characterResponse)

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
                <div className={style.cartao}>FOTO PUXADA DA API</div>

                <div className={style.info}>ID: {id}</div>
            </div>
        </>
    )
}