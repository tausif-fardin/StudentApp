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
import { ActivityIndicator } from 'react-native-paper';

const DATA = studentData;

const StudentList = () => {
  const navigation = useNavigation();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMorePages, setHasMorePages] = useState(true);

  useEffect(() => {
    // Load the first page of students on component mount
    loadMore();
  }, []);

  const loadMore = () => {
    if (loading) return;

    setLoading(true);
    setTimeout(function () {
      // Load the next page of students
      const nextStudents = DATA.slice(students.length, students.length + 10);
      if (nextStudents.length === 0) {
        // There are no more pages to load
        setHasMorePages(false);
      } else {
        setStudents(students.concat(nextStudents));
      }
      setLoading(false);
    }, 2000); //set timeout added so that the loader icon can show up.
  };

  const renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: 'row',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 7,
        backgroundColor: '#c4c4c4',
      }}
    >
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
    </View>
  );

  return (
    <FlatList
      data={students}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      onEndReached={hasMorePages ? loadMore : null}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading && ActivityIndicator}
    />
  );
};

const styles = StyleSheet.create({
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
