import { View, Text, TextInput } from 'react-native';
import styles from './styles';

export default function InputPassword({onChangeText, placeholder, errorMessage}) {
  return (
    <View style={styles.Container}>
      <View style={styles.TitleAndError}>
        <Text style={styles.Title}>Senha</Text>
        <Text style={styles.ErrorMessage}>{errorMessage}</Text>
      </View>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType='numeric'
        secureTextEntry={true}
        style={styles.Input}
      />
    </View>
  );
}
