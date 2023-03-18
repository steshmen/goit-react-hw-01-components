import css from './FriendsList.module.css';


export const FriendsList = ({children}) => {
    return (
        <ul className={css.container}>
            {children}
        </ul>
    )
}
