import minionsVideo from "../assets/minions.mp4";
import BillboardButton from "./BillboardButton";

export default function Billboard() {
  return (
    <div className="relative h-screen">
      <video
        src={minionsVideo}
        className="w-full h-full object-cover brightness-[60%] transition duration-500"
        autoPlay
        muted
        loop
        style={{
          objectFit: "cover",
          transform: "scale(1.34)", // Aumenta o vídeo em 10% para cortar as bordas
        }}
      ></video>
      <div className="absolute top-[40%] ml-16">
        <img
          src="https://occ-0-3638-360.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABa_oqKBTh47MCaUjZYkxTzOpp4koWaLOW6296Xe38-oqBiQ3hFBpR243f-m1SmqYk2A_PAumky25bf5ZOMG4wAs7lw--jCk0mvQFTJGQpps.webp?r=0bb"
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
