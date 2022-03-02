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
            <div className={style.logo}>
                <Link to='/'>
                    <div className={style.header}>
                        <img src="../../assets/img/JERRY.png"></img>
                        <div><b>VOLTAR</b></div>
                    </div>
                </Link>
            </div>
            <div className={style.container} >
                <div className={style.cartao}><img src={info.image} /> </div>

                <ul className={style.info}>
                    <li>Name: {info.name} </li>
                    <li>Status: {info.status} </li>
                    <li>Specie: {info.species} </li>
                    <li>Gender: {info.gender} </li>
                    <li>Origin: {info?.origin?.name} </li>
                    <li>Location: {info?.origin?.name} </li>
                </ul>
            </div>
        </>
    )
}