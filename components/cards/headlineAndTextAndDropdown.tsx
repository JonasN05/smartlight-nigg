import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Text, View } from "../Themed";
import { transform } from "@babel/core";

export default function headlineAndTextAndDropdown(props: {
  headText: string;
  subText: string;
  dropdownOptions: string[];
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

  // Map the dropdownOptions to the format expected by DropDownPicker
  const dropdownItems = props.dropdownOptions.map((option) => ({
    label: option,
    value: option,
  }));

  return (
    <View style={styles.container}>
      <View style={styles.headView}>
        <Text style={styles.text}>{props.headText}</Text>
      </View>
      <View style={styles.subMenu}> 
        <Text style={styles.text}>{props.subText}</Text>
        <View style={styles.dropdownField}>
          <DropDownPicker
            open={open}
            value={value}
            items={dropdownItems}
            setOpen={setOpen}
            setValue={setValue}
            onChangeValue={(value) => {
              console.log(value);
            }}
            style={{
              backgroundColor: "transparent",
              borderColor: "#2D3142",
            }}
            textStyle={{
              fontSize: 20,
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            }}
            dropDownContainerStyle={{
              backgroundColor: "#2D3142",
              borderColor: "#2D3142",
            }}
            ArrowUpIconComponent={() => (
              <Image source={require("./arrow_up.png")} style={styles.icon} />
            )}
            ArrowDownIconComponent={() => (
              <Image source={require("./arrow_down.png")} style={styles.icon} />
            )}
            showTickIcon={false}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2D3142",
    width: "90%",
    padding: 20,
    borderRadius: 15,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  dropdownField: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  icon: {},
  subMenu:{
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row"
  },
  headView:{
    backgroundColor: "transparent",
  }
});
