import Header from "@/app/_components/Header/page";
import BtnComponent from "@/app/_components/Button/BtnComponent";
import LogoSlider from "@/app/_components/LogoSlider/page";
import TypingHeadline from "@/app/_components/AuatoText/AutoText";

export default function Home() {
  
  return (
    // Container div for the entire Home component
    <div className="flex flex-col justify-between items-center min-h-screen bg-[rgba(0,0,0,0.8)] after:content-[''] after:absolute after:h-full after:w-full after:bg-[url('/assets/images/bg-img.png')] after:left-0 after:top-0 after:bg-no-repeat after:bg-[center_center] after:bg-cover">
      
      {/* Header component */}
      <Header />

      {/* Main content area */}
      <main className="relative justify-center items-center">
        <div className='content text-center relative z-[9] max-w-[650px] px-4'>
          
          {/* Typing headline component */}
          <TypingHeadline/>

          {/* Subheading */}
          <h2 className="text-[30px] leading-[30px] sm:text-[40px] sm:leading-[50px] tracking-[3.25px] text-amber-500 md:text-[65px] md:leading-[60px] ">EXPERIENCES</h2>
          
          {/* Description paragraph */}
          <div className='max-w-[375px] mt-2.5 mx-auto'>
            <p className="text-[#9BA0AF] text-[16px] sm:text-[19px] leading-6 sm:leading-7 tracking-[1.43px] ">Minting, Staking, Gaming, Web Apps, Website Development and much more.</p>
          </div>
          
          {/* Button group */}
          <div className='btn-grp flex gap-4 md:gap-10 justify-center mt-[50px]'>            
            <BtnComponent title="Get started" variant="filled" />
            <BtnComponent title="Explore our work" />
          </div>
        </div>
      </main>

      {/* Logo slider at the bottom */}
      <div className="max-w-[1000px] w-full py-5 bottom-[10px] z-[99]">
        <LogoSlider />
      </div>
    </div>
  );
}
