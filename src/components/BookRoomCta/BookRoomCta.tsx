"use client"

import { FC } from "react";

type Props = {
    price: number,
    discount: number
}

const BookRoomCta: FC<Props> = props => {
    const {price, discount} = props;
    return (
        <div className="px-7 py-6">
            <h3>
                <span className=""></span>
            </h3>
            
        </div>
    );
};

export default BookRoomCta;
