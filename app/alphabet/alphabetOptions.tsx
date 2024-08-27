import { View, Text, FlatList, Pressable, ImageBackground, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Audio } from 'expo-av';

import { ALPHABET_DATA, AlphabetType, AUDIO_FILES } from '@/constants/AlphabetData';
import alphabetImages from '@/constants/models/alphabet-images';
import { Link, useRouter } from 'expo-router';
import CustomButton from '@/components/CustomButton';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const AlphabetOptions: React.FC = () => {
    const [sound, setSound] = useState<Audio.Sound | null>(null);
    const router = useRouter();

    const playSound = async (audioFileName: string) => {
        // Unload any previous sound
        if (sound) {
            await sound.unloadAsync();
        }

        // Load and play the new sound
        const { sound: newSound } = await Audio.Sound.createAsync(
            AUDIO_FILES[audioFileName]
        );
        setSound(newSound);
        await newSound.playAsync();
    };

    return (
        <View className='flex-1 bg-cyan-200'>
            <SafeAreaView className="flex-1 px-1 justify-between">
                <View className='mb-4 mt-6'>
                    <Text className="self-center mb-3 font-bold text-4xl">
                        Letters
                        </Text>
                </View>
                <View className="flex-1 items-center justify-center">
                    <FlatList 
                        data={ALPHABET_DATA} 
                        className='mb-20' 
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator = {false}
                        renderItem={({ item }: { item: AlphabetType}) => (
                            <Link href={`/alphabet/${item.id}`} asChild>
                                <Pressable 
                                    onPress={() => playSound(item.audio[0])}
                                    style= {{height: screenHeight * 0.5 * 0.75, width: screenWidth * 0.75}} 
                                    className= 'my-2 rounded-lg overflow-hidden'
                                    >
                                    <ImageBackground
                                        source = {alphabetImages[item.id - 1]}
                                        resizeMode='contain'
                                        className='flex-1 rounded-lg justify-center'>
                                            <Text className={`${item.textColor ?? 'text-black'} text-6xl font-bold text-center`}>
                                                {item.upper}{item.lower}
                                            </Text>

                                    </ImageBackground>
                                </Pressable>
                            </Link>
                        )}
                        />
                </View>
            </SafeAreaView>
            <StatusBar style="dark" backgroundColor="#FEF08A"/>

        </View>
        
    );
};

export default AlphabetOptions;