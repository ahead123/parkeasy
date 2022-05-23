import React from "react";
import { FlatList, ImageBackground, View, Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";

import { BackArrow } from "../components/buttons/BackArrow";
import { TitleText } from "../components/texts/TitleText";

import { ScreenWidth, ScreenHeight } from "../components/dimensions/dimensions";
import { CityText } from "../components/texts/CityText";
import { Line } from "../components/styles/Line";
import { DescriptionText } from "../components/texts/DescriptionText";

import { ProfileImage } from "../components/images/ProfileImage";

import { colors } from "../components/colors/colors";
import { PriceText } from "../components/texts/PriceText";

const { black, white, darkGray, secondary } = colors;

const ParkingSpotListing = ({ navigation, route }) => {
  const { parkingSpot } = route.params;
  console.log(parkingSpot);
  return (
    <>
      <FlatList
        style={{ marginTop: ScreenHeight * 0.03 }}
        data={parkingSpot}
        renderItem={({ item }) => (
          <>
            <BackArrow onPress={() => navigation.navigate("Park Easy")} />
            <ImageBackground
              source={item.image_url}
              style={{ height: 250, width: "100%" }}
            />
            <View
              style={{
                display: "flex",
                width: ScreenWidth * 0.9,
                marginLeft: ScreenWidth * 0.05,
                marginTop: ScreenHeight * 0.03,
                marginBottom: ScreenHeight * 0.11,
              }}>
              <TitleText>{item.title}</TitleText>
              <Ionicons name="star" size={16} style={{ marginTop: 20 }}>
                <CityText> {`${item.rating}`}</CityText>
              </Ionicons>
              <CityText fw={400}>{`${item.city}, California`}</CityText>
              <Line mt={30} mb={30} />
              <DescriptionText color={black} fs={20}>
                {item.description}
              </DescriptionText>
              <Line mt={30} mb={30} />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                <TitleText>{`Hosted by ${item.host}`}</TitleText>
                <ProfileImage source={item.profile_image_url} />
              </View>
              <Line mt={30} mb={30} />
              <DescriptionText color={black} fs={25}>
                Where you'll park
              </DescriptionText>
              <CityText mt={15} mb={15}>
                {`${item.city}, California, United States`}
              </CityText>
              <MapView
                style={{ height: 200, width: "100%", marginBottom: 50 }}
                initialRegion={item.coordinates}>
                <Marker
                  coordinate={item.coordinates}
                  title={`Exact location provided after booking`}
                />
              </MapView>
            </View>
          </>
        )}></FlatList>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: ScreenWidth,
          height: 80,
          backgroundColor: white,
          borderWidth: 0.5,
          borderColor: darkGray,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
        }}>
        <PriceText>{`$${parkingSpot[0].price} per hour`}</PriceText>
        <Pressable
          style={{
            backgroundColor: secondary,
            height: 50,
            width: 120,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}>
          <Text style={{ color: white }}>Reserve</Text>
        </Pressable>
      </View>
    </>
  );
};

export default ParkingSpotListing;
