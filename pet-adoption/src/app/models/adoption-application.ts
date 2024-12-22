import { Pet } from "./pet";
import { User } from "./user";

export interface AdoptionApplication {
    id?: number;
    pet: Pet;
    user: User;
    status: string;
}
