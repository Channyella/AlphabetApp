export interface ImageInfo {
    image: string,
    audio: string;
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
            image: 'Alligator.jpeg',
            audio: 'Alligator.m4a'
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
            image: 'Bear.jpeg',
            audio: 'Bear.m4a'
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
                image: 'Cow.jpeg',
                audio: 'Cow.m4a',
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
                image: 'Duck.jpeg', 
                audio: 'Duck.m4a',
            },
            {
                image: 'Dog.jpeg',
                audio: 'Dog.m4a',
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
                image: 'Elephant.jpeg', 
                audio: 'Elephant.m4a',
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
                image: 'Frog.jpeg',
                audio: 'Frog.m4a',
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
                image: 'Giraffe.jpeg',
                audio: 'Giraffe.m4a',
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
                image: 'Horse.jpeg', 
                audio: 'Horse.m4a',
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
                image: 'Ibis.jpeg', 
                audio: 'Ibis.m4a',
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
                image: 'Jaguar.jpeg', 
                audio: 'Jaguar.m4a',
            },
            {
                image: 'Jellyfish.jpeg',
                audio: 'Jellyfish.m4a',
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
                image: 'Kangaroo.jpeg', 
                audio: 'Kangaroo.m4a',
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
                image: 'Lion.jpeg', 
                audio: 'Lion.m4a',
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
                image: 'Monkey.jpeg', 
                audio: 'Monkey.m4a',
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
                image: 'Narwhal.jpeg', 
                audio: 'Narwhal.m4a',
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
                image: 'Octopus.jpeg', 
                audio: 'Octopus.m4a',
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
                image: 'Penguin.jpeg',
                audio: 'Penguin.m4a',
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
                image: 'Quail.jpeg', 
                audio: 'Quail.m4a',
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
                image: 'Raccoon.jpeg', 
                audio: 'Raccoon.m4a',
            },
            {
                image: 'Raven.jpeg',
                audio: 'Raven.jpeg',
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
                image: 'Snail.jpeg', 
                audio: 'Snail.m4a',
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
                image: 'Turtle.jpeg', 
                audio: 'Turtle.m4a',
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
                image: 'Unicorn.jpeg', 
                audio: 'Unicorn.m4a',
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
                image: 'Vulture.jpeg', 
                audio: 'Vulture.m4a',
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
                image: 'Wolf.jpeg', 
                audio: 'Wolf.m4a',
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
                image: 'Fox.jpeg', 
                audio: 'Fox.m4a',
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
                image: 'Yak.jpeg', 
                audio: 'Yak.m4a',
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
                image: 'Zebra.jpeg', 
                audio: 'Zebra.m4a',
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