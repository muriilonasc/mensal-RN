import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';


export default function EventCards(props){
  return(
    <View style={styles.card}>
    <Text>{props.texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card:{
    backgroundColor: 'white',
    padding: 5,
    alignItems: 'center',
    borderRadius: '10px',
    borderColor: 'black',
    borderWidth: 2,
    margin:10,
    display: 'flex',
    justifyContent: 'center',
    width: 100,
    fontSize: '50'
     },
});