import { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

import Colors from './constants/colors';

// Hide the splash screen as soon as the app is loaded
SplashScreen.preventAutoHideAsync().catch(console.warn);

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  useEffect(() => {
    console.log('useEffect');
    if (fontsLoaded) {
      // Hide the splash screen after the app is loaded
      setTimeout(() => SplashScreen.hideAsync().catch(console.warn), 2000);
      // SplashScreen.hideAsync().catch(console.warn);
    }
  }, [fontsLoaded]);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  const resetGameHandler = () => {
    setUserNumber(null);
    setGameIsOver(false);
  };

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {gameIsOver && userNumber ? (
            <GameOverScreen
              userNumber={userNumber}
              resetGameHandler={resetGameHandler}
            />
          ) : !userNumber ? (
            <StartGameScreen onPickNumber={pickedNumberHandler} />
          ) : (
            <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
