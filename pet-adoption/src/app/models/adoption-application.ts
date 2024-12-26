import { Pet } from "./pet";
import { Users } from "./user";

export interface AdoptionApplication {
    id?: number;
    pet: Pet;
    user: Users;
    status: string;
}
