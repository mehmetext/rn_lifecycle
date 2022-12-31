import {Text, SafeAreaView, Button, View} from 'react-native';
import React, {useState, useEffect} from 'react';

export default function App() {
  const [helloFlag, setHelloFlag] = useState(false);

  useEffect(() => {
    console.log('Mounting...');
  }, []);

  return (
    <SafeAreaView>
      <Button
        title="Up"
        onPress={() => {
          setHelloFlag(!helloFlag);
        }}
      />
      {helloFlag && <Hello />}
    </SafeAreaView>
  );
}

function Hello() {
  useEffect(() => {
    console.log('I came!');

    return () => {
      console.log('I went!');
    };
  }, []);

  return (
    <View>
      <Text>Hello!</Text>
    </View>
  );
}
