enum address {
  UADB = "Université Alioune-Diop",
  UGB = "Université Gaston-Berger",
  UCAD = "Université Cheikh Anta Diop",
  UIDT = "Université Iba-Der-Thiam",
  UASZ = "Université Assane-Seck",
  UAM = "Université Amadou Makhtar Mbow",
}

export interface createUserDto {
  name: string;
  email: string;
  password: string;
  address: address;
  vendeur?: boolean;
  code?: number;
}

export interface turnToAdminDto {
  id: string;
  address: address;
  vendeur: boolean;
  code: number;
}

export interface updateUserDto {
  id: string;
  name?: string;
  email?: string;
  vendeur?: boolean;
  code?: number;
  address: address;
  image?: string;
}

export interface userDto {
  id: string;
  name: string;
  email: string;
  vendeur?: boolean;
  code?: number | null;
  address?: string | null;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface userLoginDto {
  email: string;
  password: string;
}

export interface authPack {
  token: string | null;
  user: userDto;
}
