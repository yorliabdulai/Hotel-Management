type coverImage = {

    url: string;
}
type Image = {
    _key: string;
    url: string
}
type Amenity = {
    _key: string;
    amenity: string;
    icon: string;

}
type Slug = {
    current: string;
    type: string;
}
export type Room = {
    _id: string;
    coverImage: coverImage;
    description: string;
    dimension: string;
    discount: number;
    images: Image[];
    isFeatured: boolean;
    isBooked: boolean;
    name: string;
    numberOfbeds: number;
    offeredAmenities: Amenity[];
    price: number;
    slug: Slug;
    specialNote: string;
    type: string;
}