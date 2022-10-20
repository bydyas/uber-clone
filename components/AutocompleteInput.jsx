import React from 'react';
import { StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';

const AutocompleteInput = () => {
    const dispatch = useDispatch();

    return (
        <GooglePlacesAutocomplete
            styles={styles.root}
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
    );
};

export default AutocompleteInput;

const styles = StyleSheet.create({
    root: {
        container: {
            flex: 0,
        },
        textInput: {
            fontSize: 18,
        },
    },
});
