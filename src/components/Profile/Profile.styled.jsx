import styled from 'styled-components';

export const Avatar = styled.img`
  width: 250px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
`;

export const Name = styled.p`
  color: rgb(0, 0, 0);
  font-weight: 700;
  text-transform: uppercase;
`;

export const UserInfo = styled.p``;

export const Stats = styled.li`
  list-style: none;
  text-align: center;
`;

export const Label = styled.span`
  margin-bottom: 8px;
`;

export const Quantity = styled.span`
  display: flex;
  flex-direction: column;

  width: 80px;

  padding: 16px;
  
  font-size: 16px;
  font-weight: 700;
`;
