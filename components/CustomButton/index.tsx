import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: ()=> void
  color?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  color = 'blue',
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.button, {backgroundColor: color}]}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    color: 'red',
    fontSize: 24,
  },
});

export default CustomButton;
