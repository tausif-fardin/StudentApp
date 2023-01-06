import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StudentList = () => {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    setLoading(true);
    getUsers();
  }, []);
  return (
    <View style={{ padding: 20 }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('StudentDetails', {
                  studentId: item.id,
                  studentName: item.name,
                })
              }
            >
              <View style={styles.itemContainer}>
                <Text style={styles.nameText}>
                  {item.id}-{item.name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={({ id }) => id.toString()}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  flatList: {
    backgroundColor: '#eee',
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default StudentList;
