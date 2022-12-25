import { Box } from './Box';

import user from './Profile/user.json';
import { Profile } from './Profile/Profile';

import data from './Statistics/data.json';
import { Statistics } from './Statistics/Statistics';

import friends from './FriendList/friends.json';
import { FriendList } from './FriendList/FriendList';

import transactions from './TransactionHistory/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="center" p="20px">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
          views={user.stats.views}
          followers={user.stats.followers}
          likes={user.stats.likes}
        />
      </Box>
      <Box display="flex" justifyContent="center" p="20px">
        <Statistics title="Upload stats" stats={data} />
      </Box>
      <Box display="flex" justifyContent="center" p="20px">
        <FriendList friends={friends} />
      </Box>
      <Box display="flex" justifyContent="center" p="20px">
        <TransactionHistory items={transactions} />
      </Box>
    </Box>
  );
};
