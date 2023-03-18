import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";
import { FriendsList } from "components/FriendsList/FriendsList";
import { FriendsListItem } from "components/FriendslistItem/FriendsListItem";
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";

import user from 'data/user';
import data from 'data/data';
import friends from 'data/friends';
import transactions from 'data/transactions'

import css from './App.module.css'


export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} title={'Upload stats'} />
      <FriendsList>
        <FriendsListItem friends={friends} />
      </FriendsList>
      <TransactionHistory items={transactions} />
    </div>
  );
};
