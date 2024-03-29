import React, { useState } from 'react';
import { View, Image, Switch, StyleSheet, Text, ActivityIndicator } from 'react-native';

const ImageToggle = () => {
  const [isLocalImage, setIsLocalImage] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false); // Switch state
  const [isLoading, setIsLoading] = useState(false); // Image loading state

  // Local image source
  const localImageSource = require('../assets/demo_pic.jpg');

  // URL image source
  const urlImageSource = { uri: 'https://chatai.com/wp-content/uploads/2023/11/tr71123-ai-art.jpeg' };

  // Function to toggle between local and URL image
  const toggleImageSource = () => {
    setIsEnabled(previousState => !previousState);
    setIsLocalImage(isEnabled);
  };

  // Function to handle image loading
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      {/* Radio Button/Switch */}
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => toggleImageSource()}
        value={isEnabled}
      />
      <Text style={styles.text}>{isLocalImage ? 'Local Image' : 'Image from server(url)'}</Text>
      {/* Activity Indicator */}
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      {/* Image display */}
      <Image
        resizeMode='cover'
        resizeMethod='resize'
        source={isLocalImage ? localImageSource : urlImageSource}
        style={{ width: 200, height: 200, borderRadius: 10 }}
        onLoadStart={() => setIsLoading(true)}
        onLoad={() => handleImageLoad()}
      />
    </View>
  );
};

export default ImageToggle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10
  },
  text: {
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20
  }
});
