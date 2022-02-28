import style from './CharacterInfo.module.scss'
import { useParams } from 'react-router-dom'

export function CharacterInfo() {
    const {id} = useParams()
    return (
        <>
        <h1 className={style.teste}>{id}</h1>
        <div>
        </div>
        </>
    )
}