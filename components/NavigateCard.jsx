import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import tw from 'tailwind-react-native-classnames';

const NavigateCard = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Good Morning, Bohdan</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        styles={inputStyles}
                        onPress={(data, details = null) => {
                            dispatch(
                                setDestination({
                                    location: details.geometry.location,
                                    description: data.description,
                                }),
                            );

                            navigation.navigate('RideOptionsCard');
                        }}
                        fetchDetails={true}
                        placeholder="Where to?"
                        minLength={2}
                        enablePoweredByContainer={false}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        query={{
                            key: GOOGLE_MAPS_API_KEY,
                            language: 'en',
                        }}
                        debounce={400}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default NavigateCard;

const inputStyles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: 'white',
        paddingTop: 20,
    },
    textInput: {
        fontSize: 18,
        backgroundColor: '#DDDDDF',
        borderRadius: 0,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});

const styles = StyleSheet.create({});
