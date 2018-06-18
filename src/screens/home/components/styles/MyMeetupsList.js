import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
// const styles = {
  root: {
    flex: 1,
  },
  meetupCard: {
    height: 200,
    width: 175,
    marginLeft: 10,
    backgroundColor: '#f73859',
  },
  meetupCardTopContainer: {
    flex: 1,
    position: 'relative',
  },
  titleContainer: {
    flex: 0.15,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'montserratBold',
  },
  contentContainer: {
    flex: 1,
  },
  meetupCardTitle: {
    position: 'absolute',
    color: 'white',
    top: 10,
    left: 10,
    fontFamily: 'montserrat',
  },
  meetupCardBottomContainer: {
    flex: 0.4,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  meetupCardMetaName: {
    fontSize: 15,
    fontFamily: 'montserratBold',
  },
  meetupCardMetaData: {
    fontSize: 13,
    fontFamily: 'montserratLight',
  },
});

export default styles;
