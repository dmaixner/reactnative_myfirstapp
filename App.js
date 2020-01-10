import React from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true, start: Date.now() }

  }

  componentDidMount() {
    return fetch('http://google.com')
      .then((response) => response.text())
      .then((responseJson) => {
        console.log("!!! time: " + (Date.now() - this.state.start));
        this.setState({
          isLoading: false,
          text: responseJson,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }



  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <Text style={{ padding: 10, fontSize: 12 }}>
          {this.state.text}
        </Text>
      </View>
    );
  }
}
