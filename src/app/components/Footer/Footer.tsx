import Link from "next/link"
import {BsFillSendFill, BsTelephoneOutbound} from "react-icons/bs"
import {BiMessageDetail} from "react-icons/bi"

const Footer = () => {
    return (
        <footer className="mt-16">
           <div className="container mx-auto px-4">
            <Link href="/" className="font-black text-tertiary-dark">Hotels
            </Link>
            <h4 className="font-semibold text-[40px] py-6">Contact</h4>
            <div className="flex flex-wrap gap-16 items-center justify-between">
                <div className="flex-1">
                    <p>Central Mosque Road</p>
                    <div className="flex items-center py-4">
                        <BsFillSendFill />
                        <p className="ml-2">YorTech</p>
                    </div>
                    <div className="flex items-center">
                        <BsTelephoneOutbound />
                        <p className="ml-2">+233557206667</p>
                    </div>
                    <div className="flex items-center pt-4">
                        <BiMessageDetail />
                        <p className="ml-2">YorTech</p>
                    </div>
                </div>
            </div>
           </div>
        </footer>
    )   
}
export default Footer