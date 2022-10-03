import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import Text from './src/components/text/text';
import { colors } from './src/theme/colors';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Item from './src/screens/Item';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    'NotoSansJP-Light': require('./assets/fonts/NotoSansJP-Light.otf'),
    'NotoSansJP-Regular': require('./assets/fonts/NotoSansJP-Regular.otf'),
  })

  if (!loaded) {
    return (
      <Text>Text is loading...</Text>
    )
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Item" component={Item} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
