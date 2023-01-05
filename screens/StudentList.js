import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const students = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

const StudentList = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      style={styles.flatList}
      contentContainerStyle={styles.contentContainer}
      data={students}
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
            <Text style={styles.nameText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
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
