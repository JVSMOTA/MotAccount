import styles from './styles'
import { View, Text, ScrollView } from "react-native"
import LargeButton from '../../components/LargeButton'
import DailyCalculation from '../../components/DailyCalculation'

import * as Animatable from 'react-native-animatable'

export default function Amount({ route }) {
  const { storeType } = route.params

  // Função para obter a data dos últimos 30 dias
  const getLastTenDays = () => {
    const today = new Date()
    const lastTenDays = Array.from({ length: 30 }, (_, index) => {
      const day = new Date(today)
      day.setDate(today.getDate() - index)
      return day
    })
    return lastTenDays
  }

  const lastTenDays = getLastTenDays()
  
  const getDayOfWeek = (date) => {
    const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    return daysOfWeek[date.getDay()]
  }

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  };

  return (
    <View style={styles.Container}>

      <View style={styles.HeaderLaranja}/>
      <View style={styles.PageContent}>

        <Animatable.View animation='fadeInDown' style={styles.MenuTop}>
          
          <Text style={styles.Title}>{storeType} / Apurados</Text>
          <LargeButton placeholder='Novo Apurado'/>
        
        </Animatable.View>

        <Text style={styles.SubTitle}>Últimos 30 dias</Text>
        
        <ScrollView style={styles.Menu}>

          {lastTenDays.map((day, index) => (
            <DailyCalculation
              key={index}
              dia={getDayOfWeek(day)}
              data={formatDate(day)}
              fisico="00,00"
              cartao="00,00"
            />
          ))}

        </ScrollView>
      
      </View>
    
    </View>
  )
}
