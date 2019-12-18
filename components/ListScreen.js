import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ListItem = styled(View)`
  height: 48px;
  display: flex;
  justify-content: center;
  border: 1px solid #ccc;
  padding: 16px;
`;

export default function ListScreen({ navigation }) {
  const [items] = useState([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
    { id: '4', name: 'Item 4' },
    { id: '5', name: 'Item 5' }
  ]);
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DetailScreen', { item });
          }}
        >
          <ListItem>
            <Text>{item.name}</Text>
          </ListItem>
        </TouchableOpacity>
      )}
    />
  );
}
