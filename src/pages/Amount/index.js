import styles from './styles'
import { View, Text, ScrollView } from "react-native"
import LargeButton from '../../components/LargeButton'
import DailyCalculation from '../../components/DailyCalculation'

import * as Animatable from 'react-native-animatable'

export default function Amount({ route }) {
  const { storeType } = route.params

  return (
    <View style={styles.Container}>

      <View style={styles.HeaderLaranja}/>
      <View style={styles.PageContent}>

        <Animatable.View animation='fadeInDown' style={styles.MenuTop}>
          
          <Text style={styles.Title}>{storeType} / Apurados</Text>
          <LargeButton placeholder='Novo Apurado'/>
        
        </Animatable.View>
        <ScrollView style={styles.Menu}>
        
          <DailyCalculation dia={null} data={null} fisico='00,00' cartao='00,00'/>
          {/* Lista de Apurados diários */}
        
        </ScrollView>
      
      </View>
    
    </View>
  )
}
