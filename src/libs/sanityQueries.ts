import { groq } from "next-sanity";

export const getFeaturedRoomQuery = groq`*[_type == "hotelRoom" && isFeatured == true][0]{
    _id,
    description,
    discount,
    images,
    isFeatured,
    name,
    price,
    slug,
    coverImage,
}`

export const getRoomsQuery = groq`*[_type == "hotelRoom"]{
    _id,
    description,
    type,
    isFeatured,
    isBooked,
    dimension,
    name,
    price,
    slug,
    coverImage,
}`
export const getRoom = groq`*[_type == "hotelRoom" && slug.current == $slug][0]{
    _id,
    description,
    discount,
    dimension,
    images,
    isBooked,
    isFeatured,
    name,
    price,
    numberOfBeds,
    offeredAmenities,
    specialNote,
    type,
    slug,
    coverImage,
}`