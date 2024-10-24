import minionsVideo from "../assets/minions.mp4";
import BillboardButton from "./BillboardButton";
import minionsTitle from "../assets/minionsTitle.png";

export default function Billboard() {
  return (
    <div className="relative h-screen">
      <video
        src={minionsVideo}
        className="w-full h-full object-cover brightness-[60%] transition duration-500"
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute top-[40%] ml-16">
        <img
          src={minionsTitle}
          alt="Imagem"
          style={{ width: "289px", height: "116px" }}
        />
        <div className="flex items-center mt-4 gap-3">
          <BillboardButton text="Play" theme="light" />
          <BillboardButton text="More info" theme="dark" />
        </div>
      </div>
    </div>
  );
}
