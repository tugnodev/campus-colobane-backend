export type User = {
  email: string;
  code: number | null;
  id: string;
  name: string;
  emailVerified: boolean;
  vendeur: boolean;
  address: string | null;
  image: string | null | undefined;
  certified: boolean;
  createdAt: Date;
  updatedAt: Date;
};
