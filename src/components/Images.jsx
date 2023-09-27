import one from "../assets/images/desktop/image-man-texting.jpg"
import two from '../assets/images/desktop/image-men-in-meeting.jpg'
import three from '../assets/images/desktop/image-woman-in-videocall.jpg'
import four from '../assets/images/desktop/image-women-videochatting.jpg'


function Images() {
  return (
    <section>
      <div className="grid grid-cols-2 px-5">
        <div className="flex items-center justify-center flex-col gap-4">
          <img src={one} alt="" className="w-[151px] rounded-xl"/>
          <img src={two} alt="" className="w-[151px] rounded-xl"/> 
        </div>
        <div className="flex items-center justify-center flex-col gap-4">
          <img src={three} alt="" className="w-[151px] rounded-xl"/>
          <img src={four} alt="" className="w-[151px] rounded-xl"/>
        </div>
      </div>

      <div className="text-center py-10 px-5">
        <h3 className="text-[#4D96A9] text-lg pb-5">Built for modern use</h3>
        <h2 className="font-bold text-3xl pb-5">Smarter meetings, all in one place</h2>
        <p className="text-[#87879D] ">Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite-only team access, data encryption, and data export.</p>
      </div>  
    </section>
  );
}

export default Images;
