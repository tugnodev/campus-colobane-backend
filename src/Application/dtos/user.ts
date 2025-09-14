enum address {
    UADB = 'Université Alioune-Diop',
    UGB = 'Université Gaston-Berger',
    UCAD = 'Université Cheikh Anta Diop',
    UIDT = 'Université Iba-Der-Thiam',
    UASZ = 'Université Assane-Seck',
    UAM = 'Université Amadou Makhtar Mbow',
}

export interface createUserDto {
    name: string;
    email: string;
    password: string;
    vendeur: boolean;
    code: number;
    address: address;
}

export interface updateUserDto {
    id: string;
    name?: string;
    email?: string;
    vendeur?: boolean;
    code?: number;
    address?: address;
    image?: string;
}

export interface userDto {
    id: string;
    name: string;
    email: string;
    vendeur: boolean;
    code: number;
    address: address;
    image?: string;
}