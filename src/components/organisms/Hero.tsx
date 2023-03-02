import Lottie from "lottie-react";
import Image from "next/image";
import heroAnimation from "../../../public/assets/Mobile_shopping.json";
import cloudAnimation from "../../../public/assets/Cloud.json";
import { MapPinIcon } from "@heroicons/react/24/outline";

interface HeroProps {
  text1: string;
  text2: string;
  text3: string;
}

export default function Hero(props: HeroProps) {
  return (
    <div className="flex flex-col px-[10px] pt-[50px] pb-[100px] items-center laptop:px-[200px]">
      <div className="flex ml-[30px] py-[30px]">
        <Lottie
          animationData={heroAnimation}
          loop={false}
          style={{ height: 350, width: 350 }}
        />
      </div>

      <div className="flex flex-col py-[30px] laptop:pr-[600px]">
        <div className="text-[30px] mb-[8px]">
          Ciò che il cliente{" "}
          <p className="font-bold mt-[-8px] text-lightblue">sta cercando</p>
        </div>
        <div className="flex">{props.text1}</div>
      </div>
      <div className="flex flex-col py-[30px] laptop:pl-[600px]">
        <div className="flex text-[30px] mb-[8px]">
          Offerte <p className="font-bold text-red ml-[7px]">data-driven</p>
        </div>
        <div className="flex flex-row">
          <MapPinIcon className="text-red mx-[8px] laptop:w-40" />
          <div className="pl-[5px] ">{props.text2}</div>
        </div>
      </div>
      <div className="flex flex-col py-[30px]">
        <div className="flex text-[30px] mb-[8px]">
          Cloud <p className="font-bold text-blue ml-[7px]">Analysis</p>
        </div>
        <div className="flex flex-row">
          <div className="flex pr-[15px]">{props.text3}</div>
          <div className="flex">
            <Lottie
              animationData={cloudAnimation}
              style={{ height: 120, width: 120 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
