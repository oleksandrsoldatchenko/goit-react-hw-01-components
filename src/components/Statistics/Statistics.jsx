import PropTypes from 'prop-types';

import { StatsTitle, StatsBox, Label, Percentage } from './Statistics.styled';

import { Box } from '../Box';

export const Statistics = ({ title, stats }) => {
  return (
    <Box background="rgb(222, 222, 222)" borderRadius={14} padding={16}>

      <Box display="flex" alignItems="center" justifyContent="center">
        {title && <StatsTitle>{title}</StatsTitle>}
      </Box>

      <Box
        as="ul"
        p={0}
        display="flex"
        justifyContent="center"
        listStyle="none"
      >
        {stats.map(({ id, label, percentage }) => (
          <StatsBox key={id} style={{ backgroundColor: randomHexColor() }}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatsBox>
        ))}
      </Box>

    </Box>
  );
};

function randomHexColor() {
  return `#${Math.floor(Math.random() * 12777215).toString(16)}`;
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};