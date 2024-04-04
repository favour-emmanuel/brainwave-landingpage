import { Icon } from "@iconify/react/dist/iconify.js";
import image from "../assets/samuselspencer.svg";

const GettingStarted = () => {
  return (
    <div className="bg-appCyan px-28 py-10 mt-8">
      <div className="grid md:grid-cols-2 grid-cols-1 justify-between items-center gap-20 w-full mx-auto max-w-5xl">
        <div className="">
          <h1 className="font-bold text-2xl max-w-[19rem] w-full my-1">
            Getting started with Albino is easier than ever
          </h1>
          <p className="w-full max-w-[24rem] text-sm font-normal my-2">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page so quickly with Albino.
          </p>
          <button className="max-w-[12rem] py-2 px-2 rounded-md bg-appblue text-appwhite font-medium text-sm flex gap-2 items-center my-2">
            <a href="#" className="text-sm">
              Get started for free
            </a>
            <Icon icon="solar:arrow-right-outline" />
          </button>
        </div>
        <div className="max-w-[20rem]">
          <img src={image} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
