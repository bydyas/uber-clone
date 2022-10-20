import React from 'react';
import { SafeAreaView, StyleSheet, Image, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavOptions from '../components/NavOptions';
import globalStyles from '../globalStyles';
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={[globalStyles.AndroidSafeArea, tw`bg-white h-full`]}>
            <View style={tw`p-5`}>
                <Image
                    style={{ width: 100, height: 100, resizeMode: 'contain' }}
                    source={{ uri: 'https://links.papareact.com/gzs' }}
                />

                <GooglePlacesAutocomplete
                    styles={inputStyles}
                    onPress={(data, details = null) => {
                        dispatch(
                            setOrigin({
                                location: details.geometry.location,
                                description: data.description,
                            }),
                        );
                        dispatch(setDestination(null));
                    }}
                    fetchDetails={true}
                    placeholder="Where from?"
                    minLength={2}
                    enablePoweredByContainer={false}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    query={{
                        key: GOOGLE_MAPS_API_KEY,
                        language: 'en',
                    }}
                    debounce={400}
                />

                <NavOptions />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const inputStyles = StyleSheet.create({
    container: {
        flex: 0,
    },
    textInput: {
        fontSize: 18,
    },
});

const styles = StyleSheet.create({});
