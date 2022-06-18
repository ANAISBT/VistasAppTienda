import { ActivityIndicator } from 'react-native';
import React from 'react';
import Root from "./src/index";
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded]=useFonts({
    'OpenSansCondensedBold':require('./assets/fonts/OpenSans_Condensed-Bold.ttf'),
    'OpenSansCondensedBoldItalic':require('./assets/fonts/OpenSans_Condensed-BoldItalic.ttf'),
    'OpenSansCondensedExtraBold':require('./assets/fonts/OpenSans_Condensed-ExtraBold.ttf'),
    'OpenSansCondensedItalic':require('./assets/fonts/OpenSans_Condensed-Italic.ttf'),
    'OpenSansCondensedLight':require('./assets/fonts/OpenSans_Condensed-Light.ttf'),
  })

  if(!loaded){
    return <ActivityIndicator/>;
  }
  return (
    <Root />
  );
}

