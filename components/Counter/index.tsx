import {View, Text, Button, StyleSheet} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { decrement, increment, incrementByAmount } from '../../stores/Slices/CounterSlice';

export const Counter = () => {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="+1" onPress={() => dispatch(increment())} />
        <Button title="-1" onPress={() => dispatch(decrement())} />
        <Button title="+3" onPress={() => dispatch(incrementByAmount(5))} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterText: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 16,
    },
});
