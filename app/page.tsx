/* import AngleCommand from "./components/AngleCommand";
import CommandButton from "./components/CommandButton"; */
import Image from "next/image";
import JointUISteps from "./components/JointUISteps";
import JointUIAngle from "./components/JointUIAngle";

export default function Home() {
  return (
    <main className='min-h-screen w-full bg-[#eaeaea]'>
      <nav className='fixed top-0 w-full h-14 bg-[#F5F5F5] shadow-xl z-50'>
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
      </nav>
      <div className='bg-gray-200 w-[80%] h-screen fixed'>
        <div className='flex w-full h-full pt-14'>
          <div className='w-1/3 h-full bg-gray-300'></div>
          <div className='w-2/3 h-full bg-gray-100'>
            <div className='flex w-full h-[90%] bg-gray-100'>
              <div className='flex w-1/2 flex-col items-start justify-center h-full'>
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
            <div className='w-full h-[10%] bg-zinc-800 p-2'>
              <div className='bg-white w-full h-full rounded-lg flex items-center justify-between '>
                <div className='flex items-center justify-center w-[30%] font-bold'>
                  RUN
                </div>
                <div className='w-[0.5%] bg-zinc-800 h-full'></div>
                <div className='flex items-center justify-center w-[30%] font-bold'>
                  STOP
                </div>
                <div className='w-[0.5%] bg-zinc-800 h-full'></div>
                <div className='flex items-center justify-center w-[39%] font-bold'>
                  SAVE ANGLE POSITION
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
