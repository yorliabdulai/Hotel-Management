"use client"

const RoomDetails = (props: {params: {slug: string}}) => {
    const {params: {slug},
} = props;

    return (
        <div>
            <h1>Room Details</h1>
            {/* Add your room details here */}
        </div>
    );
};

export default RoomDetails;
