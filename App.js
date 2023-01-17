import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PrimeiraTela from './assets/screens/PrimeiraTela';
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import HomeScreen from './assets/screens/HomeScreen';
import ContinueTela from './assets/screens/Continue';
import ApontamentoTela from './assets/screens/Apontamento';
import MeusApontamentos from './assets/screens/MeusApontamentos/MeusApontamentos';
import Final from './assets/screens/Final';


const Stack = createNativeStackNavigator();



export default function App() {
  const [loaded] = useFonts({
    UbuntuLight: require('./assets/fonts/Ubuntu-Light.ttf'),
    UbuntuRegular: require('./assets/fonts/Ubuntu-Regular.ttf'),
    UbuntuMedium: require('./assets/fonts/Ubuntu-Medium.ttf'),
    UbuntuBold: require('./assets/fonts/Ubuntu-Bold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="PrimeiraTela" component={PrimeiraTela} />
      <Stack.Screen name="ContinueTela" component={ContinueTela} />
      <Stack.Screen name="ApontamentoTela" component={ApontamentoTela} />
      <Stack.Screen name="Final" component={Final} />
      <Stack.Screen name="MeusApontamentos" options={{headerShown:false}} component={MeusApontamentos} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
