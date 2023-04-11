import { useCallback, useEffect, useState } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

import Colors from './constants/colors';

// Hide the splash screen as soon as the app is loaded
SplashScreen.preventAutoHideAsync().catch(console.warn);

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [roundsNumber, setRoundsNumber] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  const resetGameHandler = () => {
    setUserNumber(null);
    setGameIsOver(false);
    setRoundsNumber(0);
  };

  return (
    <>
      <StatusBar style='light' />
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootScreen}
        onLayout={onLayoutRootView}
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
                onStartNewGame={resetGameHandler}
                roundsNumber={roundsNumber}
                userNumber={userNumber}
              />
            ) : !userNumber ? (
              <StartGameScreen onPickNumber={pickedNumberHandler} />
            ) : (
              <GameScreen
                onGameOver={gameOverHandler}
                setRoundsNumber={setRoundsNumber}
                userNumber={userNumber}
              />
            )}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
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
