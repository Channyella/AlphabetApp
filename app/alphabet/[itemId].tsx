import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router';
import { ALPHABET_DATA, AlphabetType } from '@/constants/AlphabetData';

const AlphabetPage = () => {
    const { itemId } = useLocalSearchParams();

    const [letter, setLetter] = useState<AlphabetType | undefined>();

    useEffect(() => {
        if (itemId) {
            const itemIdNumber = Number(itemId);

            const alphabetLetterId = ALPHABET_DATA.find(
                (a) => a.id === itemIdNumber
            );
            setLetter(alphabetLetterId)
        }

    }, [itemId]);

    return (
        <View className='bg-cyan-200 flex-1 items-center justify-center'>
            <Text className='text-lg font-bold'>
                {letter ? `Welcome to ${letter.upper}` : 'Letter not found'}
            </Text>
        </View>
    )
}

export default AlphabetPage;