import { Categorias, Details, Products } from './screen/index';
import { StyleSheet, Text, View } from 'react-native';

import AppNavigator from './navigation';
import React from 'react';

export default function Root() {
  return (
    <View style={styles.container}>
      <AppNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
