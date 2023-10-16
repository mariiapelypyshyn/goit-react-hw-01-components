import { Profile } from './Profile/Profile';
import user from '../data-json/user.json';

import { Statistics } from './Statistics/Statistics';
import statistics from '../data-json/statistics.json';

import { FriendList } from './FriendList/FriendList';
import friends from '../data-json/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data-json/transactions.json';




export const App = () => {

  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats"
        stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  )
};
