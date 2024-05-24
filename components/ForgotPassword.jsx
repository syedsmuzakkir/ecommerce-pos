import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  FontFamily,
  StyleVariable,
  Color,
  FontSize,
  Padding,
  Border,
} from "../GlobalStyles";

const ForgotPassword = ({ onClose }) => {
  return (
    <View style={styles.forgotPassword}>
      <Text style={styles.supportCenter}>Support center</Text>
      <Text style={[styles.forgotPassword1, styles.bigLabelPosition]}>
        Forgot password ?
      </Text>
      <Text style={[styles.bigLabel, styles.bigLabelPosition]}>
        "Please enter the email address linked to your account."
      </Text>
      <View style={[styles.button, styles.textFlexBox]}>
        <View style={styles.textFlexBox}>
          <Text style={[styles.text1, styles.text1Typo]}>Submit</Text>
        </View>
      </View>
      <View style={[styles.input, styles.inputFlexBox]}>
        <Text style={[styles.select, styles.text1Typo]}>Enter Email</Text>
        {/* <Image
          style={styles.deleteIcon}
          resizeMode="cover"
          source={require("../assets/delete1.png")}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bigLabelPosition: {
    left: 25,
    textAlign: "left",
    fontFamily: FontFamily.regular,
    position: "absolute",
  },
  textFlexBox: {
    justifyContent: "center",
    borderRadius: StyleVariable.boundVariablesData1,
  },
  text1Typo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  inputFlexBox: {
    flexDirection: "row",
    height: 44,
    position: "absolute",
    alignItems: "center",
  },
  supportCenter: {
    top: 243,
    left: 325,
    fontSize: 13,
    color: Color.colorLimegreen,
    zIndex: 0,
    textAlign: "left",
    fontFamily: FontFamily.regular,
    position: "absolute",
  },
  forgotPassword1: {
    top: 25,
    fontSize: FontSize.size_xl,
    color: Color.colorGray_100,
    zIndex: 1,
  },
  bigLabel: {
    top: 61,
    color: "rgba(23, 24, 38, 0.8)",
    zIndex: 2,
    fontSize: FontSize.size_base,
  },
  text1: {
    alignSelf: "stretch",
    lineHeight: 24,
    color: Color.white100,
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  button: {
    top: 184,
    left: 250,
    backgroundColor: "rgba(23, 24, 38, 0.2)",
    width: 168,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    minWidth: 130,
    minHeight: 40,
    zIndex: 3,
    flexDirection: "row",
    height: 44,
    position: "absolute",
    alignItems: "center",
  },
  select: {
    fontSize: FontSize.size_sm,
    color: Color.colorDarkgray_200,
    textAlign: "left",
  },
  deleteIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
    opacity: 0,
  },
  input: {
    top: 110,
    left: 93,
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    width: 325,
    justifyContent: "space-between",
    padding: Padding.p_base,
    zIndex: 4,
    backgroundColor: Color.white100,
    height: 44,
  },
  forgotPassword: {
    borderRadius: Border.br_5xs,
    width: 511,
    height: 300,
    padding: 25,
    maxWidth: "100%",
    maxHeight: "100%",
    alignItems: "center",
    backgroundColor: Color.white100,
  },
});

export default ForgotPassword;
