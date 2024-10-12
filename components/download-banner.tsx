import Image from "next/image";
import ButtonDownload from "./button-download";

const DownloadBanner = () => {
  return (
    <section className=" container">
      <div className=" relative overflow-hidden flex flex-col md:flex-row justify-between items-center md:items-start gap-10 bg-primary-2 rounded-3xl p-4 py-8 md:py-12 mx-auto h-[501px] md:h-[394px] /max-w-[991px] sm:w-full">
        <div className="mt-auto flex flex-col items-center md:items-start  text-center md:text-left">
          <p className=" text-primary mb-3 md:mb-4 font-medium">Download The Rise App</p>
          <h2 className=" font-semibold text-xl md:text-3xl font-tomato-grotesk mb-4 md:mb-6 max-w-[310px] md:max-w-[464px] text-black">
            Join our 100,000 users investing and setting long term goals!
          </h2>
          <p className=" font-medium mb-8">Dollar investments that help you grow.</p>
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-4">
            <ButtonDownload type="apple" className=" rounded-md" />
            <ButtonDownload type="google" className=" rounded-md" />
          </div>
        </div>

        <Image alt="phone screen" src="/phone-1.png" width={208} height={425} className=" md:mr-20" />
        {/* <Image alt="phone screen" src="/phone-1.png" width={208} height={425} className=" absolute md:right-28 bottom-0 translate-y-[71%] md:translate-y-[16%]" /> */}
      </div>
    </section>
  );
};

export default DownloadBanner;
