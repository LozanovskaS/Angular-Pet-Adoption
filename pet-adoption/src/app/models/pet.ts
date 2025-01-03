export interface Pet {
    id: number;
    name: string;
    species: string;
    breed: string;
    age: number;
    gender: string;
    description: string;
    status: string;
    images: {
        id: any;
        url: string;
    }[];
}

export interface PetImage {
    id: number;
    pet: Pet;
    url: string;
    description: string;
}





