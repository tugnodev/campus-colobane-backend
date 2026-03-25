export type User = {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  vendeur: boolean;
  code: number | null;
  address: string | null;
  image: string | null | undefined;
  certified: boolean;
  createdAt: Date;
  updatedAt: Date;
};
