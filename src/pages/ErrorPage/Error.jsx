import style from './Error.module.scss'

export function Error() {
    return (
        <div className={style.div}>
            <img className={style.img} src='assets\img\404error+message.jpg' />
        </div>
    )
}