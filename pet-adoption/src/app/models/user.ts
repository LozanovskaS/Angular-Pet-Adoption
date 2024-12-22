import { AdoptionApplication } from "./adoption-application";

export interface User {
    id?: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    adoptionApplications?: AdoptionApplication[];
}
