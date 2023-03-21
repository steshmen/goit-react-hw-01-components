import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import css from './FriendsListItem.module.css'

export const FriendsListItem = ({ avatar, name, isOnline }) => {
    return (
            <li className={css.item}>
                <span className={classNames(css.status, isOnline && css.isOnline)}></span>
                <img src={avatar} alt={name} className={css.avatar} />
                <p className={css.name}>{name}</p>
            </li>
    )
}

FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}