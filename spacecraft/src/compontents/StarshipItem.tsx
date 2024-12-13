import React from "react";
import { View, Text, StyleSheet, Image, Dimensions} from "react-native";

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

interface Starship {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
}

const StarshipItem: React.FC<{ starship: Starship }> = ({ starship }) => {
    return (
        <View style={styles.itemcontainer}>
            <Text style={styles.title}>{starship.name}</Text>
            <Image style={styles.picture} source={{uri: `https://picsum.photos/seed/${starship.model}/400/200`}} />
            <Text>{`Model: ${starship.model}`} </Text>
            <Text>{`Manufacturer: ${starship.manufacturer}`} </Text>
            <Text>{`Cost in Credits: ${starship.cost_in_credits}`}</Text>
            <Text>{`Length: ${starship.length}`}</Text>
            <Text>{`Max Atmosphering Speed: ${starship.max_atmosphering_speed}`}</Text>
            <Text>{`Crew: ${starship.crew}`}</Text>
            <Text>{`Passengers: ${starship.passengers}`}</Text>
            <Text>{`Cargo Capacity: ${starship.cargo_capacity}`}</Text>
            <Text>{`Consumables: ${starship.consumables}`}</Text>
            <Text>{`Hyperdrive Rating: ${starship.hyperdrive_rating}`}</Text>
            <Text>{`MGLT: ${starship.MGLT}`}</Text>
            <Text>{`Starship Class: ${starship.starship_class}`}</Text>
            <Text>{`model: ${starship.model}`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    itemcontainer: {

    },
    title: {

    },
    picture: {
        height: deviceHeight*3/10,
        width: deviceWidth*3/10,
    },
  });

  export default StarshipItem;