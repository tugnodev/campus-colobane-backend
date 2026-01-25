export type User = {
  id: Promise<string>;
  name: string;
  email: string;
  emailVerified: boolean;
  vendeur: boolean;
  codePermanent: string;
  address: string;
  imgage: string;
  certifiied: boolean;
  createdAt: Date;
  updatedAt: Date;
};
