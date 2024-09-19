// styles/components/PostFullScreenStyles.ts

import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const postFullScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  time: {
    fontSize: 18,
    color: 'white',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    left: width * 0.25,
    width: width * 0.5,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
});

export const getRandomPastelColor = () => {
    const r = Math.floor((Math.random() * 55) + 200);
    const g = Math.floor((Math.random() * 55) + 200);
    const b = Math.floor((Math.random() * 55) + 200);
    return `rgb(${r},${g},${b})`;
};
