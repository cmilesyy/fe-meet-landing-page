function Footer() {
  return (
    <section>
      <div className="relative">
        <div className="flex items-center justify-center flex-col pt-8 ">
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
          <div className="border rounded-full px-5 py-4 font-bold text-[#87879D] bg-white z-50">
            02
          </div>
        </div>
        <div className=" text-center bg-footer-mobile  bg-cover h-auto text-white absolute top-[82%] bg-blend-overlay bg-[#4D96A9]">
          <div className="px-6">
            <h3 className="text-3xl pt-24 pb-5">Experience more together</h3>
            <p className="text-lg pb-5">
              Stay connected with reliable HD meetings and unlimited one-on-one
              and group video sessions.
            </p>
            <button className="bg-[#855FB1] w-40 h-14 rounded-full text-white font-bold mb-10">
              Download <span className="text-[#D9B8FF]">v1.3</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
