import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import RNPickerSelect from 'react-native-picker-select';

export default function TabConsumptionScreen() {
  return (
    <View style={styles.father}>
    <View style={styles.container}>
      <Text style={styles.title}>Aktueller Verbrauch</Text>
      <Text style={styles.currentConsumption}>57 KWH</Text>      
    </View>
    <View style={styles.periodCurrentConsumption}>
      <Text style={styles.title}>Stromverbrauch der Periode</Text>
      <View style={styles.periodContainer}>
        <Text>2108 KWH</Text>
        <Text>7 Tage</Text>
      </View>
      
    </View>

    <View style={styles.costCurrentConsumption}>
    <Text style={styles.title}>Kosten</Text>
    <View style={styles.costContainer}>
        
        <Text>958,64€</Text>
        <Text>7 Tage</Text>

    </View>
    </View>
    </View>
    
  );
}

const styles = StyleSheet.create({

  father:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#4F5D75'    
  },

  container: {
    marginTop: 50,
    alignItems: 'center',    
    width: '90%',
    height: 100,
    backgroundColor: '#2D3142',
    borderRadius: 15,
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  currentConsumption: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 15
  },

  periodCurrentConsumption: {
    marginTop: 50,
    alignItems: 'center',    
    width: '90%',
    height: 100,
    backgroundColor: '#2D3142',
    borderRadius: 15,
  },

  periodContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#2D3142',
    borderRadius: 15
  },


  costCurrentConsumption: {
    marginTop: 50,
    alignItems: 'center',    
    width: '90%',
    height: 100,
    backgroundColor: '#2D3142',
    borderRadius: 15,
  },

  costContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#2D3142',
    borderRadius: 15
  }
});
