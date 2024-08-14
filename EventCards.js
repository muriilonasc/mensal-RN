import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';


export default function EventCards(props){
  return(
    <TouchableOpacity style={styles.card}>
    <Text>{props.texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card:{
    backgroundColor: 'white',
    padding: 50,
    alignItems: 'top',
    borderRadius: '15px',
    borderColor: 'black',
    borderWidth: 1,
    margin:10,
    display: 'flex',
    justifyContent: 'start'
     }
});
