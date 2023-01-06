import React, { useState, useEffect } from 'react';
import studentData from '../assets/MOCK_DATA.json';

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
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  getUsers = (pageNumber) => {
    const startIndex = (pageNumber - 1) * 10;
    const endIndex = startIndex + 10;
    const pageData = studentData.slice(startIndex, endIndex);
    setUsers(pageData);
    //console.log(pageData);
    setLoading(false);
  };

  loadMore = () => {
    setPage(page + 1);
    setLoading(true);
  };

  useEffect(() => {
    getUsers(page);
  }, [page]);

  return (
    <View style={{ padding: 20 }}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('StudentDetails', {
                  studentId: item.id,
                  studentImage: item.picture,
                  studentFName: item.first_name,
                  studentLName: item.last_name,
                  studentEmail: item.email,
                  studentGender: item.gender,
                  studentClass: item.class,
                })
              }
            >
              <View style={styles.itemContainer}>
                <Text style={styles.nameText}>
                  {item.id}-{item.first_name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={({ id }) => id.toString()}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
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
