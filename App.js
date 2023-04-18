import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './Screens/OnboardingScreen';
import ProfileScreen from './Screens/ProfileScreen';
import HomeScreen from './Screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(false);

  // useEffect(() => {
  //   async function checkOnboardingStatus() {
  //     try {
  //       const onboardingStatus = await AsyncStorage.getItem('onboardingStatus');
  //       setIsOnboardingCompleted(onboardingStatus === 'completed');
  //     } catch (e) {
  //       console.error('Error reading onboarding status from disk: ', e);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   checkOnboardingStatus();
  // }, []);

  // async function completeOnboarding() {
  //   try {
  //     await AsyncStorage.setItem('onboardingStatus', 'completed');
  //     setIsOnboardingCompleted(true);
  //   } catch (e) {
  //     console.error('Error setting onboarding status to completed: ', e);
  //   }
  // }

  // if (isLoading) {
  //   return <SplashScreen />;
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isOnboardingCompleted ? (
          <>
     <Stack.Screen name="Home" component={HomeScreen} />
          // Onboarding completed, user is signed in
          <Stack.Screen name="Profile" component={ProfileScreen} />
          </>
        ) : (
          // User is NOT signed in
               <Stack.Screen name="Home" component={HomeScreen} />
          )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}