import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    
    const spanBg = isOnline ? 'green' : 'red';

    const statusStyles = {
    backgroundColor: spanBg,
    };
    
    return (
        <li className={css.item}>
            <span className={css.status} style={statusStyles}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="52" />
            <p className={css.name}>{name}</p>
        </li>
    )
};