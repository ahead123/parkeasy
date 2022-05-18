import React from "react";
import { ImageBackground, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { MainContainer } from "../components/containers/MainContainer";
import { FullWidthButton } from "../components/buttons/FullWidthButton";
import { BigText } from "../components/texts/BigText";
import { SmallText } from "../components/texts/SmallText";

import { ScreenWidth, ScreenHeight } from "../components/dimensions/dimensions";

import { colors } from "../components/colors/colors";

const { teritary, secondary, white, primary } = colors;

const HomeScreen = ({ navigation }) => {
  return (
    <MainContainer>
      <ImageBackground
        source={require("../assets/images/car-driveway-1.png")}
        resizeMode="cover"
        style={{
          width: ScreenWidth,
          height: ScreenHeight * 0.5,
          justifyContent: "center",
        }}>
        <Image
          source={require("../assets/images/parkeasy-logo.png")}
          style={{
            height: 80,
            width: 80,
            borderRadius: 80 / 2,
            position: "absolute",
            top: ScreenHeight * 0.45,
            left: ScreenWidth * 0.4,
            borderColor: primary,
            borderWidth: 2,
          }}
        />
      </ImageBackground>
      <BigText style={{ marginTop: 30 }}>ParkEasy</BigText>
      <FullWidthButton onPress={() => navigation.navigate("Park Easy")}>
        <SmallText>See nearby parking</SmallText>
      </FullWidthButton>
      <FullWidthButton backgroundColor={teritary}>
        <SmallText color={white}>Login</SmallText>
      </FullWidthButton>
      <FullWidthButton backgroundColor={secondary}>
        <SmallText color={white}>Register</SmallText>
      </FullWidthButton>
    </MainContainer>
  );
};

export default HomeScreen;
