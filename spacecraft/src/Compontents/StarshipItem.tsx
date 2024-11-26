import React from "react";
import { View, Text, StyleSheet } from "react-native";

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

const StarshipItem: React.FC<{ starship: Starship }> = ({}) => {
    return (
        
    );
};