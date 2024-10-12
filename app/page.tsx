import Assets from "@/components/assets";
import ButtonDownload from "@/components/button-download";
import Community from "@/components/community";
import DownloadBanner from "@/components/download-banner";
import Footer from "@/components/footer";
import Goals from "@/components/goals";
import Header from "@/components/header";
import Offers from "@/components/offers";
import Regulation from "@/components/regulation";
import Testimonials from "@/components/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <section className="container px-2 mx-auto py-6">
        <div className=" flex items-center flex-col gap-8 lg:gap-14 lg:flex-row justify-between flex-wrap /px-4 md:pl-6 md:pr-10">
          <div className="flex flex-col items-center lg:items-start max-w-[500px] text-center lg:text-left">
            <h1 className=" font-tomato-grotesk font-semibold text-4xl lg:text-5xl xl:text-[56px] leading-tight">Dollar investments that help you grow</h1>
            <p className="max-w-[391px] font-medium mt-4 mb-8">We put your money in high quality assets that help you build wealth and achieve your financial goals.</p>
            <div className="flex items-center justify-center flex-wrap gap-2 min-[320px]:gap-4">
              <ButtonDownload type="apple" className="" />
              <ButtonDownload type="google" className="" />
            </div>
          </div>
          {/* <div className="flex items-center gap-2 min-[400px]:flex-row"> */}

          <div className="flex relative items-center justify-center lg:my-10">
            <Image alt="Hero Image" className="hidden lg:block scale-[1.15]  aspect-[194/433] object-cover " width="194" height="433" src="/phone-1.png" />
            <Image
              alt="Hero Image"
              unoptimized
              quality={100}
              className=" hidden lg:block scale-[1.15] absolute top-0 left-0 aspect-[194/433] object-cover "
              width="194"
              height="433"
              src="/phone-1.png"
            />
            <Image unoptimized alt="Hero Image" className="lg:hidden  aspect-[194/393]/ object-cover  /h-full" width="194" height="393" src="/phone-1-shadow.png" />
          </div>
        </div>

        <div className=" mt-10">
          <h5 className=" lg:hidden text-lg font-semibold mb-1 tracking-tighter -text--grey-white">We are supported by</h5>
          <Image src={"/partners.png"} width={457} height={80} className="aspect-[457/80] lg:mx-auto" alt="risevest partners" />
        </div>
      </section>
      <Offers />
      <Assets />
      <Goals />
      <Regulation />
      <Testimonials />
      <Community />
      <DownloadBanner />
      <Footer />
    </>
  );
}
