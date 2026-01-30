export interface createRoomDto {
  buyerId: string;
  sellerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface updateRoomDto {
  id: string;
  buyerId: string;
  sellerId: string;
}

export interface deleteRoomDto {
  id: string;
  buyerId: string;
  sellerId: string;
}
