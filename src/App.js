import {Text, SafeAreaView, Button} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <SafeAreaView>
      <Text>Number: {number}</Text>
      <Button
        title="Up"
        onPress={() => {
          setNumber(number + 1);
        }}
      />
    </SafeAreaView>
  );
}
