import { StatusBar } from "expo-status-bar";
import React, { Component, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ImageBackground,
} from "react-native";
import Carousel from "react-native-anchor-carousel";
import MovieStore from "./MovieStore";
import { observer } from "mobx-react";
import { types } from "mobx-state-tree";

const initialState = {
  title: "",
  uri: "https://images-eu.ssl-images-amazon.com/images/I/91Jf7CamLbL.png",
  desc: "",
  stat: "",
};

@observer
export default class App extends Component {
  state = initialState;
  render() {
    const { movies } = MovieStore;
    const [background, setBackground] = useState({
      uri: "",
      title: "",
      desc: "",
      stat: "",
    });
    const carouselRef = useRef(null);
    const { width, height } = Dimensions.get("window");
    return (
      <ScrollView style={{ backgroundColor: "#000" }} blurRadius={100}>
        <View style={styles.carouselContentContainer}>
          <View style={{ ...StyleSheet.absoluteFill, backgroundColor: "#000" }}>
            <ImageBackground
              source={{
                uri: background.uri,
              }}
              style={styles.ImageBg}
              blurRadius={10}
            >
              <View style={styles.HomeboxContainer}></View>
              <Text
                style={{
                  color: "white",
                  fontSize: 24,
                  fontWeight: "bold",
                  marginLeft: 10,
                  marginVertical: 10,
                }}
                onPress={() => {
                  setBackground(this.state);
                }}
              >
                Back
              </Text>

              <View style={styles.carouselContainerView}>
                <Carousel
                  style={styles.carousel}
                  data={movies}
                  renderItem={({ item, index }) => {
                    return (
                      <View>
                        <TouchableOpacity
                          onPress={() => {
                            carouselRef.current.scrollToIndex(index);
                            setBackground({
                              uri: item.uri,
                              title: item.title,
                              stat: item.released,
                              desc: item.desc,
                            });
                          }}
                        >
                          <Image
                            source={{ uri: item.uri }}
                            style={styles.carouselImage}
                          />
                          <Text style={styles.carouselText}>{item.title}</Text>
                        </TouchableOpacity>
                      </View>
                    );
                  }}
                  itemWidth={400}
                  containerWidth={200}
                  separatorWidth={0}
                  ref={carouselRef}
                  inActiveOpacity={0.4}
                />
              </View>
              <View style={styles.movieInfoContainer}>
                <View style={{ justifyContent: "center" }}>
                  <Text style={styles.movieName}>{background.title}</Text>
                  <Text style={styles.movieStat}>{background.stat}</Text>
                </View>
              </View>
              <View style={{ paddingHorizontal: 14, marginTop: 14 }}>
                <Text style={{ color: "white", opacity: 0.8, lineHeight: 20 }}>
                  {background.desc}
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: "black",
    color: "purple",
  },
  image: {
    height: 100,
    width: 100,
  },
  carouselImage: {
    width: 200,
    height: 320,
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "rgba(0,0,0,0.9)",
  },
  carouselText: {
    paddingLeft: 14,
    color: "white",
    position: "absolute",
    bottom: 10,
    left: 2,
    fontWeight: "bold",
  },
  carouselContentContainer: {
    flex: 1,
    backgroundColor: "#000",
    height: 720,
    paddingHorizontal: 14,
  },
  HomeboxContainer: {
    flexDirection: "row",
    marginVertical: 20,
    width: "95%",
    alignSelf: "center",
    backgroundColor: "#fff",
    elevation: 10,
    borderRadius: 4,
  },
  ImageBg: {
    flex: 1,
    height: null,
    width: null,
    opacity: 1,
    justifyContent: "flex-start",
  },
  carouselContainerView: {
    width: "100%",
    height: 350,
    justifyContent: "center",
    alignItems: "center",
  },
  carousel: {
    flex: 1,
    overflow: "visible",
  },
  movieInfoContainer: {
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "space-between",
    width: Dimensions.get("window").width - 14,
  },
  movieName: {
    paddingLeft: 14,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 6,
  },
  movieStat: {
    paddingLeft: 14,
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    opacity: 0.8,
  },
});
