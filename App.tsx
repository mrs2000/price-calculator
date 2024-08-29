import {StatusBar} from 'expo-status-bar';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ProductPrice} from './components/ProductPrice';
import Constants from 'expo-constants'

/// Для запуска билда: eas build -p android --profile preview
/// Иконки: https://reactnativeelements.com/docs/1.2.0/icon

export default function App() {

  const data = [
    {id: '1'},
    {id: '2'}
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Price Calculator</Text>
      </View>
      <FlatList 
        data={data}
        renderItem={() => <ProductPrice />}
        keyExtractor={item => item.id}
      />
      <StatusBar style="dark"/>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight
  },
  header: {
    backgroundColor: '#f44336',
    padding: 10,
    width: '100%',
    textAlign: 'left'
  },
  headerText: {
    fontSize: 18,
    color: '#ffffff'
  },
});
