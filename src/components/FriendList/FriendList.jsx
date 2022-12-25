import PropTypes from 'prop-types';
import { Box } from '../Box';
import { CardBox, Avatar, Name, Status } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Box as="ul" display="flex" gridGap={20} flexDirection="column" m={0} p={0}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <CardBox key={id}>
          <Status isOnline={isOnline}>{isOnline}</Status>
          <Avatar src={avatar} alt="User avatar" width="30" />
          <Name>{name}</Name>
        </CardBox>
      ))}
    </Box>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};