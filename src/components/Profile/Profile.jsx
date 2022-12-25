import PropTypes from 'prop-types';

import {
  Avatar,
  Name,
  UserInfo,
  Stats,
  Label,
  Quantity,
} from './Profile.styled';

import { Box } from '../Box';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <Box
      width={360}
      background="rgb(222, 222, 222)"
      borderRadius={14}
      paddingTop={16}
    >
      <Box textAlign="center">
        <Avatar src={avatar} alt="User avatar" size="35px" />
        <Name>{username}</Name>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Box>

      <Box
        as="ul"
        display="flex"
        justifyContent="center"
        padding={0}
        paddingTop={2}
      >
        <Stats>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Stats>
        <Stats>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Stats>
        <Stats>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Stats>
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    views: PropTypes.number,
    followers: PropTypes.number,
    likes: PropTypes.number,
  }),
};
