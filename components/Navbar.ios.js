import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const NavBarContainer = styled(View)`
  height: 78px;
  elevation: 1px;
  background: #ec407a;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Title = styled(Text)`
  font-size: 18px;
  line-height: 48px;
  color: #fff;
`;

export default function Navbar() {
  return (
    <NavBarContainer>
      <Title>Title</Title>
    </NavBarContainer>
  );
}
