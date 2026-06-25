export interface IProductBrief {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  description?: string;
  discountPrice?: number;
  rating?: number;
  isAvailable?: boolean;
}
