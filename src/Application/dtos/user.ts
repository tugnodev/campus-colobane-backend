import type { User } from "../../Domaine/entities/user.js";

export enum address {
  UADB = "Université Alioune Diop",
  UGB = "Université Gaston Berger",
  UCAD = "Université Cheikh Anta Diop",
  UIDT = "Université Iba-Der-Thiam",
  UASZ = "Université Assane Seck",
  UAM = "Université Amadou Makhtar Mbow",
}

export interface createUserDto {
  name: string;
  email: string;
  image: string;
  password: string;
  address: address;
  vendeur?: boolean;
  rememberMe?: boolean;
}

export interface turnToVendorDto {
  id: string;
  address: address;
  vendeur: boolean;
}

export interface updateUserDto {
  id: string;
  name?: string;
  email?: string;
  vendeur?: boolean;
  address: address;
  image?: string;
}

export interface userLoginDto {
  email: string;
  password: string;
}

export interface authPack {
  token: string | null;
  user: User | undefined | null;
}
