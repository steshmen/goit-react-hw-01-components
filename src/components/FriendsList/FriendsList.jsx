import PropTypes from 'prop-types';
import css from './FriendsList.module.css';
import { FriendsListItem } from 'components/FriendslistItem/FriendsListItem';


export const FriendsList = ({friends}) => {
    return (
        <ul className={css.container}>
            {friends.map(item => <FriendsListItem key={item.id} friend={item} />)}
        </ul>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired
}