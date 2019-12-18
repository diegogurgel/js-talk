import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styled from 'styled-components';

const NavBarContainer = styled(View)`
  height: 64px;
  elevation: 5;
  background: #ec407a;
  padding-left: 72px;
`;
const Title = styled(Text)`
  font-size: 24px;
  line-height: 64px;
  font-weight: bold;
  color: #fff;
`;

export default function Navbar() {
  return (
    <NavBarContainer>
      <Title>Title</Title>
    </NavBarContainer>
  );
}
