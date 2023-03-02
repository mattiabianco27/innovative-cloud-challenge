import Image from "next/image"
import stormLogo from "../../../public/assets/Storm_Logo.png"
import awsLogo from "../../../public/assets/AWS_Logo.png"

export default function Footer() {
    return (
    <div className="flex flex-row px-[10px] justify-center items-center">
        <div className="flex underline">Powered by: </div>
        <div className="flex items-center">
            <div className="flex"><Image src={stormLogo} alt={"Logo storm Reply"} className=" w-[150px] px-[20px] h-fit" /></div>
            <div className="flex"><Image src={awsLogo} alt={"Logo storm Reply"} className=" w-[150px] px-[20px]"/></div>
        </div>
        
    </div>
    )
}