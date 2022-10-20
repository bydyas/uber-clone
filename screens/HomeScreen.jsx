import React from 'react';
import { SafeAreaView, StyleSheet, Image, View } from 'react-native';
import NavOptions from '../components/NavOptions';
import AutocompleteInput from '../components/AutocompleteInput';
import globalStyles from '../globalStyles';
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
    return (
        <SafeAreaView style={[globalStyles.AndroidSafeArea, tw`bg-white h-full`]}>
            <View style={tw`p-5`}>
                <Image
                    style={{ width: 100, height: 100, resizeMode: 'contain' }}
                    source={{ uri: 'https://links.papareact.com/gzs' }}
                />
                <AutocompleteInput />
                <NavOptions />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
