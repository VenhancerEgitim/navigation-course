import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log('Kullanıcılar', response.data);
        setUsers(response.data);
      })
      .catch(error => console.log('Hata:', error));
  }, []);

  return (
    <View style={{marginTop: 80}}>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={{padding: 10, borderBottomWidth: 1}}>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default UserList;
