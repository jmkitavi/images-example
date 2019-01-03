import {
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: 'black',
    top: 0,
    padding: 5,
  },
  headerText: {
    color: 'white',
    lineHeight: 40,
    textAlign: 'center',
    fontSize: 20
    },
    contentContainer: {
      flex: 1,
      padding: 10,
    },
    card: {
      padding: 10,
      borderBottomColor: 'black',
      borderBottomWidth: 2,
    },
    descriptionText: {
      padding: 5
    }
})

export default styles;
