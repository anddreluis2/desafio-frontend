import style from './Header.module.scss'

export function Header() {
    return (
        <div className={style.header}>
            <img src="../assets/img/Rick_and_Morty_logo.svg" />
        </div>
    )
}