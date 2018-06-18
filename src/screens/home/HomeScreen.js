import React from 'react';
import { View, Text } from 'react-native';
import { MeetupAPI } from '../../../constants/api.js';
import styles from './styles/HomeScreen.js';
import { LoadingScreen } from '../../commons';
import { MyMeetupsList } from './components';

const meetupAPI = new MeetupAPI();

class HomeScreen extends React.Component {
  static defaultProps = {
    meetupAPI,
  }

  state = {
    loading: false,
    meetups: [],
  }

  async componentDidMount() {
    this.setState({
      loading: true,
    });
    const meetups = await this.props.meetupAPI.fetchGroupMeetups();
    // console.log(meetups);
    this.setState({
      loading: false,
      meetups,
    });
  }

  render() {
    if (this.state.loading) {
      return <LoadingScreen />;
    }
    return (
      <View style={styles.root}>
        <View style={styles.topContainer}>
          <Text>HomeScreen</Text>
        </View>
        <View style={styles.bottomContainer}>
          <MyMeetupsList meetups={this.state.meetups} />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
