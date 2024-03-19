/* import AngleCommand from "./components/AngleCommand";
import CommandButton from "./components/CommandButton"; */
import Image from "next/image";
import JointUISteps from "./components/JointUISteps";
import JointUIAngle from "./components/JointUIAngle";
import { AppStateProvider } from "../context/AngleContext";
import ActionButtons from "./components/ActionButtons";
import PositionsUI from "./components/PositionsUI";

import dynamic from "next/dynamic";
import RenderModel from "./components/RenderModel";
import { Model2 } from "./components/Model2";
import { redirect } from "next/navigation";
import Link from "next/link";
const Model = dynamic(() => import("./components/Model"), {
  ssr: false,
});

export default function Home() {
  return (
    <AppStateProvider>
      <main className='min-h-screen w-full bg-[#eaeaea]'>
        <Link
        href="https://nikolalmn.vercel.app/"
          className='fixed top-0 w-full h-14 bg-[#F5F5F5] shadow-xl z-50 cursor-pointer'
        >
          <div className='flex items-center w-full h-full justify-between'>
            <div className='h-12 w-14 flex items-center'>
              <Image
                src='/rarm.png'
                width={56}
                height={48}
                alt='robot-arm'
              ></Image>
            </div>
            <div className='h-full w-[120px] flex items-center mr-5'>
              <p className='text-xs mr-2 flex-shrink-0'>powered by</p>
              <Image
                src='/lmn.png'
                width={56}
                height={48}
                alt='lmn-brand'
              ></Image>
            </div>
          </div>
        </Link>
        <div className='bg-gray-200 w-[80%] h-screen fixed'>
          <div className='flex w-full h-full pt-14'>
            <div className='w-1/3 h-full bg-gray-300'>
              {/* <div className='w-full h-full'>
                <RenderModel className=""><Model2></Model2></RenderModel>
              </div> */}
              <div className='w-full h-full object-cover'>
                <Image
                  src='/3dcapture.png'
                  alt='3d capture'
                  width={5312}
                  height={6528}
                  className='w-full h-full object-cover'
                ></Image>
              </div>
            </div>
            <div className='w-2/3 h-full bg-gray-100'>
              <div className='flex w-full h-[90%] bg-gray-100'>
                <div className='flex w-1/2 flex-col items-start justify-center h-full overflow-y-auto'>
                  <JointUISteps ankle={5}></JointUISteps>
                  <JointUISteps ankle={4}></JointUISteps>
                  <JointUISteps ankle={3}></JointUISteps>
                  <JointUISteps ankle={2}></JointUISteps>
                  <JointUISteps ankle={1}></JointUISteps>
                </div>
                <div className='flex w-1/2 flex-col items-start justify-center h-full overflow-y-auto'>
                  <JointUIAngle ankle={5}></JointUIAngle>
                  <JointUIAngle ankle={4}></JointUIAngle>
                  <JointUIAngle ankle={3}></JointUIAngle>
                  <JointUIAngle ankle={2}></JointUIAngle>
                  <JointUIAngle ankle={1}></JointUIAngle>
                </div>
              </div>
              <ActionButtons></ActionButtons>
            </div>
          </div>
        </div>
        <div className='ml-[80%] pt-14 h-full '>
          <PositionsUI />
        </div>
      </main>
    </AppStateProvider>
  );
}
