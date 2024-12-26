import { AdoptionApplication } from "./adoption-application";

export interface Users {
    id?: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    adoptionApplications?: AdoptionApplication[];
}
