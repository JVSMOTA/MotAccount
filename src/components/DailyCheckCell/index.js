import { View, Text } from 'react-native';
import styles from './styles';
import CheckCell from '../CheckCell';
import moment from 'moment';
import 'moment/locale/pt-br';

export default function DailyCheckCell({ options = [] }) {
  
  const getDayOfWeek = (dateString) => {
    moment.locale('pt-br');
    const date = moment(dateString, 'DD/MM/YYYY').utcOffset('-03:00').toDate();
    const dayOfWeek = moment(date).format('dddd');
    return capitalize(dayOfWeek);
  };

  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const groupedOptions = options.reduce((grouped, op) => {
    const date = op?.data;
    if (!grouped[date]) {
      grouped[date] = [];
    }
    grouped[date].push(op);
    return grouped;
  }, {});

  return (
    <View>
      {Object.entries(groupedOptions).map(([date, dataGroup]) => (
        <View key={date} >
          <View style={styles.ContainerDay}>
            <Text style={styles.Dia}>{getDayOfWeek(date)}</Text>
            <Text style={styles.Data}>{date}</Text>
          </View>
          <View style={styles.Container}>
            <CheckCell key={date} options={dataGroup} />
          </View>
        </View>
      ))}
    </View>
  );
}
