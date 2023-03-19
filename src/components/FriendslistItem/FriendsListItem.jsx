import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import css from './FriendsListItem.module.css'

export const FriendsListItem = ({ friend }) => {
    const { avatar, name, isOnline } = friend;
    return (
            <li className={css.item}>
                <span className={classNames(css.status, isOnline && css.isOnline)}></span>
                <img src={avatar} alt={name} className={css.avatar} />
                <p className={css.name}>{name}</p>
            </li>
    )
}

FriendsListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    }).isRequired
}