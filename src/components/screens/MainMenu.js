import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import IconTitleSet from 'shared/IconTitleSet';
import Button from 'shared/Button';
import Wrapper from 'screens/Wrapper';

export default class MainMenu extends Component {
  render() {
    return (
      <Wrapper>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#00796B" />
          <IconTitleSet
            iconName="chat"
            iconSize={100}
            iconColor="#bdede3"
            style={styles.iconTitleSet}
          >
            Welcome
          </IconTitleSet>
          <Button
            onPress={() => this.props.navigation.navigate('GlobalChat', {
              name: this.state.name,
            })}
            style={styles.chatButton}
          >
            Chat Rooms
          </Button>
          <Button
            onPress={() => this.props.navigation.navigate('UserList')}
          >
            Contacts
          </Button>
        </View>
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
  },
  iconTitleSet: {
    marginBottom: 20,
  },
  chatButton: {
    marginBottom: 10,
  },
});
