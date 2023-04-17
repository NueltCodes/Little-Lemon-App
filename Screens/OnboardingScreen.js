import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

export default function OnboardingScreen () {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [image, setImage] = useState(null);

  const navigation = useNavigation();

  const handleSaveChanges = () => {
    // Save changes to disk
  };

  const handleLogout = () => {
    // Clear all data from disk
    navigation.navigate('Onboarding');
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        {image ? (
          <TouchableOpacity onPress={pickImage}>
            <Image source={{ uri: image }} style={styles.profileImage} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.profileImagePlaceholder} onPress={pickImage}>
            <Text style={styles.profileImagePlaceholderText}>
              {firstName.charAt(0).toUpperCase()}
              {lastName.charAt(0).toUpperCase()}
            </Text>
          </TouchableOpacity>
        )}
        <View style={styles.profileHeaderTextContainer}>
          <Text style={styles.profileHeaderText}>{firstName}</Text>
          <Text style={styles.profileHeaderText}>{lastName}</Text>
          <Text style={styles.profileHeaderText}>{email}</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>First Name:</Text>
        <TextInput style={styles.input} value={firstName} onChangeText={setFirstName} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Last Name:</Text>
        <TextInput style={styles.input} value={lastName} onChangeText={setLastName} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email:</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Phone Number:</Text>
        <TextInput style={styles.input} value={phoneNumber} onChangeText={setPhoneNumber} />
      </View>
      <View style={styles.checkboxContainer}>
        <MaterialIcons name="check-box-outline-blank" size={24} color="black" />
        <Text style={styles.checkboxLabel}>Email notifications</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSaveChanges}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 16,
    },
    profileHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 32,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    profileImagePlaceholder: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: '#F4F4F4',
      justifyContent: 'center',
      alignItems: 'center',
    },
    profileImagePlaceholderText: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#BDBDBD',
    },
    profileHeaderTextContainer: {
      marginLeft: 16,
    },
    profileHeaderText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    inputContainer: {
      marginBottom: 16,
    },
    inputLabel: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    input: {
      borderWidth: 1,
      borderColor: '#BDBDBD',
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 16,
      fontSize: 16,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    checkboxLabel: {
      fontSize: 16,
      marginLeft: 8,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 32,
    },
    button: {
      backgroundColor: '#007AFF',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
//   export default styles;