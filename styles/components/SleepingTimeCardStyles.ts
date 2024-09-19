import { StyleSheet } from 'react-native';

export const sleepingTimeCardStyles = StyleSheet.create({
  sleepingCard: {
    backgroundColor: '#f5c9b6',
    borderRadius: 20,
    padding: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    height: 180, // Increased height
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  sleepingTimeImage: {
    width: 70,
    height: 70,
    marginRight: 20,
  },
  sleepingInfo: {
    flex: 1,
  },
  sleepingText: {
    fontSize: 24, // Larger font
    fontWeight: 'bold',
    color: '#fff',
  },
  timeText: {
    fontSize: 16,
    color: '#fff',
  },
});
