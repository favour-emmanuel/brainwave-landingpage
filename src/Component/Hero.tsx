import heroImage from "../assets/heroimg.svg";
import code from "../assets/code.svg";
import timeTrack from "../assets/countdown-2.svg";
import mobileHone from "../assets/smartphone.svg";
import { Icon } from "@iconify/react/dist/iconify.js";

interface heroMap {
  icon: string;
  title: string;
  text: string;
}

const heroData: heroMap[] = [
  {
    icon: code,
    title: "Project management",
    text: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
  {
    icon: timeTrack,
    title: "Time tracking",
    text: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
  {
    icon: mobileHone,
    title: "Beautiful mobile app",
    text: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
];

const Hero = () => {
  return (
    <div className="flex flex-col  min-h-screen max-w-[1640] mx-auto w-full">
      <div className="px-8 pt-10 text-center">
        <h1 className="max-w-[27rem] mx-auto w-full font-bold text-3xl my-2">
          Get things done by awesome remote team
        </h1>
        <p className=" max-w-[25rem] w-full mx-auto font-light text-sm my-3">
          We share common trends and strategies for improving your rental income
          and making sure you stay in high demand.
        </p>
        <div className=" flex justify-center gap-7 mt-5">
          <button className="max-w-[12rem] py-1 px-2 rounded-md bg-appblue text-appwhite font-medium text-sm flex gap-2 items-center">
            <a href="#" className="text-sm">
              Get started for free
            </a>
            <Icon icon="solar:arrow-right-outline" />
          </button>
          <button className="max-w-[11rem] py-2.5 px-2 rounded-md font-semibold ">
            <a href="#" className="text-sm">
              Learn more
            </a>
          </button>
        </div>
      </div>
      <div className="flex justify-center max-w-[25rem] w-full mx-auto mt-8">
        <img src={heroImage} alt="" className="w-full" />
      </div>

      <div className="mx-auto w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 max-w-5xl mt-6 mb-5 px-8 lg:px-0">
        {heroData.map((data) => (
          <div>
            <img src={data.icon} alt="" className="w-7 my-2" />
            <h3 className="font-medium text-base mb-1">{data.title}</h3>
            <p className="text-sm font-normal">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
