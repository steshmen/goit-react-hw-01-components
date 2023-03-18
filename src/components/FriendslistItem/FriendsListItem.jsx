import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import css from './FriendsListItem.module.css'

export const FriendsListItem = ({ friends }) => {
    return (
        friends.map(({id, isOnline, name, avatar}) => {
            return (
                <li key={id} className={css.item}>
                    <span className={classNames(css.status, isOnline && css.isOnline)}></span>
                    <img src={avatar} alt={name} className={css.avatar} />
                    <p className={css.name}>{name}</p>
                </li>
            )
        })
    )
}

FriendsListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired
        })
    )
}