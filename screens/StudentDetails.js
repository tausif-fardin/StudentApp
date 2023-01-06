import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StudentDetails = ({ route }) => {
  const {
    studentId,
    studentFName,
    studentLName,
    studentEmail,
    studentGender,
    studentClass,
    studentImage,
  } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Student Details</Text>
      <View style={styles.card}>
        <View style={styles.imageCard}>
          <Image style={styles.studentImage} source={{ uri: studentImage }} />
        </View>
        <Text style={styles.labelText}>Student Id:</Text>
        <Text style={styles.valueText}>{studentId}</Text>
        <Text style={styles.labelText}>First Name:</Text>
        <Text style={styles.valueText}>{studentFName}</Text>
        <Text style={styles.labelText}>Last Name:</Text>
        <Text style={styles.valueText}>{studentLName}</Text>
        <Text style={styles.labelText}>Email:</Text>
        <Text style={styles.valueText}>{studentEmail}</Text>
        <Text style={styles.labelText}>Gender:</Text>
        <Text style={styles.valueText}>{studentGender}</Text>
        <Text style={styles.labelText}>Class:</Text>
        <Text style={styles.valueText}>{studentClass}</Text>
      </View>

      <Button title='Go back' onPress={() => navigation.goBack()} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 2,
    borderRadius: 8,
    elevation: 4,
    paddingBottom: 2,
  },
  imageCard: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  studentImage: {
    height: 250,
    width: '100%',
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
