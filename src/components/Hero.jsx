import right from "../assets/images/desktop/image-hero-right.png";
import left from "../assets/images/desktop/image-hero-left.png";
import logo from "../assets/images/logo.svg";

function Hero() {
  return (
    <>
      <section>
        <div className="">
          <div className="flex items-center justify-center py-10">
            <img src={logo} alt="" />
          </div>
          <div className="flex h-36 gap-4 overflow-hidden">
            <img src={left} alt="" />
            <img src={right} alt="" />
          </div>
          <div className="py-10 px-5 text-center">
            <h1 className="text-4xl pb-3">Group Chat for Everyone</h1>
            <p className="text-[#87879D] text-md ">
              Meet makes it easy to connect with others face-to-face virtually
              and collaborate across any device.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <button className="bg-[#4D96A9] w-48 h-14 text-center rounded-full text-white font-bold">
              Download <span className="text-[#8FE3F9]">v1.3</span>
            </button>
            <button className="bg-[#855FB1] w-36 h-14 rounded-full text-white font-bold">
              What is it?
            </button>
          </div>
          <div className="flex items-center justify-center flex-col py-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1"
              height="84"
              viewBox="0 0 1 84"
              fill="none"
            >
              <path
                opacity="0.25"
                d="M0.5 83.9961V-0.00390625"
                stroke="#87879D"
              />
            </svg>
            <div className="border rounded-full px-5 py-4 font-bold text-[#87879D]">01</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
