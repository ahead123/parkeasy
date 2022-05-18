import React, { useState } from "react";
import { FlatList, Alert } from "react-native";

import { ParkingSpotListImageWrapper } from "../components/containers/ParkingSpotListImageWrapper";
import { ParkingSpotListDetailsWrapper } from "../components/containers/ParkingSpotListDetailsWrapper";

import { ParkingSpotListImage } from "../components/images/ParkingSpotListImage";
import { ParkingSpotFavoriteIcon } from "../components/images/ParkingSpotFavoriteIcon";

import { CityText } from "../components/texts/CityText";
import { DescriptionText } from "../components/texts/DescriptionText";
import { PriceText } from "../components/texts/PriceText";

import { ScreenHeight, ScreenWidth } from "../components/dimensions/dimensions";
import { FloatingMapButton } from "../components/buttons/FloatingMapButton";

import data from "../data/parkingSpots";

const ParkingSpotList = ({ navigation }) => {
  const [parkingSpots, setParkingSpots] = useState(data);

  const toggleFavorite = (id) => {
    const newParkingSpots = parkingSpots.map((spot) => {
      if (spot.id === id) {
        return { ...spot, is_favorite: !spot.is_favorite };
      }
      return spot;
    });
    setParkingSpots(newParkingSpots);
  };

  return (
    <>
      <FloatingMapButton onPress={() => Alert.alert("Map")} />
      <FlatList
        style={{
          width: ScreenWidth * 0.9,
          marginLeft: ScreenWidth * 0.05,
          marginBottom: ScreenHeight * 0.05,
        }}
        data={parkingSpots}
        renderItem={({ item }) => (
          <>
            <ParkingSpotListImageWrapper
              onRouteChange={() =>
                navigation.navigate("Parking Spot Listing", {
                  parkingSpot: parkingSpots.filter(
                    (spot) => spot.id === item.id
                  ),
                })
              }>
              <ParkingSpotListImage source={item.image_url} borderRadius={10}>
                <ParkingSpotFavoriteIcon
                  is_favorite={item.is_favorite}
                  onPress={() => toggleFavorite(item.id)}
                />
              </ParkingSpotListImage>
            </ParkingSpotListImageWrapper>
            <ParkingSpotListDetailsWrapper>
              <CityText>{`${item.city}, California`}</CityText>
              <DescriptionText>{item.highlight}</DescriptionText>
              <PriceText>{`$${item.price} per hour`}</PriceText>
            </ParkingSpotListDetailsWrapper>
          </>
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default ParkingSpotList;
