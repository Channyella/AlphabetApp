import { View, Text, Dimensions, ImageBackground, Pressable, ImageSourcePropType, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ALPHABET_DATA, AlphabetType, ImageInfo, AUDIO_FILES } from '@/constants/AlphabetData';
import { Audio } from 'expo-av';
import CustomButton from '@/components/CustomButton';
import { StatusBar } from 'expo-status-bar';
import BackArrow from "@/assets/images/back_arrow.png";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

interface FlashCard {
    title?: string;
    image?: ImageSourcePropType;
    audio: string[];
    text?: string[];
}

const getLetterFlashCards = (letter: AlphabetType | undefined): FlashCard[] => {
    if (!letter){
        return [];
    }
    const flashCards = [{title: letter.upper, audio: letter.audio}, {title: letter.lower, audio: letter.audio}];
    const imageFlashCards = letter.images.map((image: ImageInfo) => {
        return {image: image.image, text: [image.title.upperCase, image.title.caps, image.title.lowerCase], audio: [...letter.audio, image.audio]}
    })
    return [...flashCards, ...imageFlashCards];
}

const AlphabetPage = () => {
    const { itemId } = useLocalSearchParams();
    const [letter, setLetter] = useState<AlphabetType | undefined>();
    const [letterFlashCards, setLetterFlashCards] = useState<FlashCard[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
    const [sound, setSound] = useState<Audio.Sound | null>();
    const router = useRouter();

    useEffect(() => {
        if (itemId) {
            const itemIdNumber = Number(itemId);

            const alphabetLetterId = ALPHABET_DATA.find(
                (a) => a.id === itemIdNumber
            );
            setCurrentIndex(0);
            setLetter(alphabetLetterId);
        }
        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        }

    }, [itemId]);

    
    useEffect(() => {
        setLetterFlashCards(getLetterFlashCards(letter));
    }, [letter]);


    const handleNext = () => {
        if (letter && currentIndex < getLetterFlashCards(letter).length - 1){
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else if (letter) {
            setCurrentIndex(getLetterFlashCards(letter).length - 1);
        }
    };

    const playAudio = async (audioFile: string) => {
        if (!AUDIO_FILES[audioFile]) {
            console.warn(`Audio file ${audioFile} not found in AUDIO_FILES`);
            return;
        }
            if (sound) {
                await sound.unloadAsync();
            }
            const { sound: newSound } = await Audio.Sound.createAsync(AUDIO_FILES[audioFile]);
            setSound(newSound);
            await newSound.playAsync();
    };

    const renderAnimalText = () => {
        if (!letter){
            return;
        }
        const flashCard = letterFlashCards[currentIndex]
        if (!flashCard.text){
            return;
        }
        if (flashCard.text){
            return (
                <Pressable
                    onPress={handleNextStyle}>
                    <Text
                        className='text-black font-bold text-center text-4xl'>
                        {flashCard.text[currentStyleIndex]}
                    </Text>
                </Pressable>
            )
        }
    }

    const handleNextStyle = () => {
        const flashCard = letterFlashCards[currentIndex]
        if (!flashCard.text){
            return;
        };
        if (letter && currentStyleIndex < flashCard.text.length - 1){
            setCurrentStyleIndex(currentStyleIndex + 1);
        } else {
            setCurrentStyleIndex(0);
        }
    };

    const renderFlashCardContent = () => {
        const flashCard = letterFlashCards[currentIndex];

        if (flashCard.title) {
            return (
                <Text 
                    className='text-8xl font-bold text-black text-center'
                    style={{ height: screenHeight * 0.5, width: screenWidth * 0.75, textAlignVertical: 'center'}}>
                    {flashCard.title}
                </Text>
            );
        }

        if (flashCard.image) {
            return (
                <View>
                <ImageBackground 
                    source={flashCard.image}
                    resizeMode='contain'
                    style={{ height: screenHeight * 0.75, width: screenWidth * 0.75}}
                    className='justify-center items-center'
                />
                </View>
            );
        }
        return null;
    };

    const renderAudioButtons = () => {
        if (letterFlashCards.length === 0) return null;

        const flashCard = letterFlashCards[currentIndex];

        return (
            <View className='flex flex-row flex-wrap justify-center'>
                {flashCard.audio.map((audioFile, index) => (
                    <CustomButton
                        key = {index}
                        title={`Play Audio ${index + 1}`}
                        onPress={() => playAudio(audioFile)}
                        />
                ))}
            </View>
        );
    };

    if(letterFlashCards.length === 0 || !letter) {
        return <Text className='text-lg font-bold'>Loading...</Text>
    }

    return (
        <SafeAreaProvider>
            <StatusBar style="dark" backgroundColor="#FEF08A"/>
            <SafeAreaView 
            edges={['top', 'bottom']}
            className="flex-1 items-center gap-y-5 bg-cyan-200 mt-5">
                <View className='flex flex-row mt-6 items-center'>
                    <TouchableOpacity onPress={() => router.push("/alphabet/alphabetOptions")}
                        className={`bg-yellow-200 rounded-xl flex-start items-center p-3 m-1`}>
                        <Image 
                            source= {BackArrow}
                            style={{width: 35, height: 35}}
                            resizeMode='cover'/>
                    </TouchableOpacity>
                    <Text className='text-4xl justify-self-start ml-6'>
                        Letter {letter?.upper}
                    </Text>
                </View>
                <Pressable
                    onPress={handleNext}
                    className="w-3/4 h-1/2 justify-center items-center border-2 border-white rounded-lg shadow-lg bg-white"
                >
                    {renderFlashCardContent()}
                </Pressable>

                {renderAnimalText()}

                <View 
                    className="flex flex-row flex-wrap mt-4"
                    >
                    <CustomButton title="Previous" onPress={handlePrevious} />
                    <View className="w-4" />
                    <CustomButton title="Next" onPress={handleNext} />
                </View>

                {renderAudioButtons()}
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default AlphabetPage;