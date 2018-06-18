import axios from 'axios';

// axios.default.baseURL = 'http://localhost:3000/api';

const baseURL = 'http://localhost:3000/api';

const fakeGroupId = '5b1eb9e8f9eb9c194d22336c';

class MeetupAPI {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `/groups/${this.groupId}/meetups`;
  }

  async fetchGroupMeetups() {
    try {
      console.log('fetching')
      const { data } = await axios.get(`${baseURL}${this.path}`);
      // console.log(data)
      return data.meetups;
    } catch (e) {
      console.log('error', e);
      // throw e;
    }
  }
}

export {
  MeetupAPI,
};
