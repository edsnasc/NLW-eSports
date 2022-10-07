import { useRef, useEffect } from 'react'
import { StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';
import {Subscription} from 'expo-modules-core';

import { Background } from './src/components/Background';
import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';

import './src/services/notificationConfigs';
import { getPushNotificationToken } from './src/services/getPushNotificationToken';
import * as Notifications from 'expo-notifications';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });
  
  const getPushNotificationListener = useRef<Subscription>();
  const responsePushNotificationListener = useRef<Subscription>();
  
  useEffect(() => {
    getPushNotificationToken();
  },[]);

  useEffect(() => {
    getPushNotificationListener.current = Notifications
    .addNotificationReceivedListener(notification => {
      console.log(notification);
    });

    responsePushNotificationListener.current = Notifications
    .addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      if(getPushNotificationListener.current && responsePushNotificationListener.current) {
        Notifications.removeNotificationSubscription(getPushNotificationListener.current);
        Notifications.removeNotificationSubscription(responsePushNotificationListener.current);
      }
    }
  },[]);
  
  return (
    <Background>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      
      { fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}


