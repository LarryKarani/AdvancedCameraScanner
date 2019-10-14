import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

import Button from "../components/Button";

export default class ExampleOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

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

        <Button text="SELL" />
        <Button text="HOLD"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#455A64",
    marginTop: 30,
  },
  head: { height: 40,},
  text: { margin: 6, color: "#fff", fontWeight: "bold"}
});