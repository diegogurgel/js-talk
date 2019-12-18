import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components';

const ButtonView = styled(View)`
  border: 2px solid red;
  padding: 16px;
  border-radius: 4px;
`;
const Title = styled(Text)`
  font-size: 16px;
`;

export default function StyledButton() {
  return (
    <TouchableOpacity>
      <ButtonView>
        <Title>Styled Button</Title>
      </ButtonView>
    </TouchableOpacity>
  );
}
