import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StudentDetails = ({ route }) => {
  const { studentId, studentName } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Student Details</Text>
      <Text style={styles.labelText}>Student Id:</Text>
      <Text style={styles.valueText}>{studentId}</Text>
      <Text style={styles.labelText}>Name:</Text>
      <Text style={styles.valueText}>{studentName}</Text>
      <Button
        style={styles.buttonBack}
        title='Go back'
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  labelText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  valueText: {
    fontSize: 16,
  },
  buttonBack: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#333',
    padding: 5,
  },
});
export default StudentDetails;
