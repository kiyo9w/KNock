import { StyleSheet } from 'react-native';

export const meditationCardStyles = StyleSheet.create({
  meditationCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  meditationImage: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  meditationInfo: {
    flex: 1,
  },
  meditationText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  meditationSubText: {
    fontSize: 14,
    color: '#666',
  },
});
