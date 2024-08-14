import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EventCards from './src/components/EventCards';

import ScreenTitle from './src/components/ScreenTitle'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <ScreenTitle texto='EVENTOS' style={styles.title}/>
        <EventCards texto='EVENTO 1' />
        <EventCards texto='EVENTO 2' />
        <EventCards texto='EVENTO 3' />
        <EventCards texto='EVENTO 4' />
        <EventCards texto='EVENTO 5' />
        <EventCards texto='EVENTO 6' />
      </ScrollView>
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
