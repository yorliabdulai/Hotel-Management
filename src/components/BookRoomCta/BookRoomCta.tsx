"use client"

import { FC } from "react";

type Props = {
    price: number,
    discount: number,
    specialNote: string
}

const BookRoomCta: FC<Props> = props => {
    const {price, discount, specialNote} = props;
    const discountPrice = price - (price / 100)* discount;
    return (
        <div className="px-7 py-6">
            <h3>
                <span className={`${discount? "text-gray-400": ""} font-bold text-xl`}>
                    $ {price}
                </span>
                {discount? <span className="font-bold text-xl">{" "}| discount {discount}%. Now <span className="text-tertiary-dark">$ {discountPrice}</span> </span>: ""}
            </h3>
            <div className="w-full border-b-2 border-b-secondaary my-2 "/>
            <h4 className="my-8">{specialNote}</h4>
        </div>
    );
};

export default BookRoomCta;
