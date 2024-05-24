import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  FontFamily,
  StyleVariable,
  Color,
  FontSize,
  Padding,
  Border,
} from "../../GlobalStyles";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

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
          source={require("../assets/delete2.png")}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bigLabelPosition: {
    left: wp("5%"),
    textAlign: "left",
    fontFamily: FontFamily.regular,
    position: "absolute",
  },
  textFlexBox: {
    justifyContent: "center",
    borderRadius: StyleVariable.boundVariablesData1,
  },
  text1Typo: {
    fontFamily: FontFamily.textSmMedium,
    fontWeight: "500",
  },
  inputFlexBox: {
    flexDirection: "row",
    height: hp("6%"),
    position: "absolute",
    alignItems: "center",
  },
  supportCenter: {
    top: hp("10%"),
    left: wp("20%"),
    fontSize: wp("1.5%"),
    color: Color.colorLimegreen_100,
    zIndex: 0,
    textAlign: "left",
    fontFamily: FontFamily.regular,
    position: "absolute",
  },
  forgotPassword1: {
    top: hp("2%"),
    fontSize: FontSize.size_xl,
    color: Color.colorGray_100,
    zIndex: 1,
  },
  bigLabel: {
    top: hp("20%"),
    color: Color.colorGray_600,
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
    top: hp("60%"),
    left: wp("20%"),
    backgroundColor: "rgba(23, 24, 38, 0.2)",
    width: wp("32%"),
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    minWidth: wp("24%"),
    minHeight: hp("5%"),
    zIndex: 3,
    flexDirection: "row",
    height: hp("6%"),
    position: "absolute",
    alignItems: "center",
  },
  select: {
    fontSize: FontSize.regular_size,
    color: Color.colorDarkgray_600,
    textAlign: "left",
  },
  deleteIcon: {
    width: wp("5%"),
    height: hp("5%"),
    overflow: "hidden",
    opacity: 0,
  },
  input: {
    top: hp("40%"),
    left: wp("18%"),
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    width: wp("64%"),
    justifyContent: "space-between",
    padding: Padding.p_base,
    zIndex: 4,
    backgroundColor: Color.white100,
    height: hp("6%"),
  },
  forgotPassword: {
    borderRadius: Border.br_5xs,
    width: wp("90%"),
    height: hp("70%"),
    padding: Padding.p_6xl,
    maxWidth: "100%",
    maxHeight: "100%",
    alignItems: "center",
    backgroundColor: Color.white100,
  },
});

export default ForgotPassword;
