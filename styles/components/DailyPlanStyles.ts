import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const dailyPlanStyles = StyleSheet.create({
  dailyPlanContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: height * 0.6,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  dragHandle: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 2.5,
    alignSelf: 'center',
    marginBottom: 10,
  },
  dailyPlanHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dailyPlanTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  showMore: {
    fontSize: 14,
    color: '#F77460',
  },
  planCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  planTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  planTime: {
    fontSize: 14,
    color: '#666',
  },
});
