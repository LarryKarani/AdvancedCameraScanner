import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

import { Button, Icon } from "react-native-elements";
import { withNavigation } from "react-navigation";
class ExampleOne extends React.Component {
    state = {
      tableHead: ["Item no", "Descript", "MTL", "QTY", "RV"],
      tableData: [
        ["001", "Juice 500ml bottle", "PET", "1",0.75],
        ["002", "juice 500ml bottle", "PET", "1", 0.75],
        ["003", "juice 500ml bottle", "PET", "1", 0.75],
        ["004", "juice 500ml bottle", "PET", "1", 0.75],
        ["005", "juice 500ml bottle", "PET", "1", 0.75],
        ["Total", " ", " ", " ", " $7.50"]
      ]
    };

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={state.tableData} textStyle={styles.text} />
        </Table>

        <Button
          title="SELL"
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            borderRadius: 7,
            backgroundColor: "#59cbbd",
            marginTop: 20,
            width: 100,
            alignSelf: "center"
          }}
        />
        <Button
          title="HOLD"
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            borderRadius: 7,
            backgroundColor: "#59cbbd",
            marginTop: 20,
            width: 100,
            alignSelf: "center"
          }}
        />
      </View>
    );
  }
}

export default withNavigation(ExampleOne);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#fff",
    marginTop: 30,
  },
  head: { height: 40,},
  text: { margin: 6, color: "black", fontWeight: "bold"}
});