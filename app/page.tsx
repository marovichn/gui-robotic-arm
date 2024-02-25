import AngleCommand from "./components/AngleCommand";
import CommandButton from "./components/CommandButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className='min-h-screen w-full bg-[#eaeaea]'>
      <nav className='fixed top-0 w-full h-14 bg-[#F5F5F5] shadow-xl'>
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
      <div className=''>
        <div className='w-full h-screen flex flex-col items-center justify-center '>
          <div className='flex items-center justify-center mt-20 max-sm:hidden'>
            <CommandButton direction='counterclockwise' size={120} />
            <CommandButton direction='clockwise' size={120} />
          </div>
          <div className='flex items-center justify-center mt-20 sm:hidden'>
            <CommandButton direction='counterclockwise' size={60} />
            <CommandButton direction='clockwise' size={60} />
          </div>
          <div className='w-full flex items-center justify-center pb-5 pt-10'>
            <AngleCommand />
          </div>
          <div className='flex items-center justify-center max-sm:gap-x-[175px] sm:gap-x-[220px]'>
            <div className='w-12 h-20 rounded-md bg-black'>
              <div className='w-full h-[20%] bg-black rounded-t-md'></div>
              <div className='w-full h-[20%] bg-[#eaeaea] border-2 border-black rounded-md'></div>
              <div className='w-full h-[20%] bg-black'></div>
              <div className='w-full h-[20%] bg-[#eaeaea] border-2 border-black rounded-md'></div>
              <div className='w-full h-[20%] bg-black rounded-b-md'></div>
            </div>
            <div className='w-12 h-20 rounded-md bg-black'>
              <div className='w-full h-[20%] bg-black rounded-t-md'></div>
              <div className='w-full h-[20%] bg-[#eaeaea] border-2 border-black rounded-md'></div>
              <div className='w-full h-[20%] bg-black'></div>
              <div className='w-full h-[20%] bg-[#eaeaea] border-2 border-black rounded-md'></div>
              <div className='w-full h-[20%] bg-black rounded-b-md'></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
