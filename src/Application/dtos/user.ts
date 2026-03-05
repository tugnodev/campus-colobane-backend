import type { User } from "../../Domaine/entities/user.js";

export enum address {
  UADB = "UADB",
  UGB = "UGB",
  UCAD = "UCAD",
  UASZ = "UASZ",
  UT = "UT",
}

export interface createUserDto {
  name: string;
  email: string;
  image?: string;
  password: string;
  address?: address;
  vendeur?: boolean;
  rememberMe?: boolean;
}

export interface turnToVendorDto {
  id: string;
  address: address;
  phone: number;
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
