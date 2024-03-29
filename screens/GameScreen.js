import { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import GuessLogItem from '../components/game/GuessLogItem';
import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import InputLabel from '../components/ui/InputLabel';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';

import generateRandomNumberBetween from '../utils/random';

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ onGameOver, setRoundsNumber, userNumber }) => {
  const initialGuess = generateRandomNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [priorGuesses, setPriorGuesses] = useState([initialGuess]);

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      setRoundsNumber(priorGuesses.length);
      onGameOver();
    }
  }, [currentGuess, userNumber]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const getNewGuess = (min, max, current) => {
    const newGuess = generateRandomNumberBetween(min, max, current);

    const wasAlreadyGuessed = priorGuesses.includes(newGuess);
    if (wasAlreadyGuessed) {
      return getNewGuess(min, max, current);
    }

    return newGuess;
  };

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' }
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess;
    }

    const newGuess = getNewGuess(minBoundary, maxBoundary, currentGuess);

    setCurrentGuess(newGuess);
    setPriorGuesses((prevPriorGuesses) => [newGuess, ...prevPriorGuesses]);
  };

  const guessRoundsLength = priorGuesses.length;

  const portraitContent = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>

      <Card style={styles.card}>
        <InputLabel style={styles.label}>Higher or Lower?</InputLabel>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
              <Ionicons name='md-add' size={24} />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name='md-remove' size={24} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  const landscapeContent = (
    <View style={styles.buttonsContainerWide}>
      <View style={styles.button}>
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
          <Ionicons name='md-add' size={24} />
        </PrimaryButton>
      </View>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.button}>
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
          <Ionicons name='md-remove' size={24} />
        </PrimaryButton>
      </View>
    </View>
  );

  return (
    <View style={styles.screen}>
      <Title style={styles.title}>Opponent's Guess</Title>

      {width > 500 ? landscapeContent : portraitContent}

      <View style={styles.roundsContainer}>
        <FlatList
          data={priorGuesses}
          renderItem={(itemData) => (
            <GuessLogItem
              guessNumber={itemData.item}
              roundNumber={guessRoundsLength - itemData.index}
            />
          )}
          keyExtractor={(item, index) => item}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 12
  },
  title: {
    color: 'white',
    maxWidth: '80%',
    width: 300
  },
  card: {
    marginTop: 0
  },
  label: {
    marginBottom: 12
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    flex: 1
  },
  roundsContainer: {
    flex: 1
  }
});
