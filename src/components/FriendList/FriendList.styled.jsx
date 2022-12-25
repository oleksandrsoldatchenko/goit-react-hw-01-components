import styled from 'styled-components';

export const CardBox = styled.li`
  display: flex;
  align-items: center;

  width: 180px;
  padding: 18px;

  background-color: rgb(222, 222, 222);
  border-radius: 6px;
`;

export const Avatar = styled.img`
  display: block;

  width: 48px;
  margin-right: 16px;

  background-color: #edebeb;
  border-radius: 6px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
`;

export const Status = styled.span`
  margin-right: 20px;
  padding: 6px;

  border-radius: 50%;
  background-color: ${({ isOnline }) => {
    switch (isOnline) {
      case true:
        return 'green';
      default:
        return 'red';
    }
  }};
`;