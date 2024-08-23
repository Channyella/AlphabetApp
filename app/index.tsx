import { View, Text, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import MainPageImage from "@/assets/AlphabetAppPics/MainPage.jpeg";

const App = () => {
    return (
        <View className="flex-1">
            <ImageBackground 
                source={MainPageImage} 
                resizeMode="cover" 
                className="flex-1"
            >
                <SafeAreaView className='flex-1 px-1 justify-end'>
                    <View className='mb-60'>
                        <TouchableOpacity
                            className=' w-3/4 self-center bg-yellow-200 py-3 mt-4 rounded-lg'
                            onPress={() => console.log('Button Pressed!')}
                            >
                                <Text className='text-center text-black text-lg font-bold'>
                                    Press To Learn!
                                </Text>
                            
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

export default App