import { ImageSourcePropType } from "react-native";
import { alphabetImagesObject } from "./models/alphabet-images";

export interface animalName {
    upperCase: string;
    caps: string;
    lowerCase: string;
}

export interface ImageInfo {
    image: ImageSourcePropType,
    audio: string;
    title: animalName;
}

export interface AlphabetType {
    id: number;
    upper: string;
    lower: string;
    images: ImageInfo[];
    otherImage?: string;
    audio: string[];
    textColor?: string;
}

export const ALPHABET_DATA: AlphabetType[] = [
    {
        id: 1,
        upper: 'A',
        lower: 'a',
        images: [
            {
            image: alphabetImagesObject.alligator,
            audio: 'Alligator.m4a',
            title: {
                upperCase:'Alligator',
                caps: 'ALLIGATOR',
                lowerCase: 'alligator'
                },
            },
        ],
        audio: ['A_letter.m4a', 'A_other.m4a', 'A_short_sound.m4a']
    },
    {
        id: 2,
        upper: 'B',
        lower: 'b',
        images: [
            {
            image: alphabetImagesObject.bear,
            audio: 'Bear.m4a',
            title: {
                upperCase:'Bear',
                caps: 'BEAR',
                lowerCase: 'bear'
                },
            },
        ],
        audio: ['B_letter.m4a', 'B_sound.m4a'],
    },
    {
        id: 3,
        upper:'C',
        lower: 'c',
        images: [
            {
                image: alphabetImagesObject.cow,
                audio: 'Cow.m4a',
            title: {
                upperCase:'Cow',
                caps: 'COW',
                lowerCase: 'cow'
                },
            }
        ],
        audio: ['C_letter.m4a', 'C_sound.m4a']
    },
    {
        id: 4,
        upper: 'D',
        lower: 'd',
        images: [
            {
                image: alphabetImagesObject.duck, 
                audio: 'Duck.m4a',
                title: {
                    upperCase:'Duck',
                    caps: 'DUCK',
                    lowerCase: 'duck'
                    },
            },
            {
                image: alphabetImagesObject.dog,
                audio: 'Dog.m4a',
                title: {
                    upperCase:'Dog',
                    caps: 'DOG',
                    lowerCase: 'dog'
                    },
            }
        ],
        audio: ['D_letter.m4a', 'D_sound.m4a']
    },
    {
        id: 5,
        upper: 'E',
        lower: 'e',
        images: [
            {
                image: alphabetImagesObject.elephant,
                audio: 'Elephant.m4a',
                title: {
                    upperCase:'Elephant',
                    caps: 'ELEPHANT',
                    lowerCase: 'elephant'
                    },
            }
        ],
        audio: ['E_letter.m4a', 'E_sound.m4a']
    },
    {
        id: 6,
        upper: 'F',
        lower: 'f',
        images: [
            {
                image: alphabetImagesObject.frog,
                audio: 'Frog.m4a',
                title: {
                    upperCase:'Frog',
                    caps: 'FROG',
                    lowerCase: 'frog'
                    },
            }
        ],
        audio: ['F_letter.m4a', 'F_sound.m4a']
    },
    {
        id: 7,
        upper: 'G',
        lower: 'g',
        images: [
            {
                image: alphabetImagesObject.giraffe,
                audio: 'Giraffe.m4a',
                title: {
                    upperCase:'Giraffe',
                    caps: 'GIRAFFE',
                    lowerCase: 'giraffe'
                    },
            }
        ],
        audio: ['G_letter.m4a', 'G_sound.m4a']
    },
    {
        id: 8,
        upper: 'H',
        lower: 'h',
        images: [
            {
                image: alphabetImagesObject.horse,
                audio: 'Horse.m4a',
                title: {
                    upperCase:'Horse',
                    caps: 'HORSE',
                    lowerCase: 'horse'
                    },
            }
        ],
        audio: ['H_letter.m4a', 'H_sound.m4a'],
        textColor: 'text-yellow-200',

    },
    {
        id: 9,
        upper: 'I',
        lower: 'i',
        images: [
            {
                image: alphabetImagesObject.ibis,
                audio: 'Ibis.m4a',
                title: {
                    upperCase:'Ibis',
                    caps: 'IBIS',
                    lowerCase: 'ibis'
                    },
            }
        ],
        audio: ['I_letter.m4a', 'I_short_sound.m4a']
    },
    {
        id: 10,
        upper: 'J',
        lower: 'j',
        images: [
            {
                image: alphabetImagesObject.jaguar,
                audio: 'Jaguar.m4a',
                title: {
                    upperCase:'Jaguar',
                    caps: 'JAGUAR',
                    lowerCase: 'jaguar'
                    },
            },
            {
                image: alphabetImagesObject.jellyfish,
                audio: 'Jellyfish.m4a',
                title: {
                    upperCase:'Jellyfish',
                    caps: 'JELLYFISH',
                    lowerCase: 'jellyfish'
                    },
            }
        ],
        audio: ['J_letter.m4a', 'J_sound.m4a']
    },
    {
        id: 11,
        upper: 'K',
        lower: 'k',
        images: [
            {
                image: alphabetImagesObject.kangaroo,
                audio: 'Kangaroo.m4a',
                title: {
                    upperCase:'Kangaroo',
                    caps: 'KANGAROO',
                    lowerCase: 'kangaroo'
                    },
            }
        ],
        audio: ['K_letter.m4a', 'K_sound.m4a']
    },
    {
        id: 12,
        upper: 'L',
        lower: 'l',
        images: [
            {
                image: alphabetImagesObject.lion,
                audio: 'Lion.m4a',
                title: {
                    upperCase:'Lion',
                    caps: 'LION',
                    lowerCase: 'lion'
                    },
            }
        ],
        audio: ['L_letter.m4a', 'L_sound.m4a']
    },
    {
        id: 13,
        upper: 'M',
        lower: 'm',
        images: [
            {
                image: alphabetImagesObject.monkey,
                audio: 'Monkey.m4a',
                title: {
                    upperCase:'Monkey',
                    caps: 'MONKEY',
                    lowerCase: 'monkey'
                    },
            }
        ],
        audio: ['M_letter.m4a', 'M_sound.m4a'],
        textColor: 'text-yellow-200',

    },
    {
        id: 14,
        upper: 'N',
        lower: 'n',
        images: [
            {
                image: alphabetImagesObject.narwhal,
                audio: 'Narwhal.m4a',
                title: {
                    upperCase:'Narwhal',
                    caps: 'NARWHAL',
                    lowerCase: 'narwhal'
                    },
            }
        ],
        audio: ['N_letter.m4a', 'N_sound.m4a']
    },
    {
        id: 15,
        upper: 'O',
        lower: 'o',
        images: [
            {
                image: alphabetImagesObject.octopus,
                audio: 'Octopus.m4a',
                title: {
                    upperCase:'Octopus',
                    caps: 'OCTOPUS',
                    lowerCase: 'octopus'
                    },
            }
        ],
        audio: ['O_letter.m4a', 'O_short_sound.m4a', 'O_dotted_sound']
    },
    {
        id: 16,
        upper: 'P',
        lower: 'p',
        images: [
            {
                image: alphabetImagesObject.penguin,
                audio: 'Penguin.m4a',
                title: {
                    upperCase:'Penguin',
                    caps: 'PENGUIN',
                    lowerCase: 'penguin'
                    },
            }
        ],
        audio: ['P_letter.m4a', 'P_sound.m4a'],
        textColor: 'text-yellow-200',

    },
    {
        id: 17,
        upper: 'Q',
        lower: 'q',
        images: [
            {
                image: alphabetImagesObject.quail,
                audio: 'Quail.m4a',
                title: {
                    upperCase:'Quail',
                    caps: 'QUAIL',
                    lowerCase: 'quail'
                    },
            }
        ],
        audio: ['Q_letter.m4a', 'Q_sound.m4a']
    },
    {
        id: 18,
        upper: 'R',
        lower: 'r',
        images: [
            {
                image: alphabetImagesObject.raccoon,
                audio: 'Raccoon.m4a',
                title: {
                    upperCase:'Raccoon',
                    caps: 'RACCOON',
                    lowerCase: 'raccoon'
                    },
            },
            {
                image: alphabetImagesObject.raven,
                audio: 'Raven.jpeg',
                title: {
                    upperCase:'Raven',
                    caps: 'RAVEN',
                    lowerCase: 'raven'
                    },
            }
        ],
        audio: ['R_letter.m4a', 'R_sound.m4a'],
        textColor: 'text-yellow-200',

    },
    {
        id: 19,
        upper: 'S',
        lower: 's',
        images: [
            {
                image: alphabetImagesObject.snail,
                audio: 'Snail.m4a',
                title: {
                    upperCase:'Snail',
                    caps: 'SNAIL',
                    lowerCase: 'snail'
                    },
            }
        ],
        audio: ['S_letter.m4a', 'S_sound.m4a']
    },
    {
        id: 20,
        upper: 'T',
        lower: 't',
        images: [
            {
                image: alphabetImagesObject.turtle,
                audio: 'Turtle.m4a',
                title: {
                    upperCase:'Turtle',
                    caps: 'TURTLE',
                    lowerCase: 'turtle'
                    },
            }
        ],
        audio: ['T_letter.m4a', 'T_sound.m4a']
    },
    {
        id: 21,
        upper: 'U',
        lower: 'u',
        images: [
            {
                image: alphabetImagesObject.unicorn,
                audio: 'Unicorn.m4a',
                title: {
                    upperCase:'Unicorn',
                    caps: 'UNICORN',
                    lowerCase: 'unicorn'
                    },
            }
        ],
        audio: ['U_letter.m4a', 'U_sound.m4a', 'U_dotted.m4a']
    },
    {
        id: 22,
        upper: 'V',
        lower: 'v',
        images: [
            {
                image: alphabetImagesObject.vulture,
                audio: 'Vulture.m4a',
                title: {
                    upperCase:'Vulture',
                    caps: 'VULTURE',
                    lowerCase: 'vulture'
                    },
            }
        ],
        audio: ['V_letter.m4a', 'V_sound.m4a'],
        textColor: 'text-yellow-200',
    },
    {
        id: 23,
        upper: 'W',
        lower: 'w',
        images: [
            {
                image: alphabetImagesObject.wolf,
                audio: 'Wolf.m4a',
                title: {
                    upperCase:'Wolf',
                    caps: 'WOLF',
                    lowerCase: 'wolf'
                    },
            }
        ],
        audio: ['W_letter.m4a', 'W_sound.m4a'],
        textColor: 'text-yellow-200',

    },
    {
        id: 24,
        upper: 'X',
        lower: 'x',
        images: [
            {
                image: alphabetImagesObject.fox,
                audio: 'Fox.m4a',
                title: {
                    upperCase:'Fox',
                    caps: 'FOX',
                    lowerCase: 'fox'
                    },
            }
        ],
        audio: ['X_letter.m4a', 'X_sound.m4a']
    },
    {
        id: 25,
        upper: 'Y',
        lower: 'y',
        images: [
            {
                image: alphabetImagesObject.yak,
                audio: 'Yak.m4a',
                title: {
                    upperCase:'Yak',
                    caps: 'YAK',
                    lowerCase: 'yak'
                    },
            }
        ],
        audio: ['Y_letter.m4a', 'Y_sound.m4a'],
        textColor: 'text-yellow-200',

    },
    {
        id: 26,
        upper: 'Z',
        lower: 'z',
        images: [
            {
                image: alphabetImagesObject.zebra,
                audio: 'Zebra.m4a',
                title: {
                    upperCase:'Zebra',
                    caps: 'ZEBRA',
                    lowerCase: 'zebra'
                    },
            }
        ],
        audio: ['Z_letter.m4a', 'Z_sound.m4a'],
        textColor: 'text-yellow-200',

    },
];

export const AUDIO_FILES: { [key: string]: any } = {
    "A_letter.m4a": require("@/assets/alphabet_audio/A_letter.m4a"), 
    "B_letter.m4a": require("@/assets/alphabet_audio/B_letter.m4a"),
    "C_letter.m4a": require("@/assets/alphabet_audio/C_letter.m4a"),
    "D_letter.m4a": require("@/assets/alphabet_audio/D_letter.m4a"),
    "E_letter.m4a": require("@/assets/alphabet_audio/E_letter.m4a"),
    "F_letter.m4a": require("@/assets/alphabet_audio/F_letter.m4a"),
    "G_letter.m4a": require("@/assets/alphabet_audio/G_letter.m4a"),
    "H_letter.m4a": require("@/assets/alphabet_audio/H_letter.m4a"),
    "I_letter.m4a": require("@/assets/alphabet_audio/I_letter.m4a"),
    "J_letter.m4a": require("@/assets/alphabet_audio/J_letter.m4a"),
    "K_letter.m4a": require("@/assets/alphabet_audio/K_letter.m4a"),
    "L_letter.m4a": require("@/assets/alphabet_audio/L_letter.m4a"),
    "M_letter.m4a": require("@/assets/alphabet_audio/M_letter.m4a"),
    "N_letter.m4a": require("@/assets/alphabet_audio/N_letter.m4a"),
    "O_letter.m4a": require("@/assets/alphabet_audio/O_long_letter_sound.m4a"),
    "P_letter.m4a": require("@/assets/alphabet_audio/P_letter.m4a"),
    "Q_letter.m4a": require("@/assets/alphabet_audio/Q_letter.m4a"),
    "R_letter.m4a": require("@/assets/alphabet_audio/R_letter.m4a"),
    "S_letter.m4a": require("@/assets/alphabet_audio/S_letter.m4a"),
    "T_letter.m4a": require("@/assets/alphabet_audio/T_letter.m4a"),
    "U_letter.m4a": require("@/assets/alphabet_audio/U_letter_long_U.m4a"),
    "V_letter.m4a": require("@/assets/alphabet_audio/V_letter.m4a"),
    "W_letter.m4a": require("@/assets/alphabet_audio/W_letter.m4a"),
    "X_letter.m4a": require("@/assets/alphabet_audio/X_letter.m4a"),
    "Y_letter.m4a": require("@/assets/alphabet_audio/Y_letter.m4a"),
    "Z_letter.m4a": require("@/assets/alphabet_audio/Z_letter.m4a"),

    "A_short_sound.m4a": require("@/assets/alphabet_audio/A_short_sound.m4a"), 
    "A_other.m4a": require("@/assets/alphabet_audio/A_other.m4a"),
    "B_sound.m4a": require("@/assets/alphabet_audio/B_sound.m4a"),
    "C_sound.m4a": require("@/assets/alphabet_audio/C_sound.m4a"),
    "D_sound.m4a": require("@/assets/alphabet_audio/D_sound.m4a"),
    "E_sound.m4a": require("@/assets/alphabet_audio/E_sound.m4a"),
    "F_sound.m4a": require("@/assets/alphabet_audio/F_sound.m4a"),
    "G_sound.m4a": require("@/assets/alphabet_audio/G_sound.m4a"),
    "H_sound.m4a": require("@/assets/alphabet_audio/H_sound.m4a"),
    "I_short_sound.m4a": require("@/assets/alphabet_audio/I_short_sound.m4a"),
    "J_sound.m4a": require("@/assets/alphabet_audio/J_sound.m4a"),
    "K_sound.m4a": require("@/assets/alphabet_audio/K_sound.m4a"),
    "L_sound.m4a": require("@/assets/alphabet_audio/L_sound.m4a"),
    "M_sound.m4a": require("@/assets/alphabet_audio/M_sound.m4a"),
    "N_sound.m4a": require("@/assets/alphabet_audio/N_sound.m4a"),
    "O_short_sound.m4a": require("@/assets/alphabet_audio/O_short_sound.m4a"),
    "O_dotted_sound.m4a": require("@/assets/alphabet_audio/O_dotted_sound.m4a"),
    "P_sound.m4a": require("@/assets/alphabet_audio/P_sound.m4a"),
    "Q_sound.m4a": require("@/assets/alphabet_audio/Q_sound.m4a"),
    "R_sound.m4a": require("@/assets/alphabet_audio/R_sound.m4a"),
    "S_sound.m4a": require("@/assets/alphabet_audio/S_sound.m4a"),
    "T_sound.m4a": require("@/assets/alphabet_audio/T_sound.m4a"),
    "U_sound.m4a": require("@/assets/alphabet_audio/U_sound.m4a"),
    "U_dotted.m4a": require("@/assets/alphabet_audio/U_dotted.m4a"),
    "V_sound.m4a": require("@/assets/alphabet_audio/V_sound.m4a"),
    "W_sound.m4a": require("@/assets/alphabet_audio/W_sound.m4a"),
    "X_sound.m4a": require("@/assets/alphabet_audio/X_sound.m4a"),
    "Y_sound.m4a": require("@/assets/alphabet_audio/Y_sound.m4a"),
    "Z_sound.m4a": require("@/assets/alphabet_audio/Z_sound.m4a"),

    "Alligator.m4a": require("@/assets/alphabet_audio/animal_audio/Alligator.m4a"),
    "Bear.m4a": require("@/assets/alphabet_audio/animal_audio/Bear.m4a"),
    "Cow.m4a": require("@/assets/alphabet_audio/animal_audio/Cow.m4a"),
    "Dog.m4a": require("@/assets/alphabet_audio/animal_audio/Dog.m4a"),
    "Duck.m4a": require("@/assets/alphabet_audio/animal_audio/Duck.m4a"),
    "Elephant.m4a": require("@/assets/alphabet_audio/animal_audio/Elephant.m4a"),
    "Frog.m4a": require("@/assets/alphabet_audio/animal_audio/Frog.m4a"),
    "Giraffe.m4a": require("@/assets/alphabet_audio/animal_audio/Giraffe.m4a"),
    "Horse.m4a": require("@/assets/alphabet_audio/animal_audio/Horse.m4a"),
    "Ibis.m4a": require("@/assets/alphabet_audio/animal_audio/Ibis.m4a"),
    "Jaguar.m4a": require("@/assets/alphabet_audio/animal_audio/Jaguar.m4a"),
    "Jellyfish.m4a": require("@/assets/alphabet_audio/animal_audio/Jellyfish.m4a"),
    "Kangaroo.m4a": require("@/assets/alphabet_audio/animal_audio/Kangaroo.m4a"),
    "Lion.m4a": require("@/assets/alphabet_audio/animal_audio/Lion.m4a"),
    "Monkey.m4a": require("@/assets/alphabet_audio/animal_audio/Monkey.m4a"),
    "Narwhal.m4a": require("@/assets/alphabet_audio/animal_audio/Narwhal.m4a"),
    "Octopus.m4a": require("@/assets/alphabet_audio/animal_audio/Octopus.m4a"),
    "Penguin.m4a": require("@/assets/alphabet_audio/animal_audio/Penguin.m4a"),
    "Quail.m4a": require("@/assets/alphabet_audio/animal_audio/Quail.m4a"),
    "Raccoon.m4a": require("@/assets/alphabet_audio/animal_audio/Raccoon.m4a"),
    "Raven.m4a": require("@/assets/alphabet_audio/animal_audio/Raven.m4a"),
    "Snail.m4a": require("@/assets/alphabet_audio/animal_audio/Snail.m4a"),
    "Turtle.m4a": require("@/assets/alphabet_audio/animal_audio/Turtle.m4a"),
    "Unicorn.m4a": require("@/assets/alphabet_audio/animal_audio/Unicorn.m4a"),
    "Vulture.m4a": require("@/assets/alphabet_audio/animal_audio/Vulture.m4a"),
    "Fox.m4a": require("@/assets/alphabet_audio/animal_audio/X_Fox.m4a"),
    "Yak.m4a": require("@/assets/alphabet_audio/animal_audio/Yak.m4a"),
    "Zebra.m4a": require("@/assets/alphabet_audio/animal_audio/Zebra.m4a"),
};