import { View, Text } from 'react-native';
import React from 'react'
import { Stack } from 'expo-router';

const AlphabetLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="alphabetOptions" options={{ headerShown: false}} />
            <Stack.Screen name="[itemId]" options={{ headerShown: false}} />
        </Stack>
    )
}

export default AlphabetLayout