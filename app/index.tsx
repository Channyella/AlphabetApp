import { View, ImageBackground, SafeAreaView} from 'react-native';
import React from 'react';
import MainPageImage from "@/assets/AlphabetAppPics/MainPage.jpeg";
import { StatusBar } from 'expo-status-bar';
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';

const App = () => {
    const router = useRouter();
    return (
        <View className="flex-1">
            <ImageBackground 
                source={MainPageImage} 
                resizeMode="cover" 
                className="flex-1"
            >
                <SafeAreaView className='flex-1 px-1 justify-end'>
                    <View className='mb-40'>
                        <CustomButton 
                            onPress={() => router.push("/alphabet/alphabetOptions")}
                            title='Press to Learn!'
                            containerStyles=' w-3/4 self-center'
                        />
                    </View>
                    <StatusBar style="dark" backgroundColor="#FEF08A"/>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

export default App