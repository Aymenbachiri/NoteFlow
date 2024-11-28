import { View, Text, ActivityIndicator } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { H2 } from "./common/H2";

export default function Location() {
  return (
    <View className="flex-1 bg-white mt-8 gap-3 dark:bg-black px-6 py-10">
      <H2 className="text-center">Our Location</H2>
      <MapView
        style={{ width: "100%", height: 500, borderRadius: 10 }}
        initialRegion={{
          latitude: 35.7347,
          longitude: 4.2122,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 35.7347, longitude: 4.2122 }}
          title="Bou Saada"
          description="City in Algeria"
        />
      </MapView>
    </View>
  );
}
