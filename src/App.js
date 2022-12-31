import {Text, SafeAreaView, Button} from 'react-native';
import React, {useState, useEffect} from 'react';

export default function App() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log('number updated: ', number);
  }, [number]);

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
