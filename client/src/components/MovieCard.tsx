import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";

const MovieCard = () => {
  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw] w-[24%]">
      <img
        src="https://occ-0-3638-360.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcg-6wxvemr1P31QyHelPC1cEsElblVVUcRNCpatOPaXWuKWrsbFfjM4C_oSjahYNk5w7MknnoCGQ-wLaSVaIonA3ARcVTfAr7w.webp?r=284"
        alt="Movie"
        draggable={false}
        className="
        cursor-pointer
        object-cover
        transition
        duration
        shadow-xl
        rounded-md
        group-hover:opacity-90
        sm:group-hover:opacity-0
        delay-300
        w-full
        h-[12vw]
      "
      />
      <div
        className="
        opacity-0
        absolute
        top-0
        transition
        duration-200
        z-10
        invisible
        sm:visible
        delay-300
        w-full
        scale-0
        group-hover:scale-110
        group-hover:-translate-y-[6vw]
        group-hover:translate-x-[2vw]
        group-hover:opacity-100
      "
      >
        <img
          src="https://occ-0-3638-360.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcg-6wxvemr1P31QyHelPC1cEsElblVVUcRNCpatOPaXWuKWrsbFfjM4C_oSjahYNk5w7MknnoCGQ-wLaSVaIonA3ARcVTfAr7w.webp?r=284"
          alt="Movie"
          draggable={false}
          className="
          cursor-pointer
          object-cover
          transition
          duration
          shadow-xl
          rounded-t-md
          w-full
          h-[12vw]
        "
        />
        <div
          className="
          z-10
          bg-zinc-800
          p-2
          lg:p-4
          absolute
          w-full
          transition
          shadow-md
          rounded-b-md
          "
        >
          <div className="flex flex-row items-center gap-3">
            <button className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300">
              <PlayIcon className="text-black w-4 lg:w-6" />
            </button>
            <div className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
              <ChevronDownIcon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
            </div>
          </div>
          <p className="text-white font-semibold mt-4 text-2xl">minions 2</p>
          <p className="text-gray-400">
            Clever kid Gru wants to be a supervillain. The Minions want a boss.
            It's the perfect match: Even bad guys need a little a help from
            their friends.
          </p>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">87 m</p>
          </div>
          <div className="flex flex-row items-center gap-2 mt-4 text-[8px] text-white lg:text-sm">
            <p>Kids & Family Movies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
