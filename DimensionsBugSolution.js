import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text } from 'react-native';

const DimensionsBugSolution = () => {
  const [dimensions, setDimensions] = useState(null);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
      setDimensions({ window, screen });
    });

    setDimensions(Dimensions.get('window'));

    return () => subscription.remove();
  }, []);

  if (!dimensions) {
    return <Text>Loading dimensions...</Text>;
  }

  return (
    <View>
      <Text>Window Width: {dimensions.window.width}</Text>
      <Text>Window Height: {dimensions.window.height}</Text>
    </View>
  );
};

export default DimensionsBugSolution;