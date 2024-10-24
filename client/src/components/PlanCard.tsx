import { CheckIcon } from "@heroicons/react/24/outline";
import { Plan } from "../hooks/usePlans";

interface PlanProps {
  setSelectedSession: React.Dispatch<React.SetStateAction<string | null>>;
  selectedSession: string | null;
  plan: Plan;
}

const formatter = new Intl.NumberFormat("en-UK", {
  style: "currency",
  currency: "GBP",
});

export default function PlanCard({
  plan,
  setSelectedSession,
  selectedSession,
}: PlanProps) {
  const { name, price, videoSoundQuality, ultraHd } = plan;

  return (
    <div
      className={`border rounded p-3 h-[350px] w-full mr-3 cursor-pointer relative transition-all duration-300 ${
        selectedSession === plan.price.id ? "border-gray-300 shadow-lg" : null
      }`}
      onClick={() => setSelectedSession(plan.price.id)}
      style={{
        borderRadius: "18px",
        boxShadow:
          selectedSession === plan.price.id
            ? "rgba(0, 0, 0, 0.25) 0px 4px 10px 0px"
            : "none",
        transition:
          "margin 250ms ease-in-out, box-shadow 250ms ease-in-out, border-color 250ms ease-in-out",
      }}
    >
      {/* Plan Header */}
      <div
        className={`relative rounded w-full p-3 text-white font-bold ${
          ultraHd ? "third-custom-gradient" : "first-custom-gradient"
        }`}
      >
        <h3 className="text-2xl">{name}</h3>
        <p className="font-light">{ultraHd ? "4K + HDR" : "1080p"}</p>

        {/* Check Icon inside the header */}
        {selectedSession === plan.price.id && (
          <div className="absolute bottom-0 right-0 mb-2 mr-2">
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
              <CheckIcon
                className="text-cyan-500"
                width={15}
                height={15}
                strokeWidth={2}
              />
            </div>
          </div>
        )}
      </div>

      {/* Plan Price */}
      <div className="border-b py-4 flex text-reg items-center">
        <div className="ml-3">
          <h3 className="text-gray-600">Monthly price</h3>
          <h3 className="font-semibold">
            {formatter.format(price.amount / 100)}
          </h3>
        </div>
      </div>

      {/* Video and Sound Quality */}
      <div className="border-b py-4 flex text-reg items-center">
        {videoSoundQuality ? (
          <div className="ml-3">
            <h3 className="text-gray-600">Video and sound quality</h3>
            <h3 className="font-semibold">Best</h3>
          </div>
        ) : (
          <div className="ml-3">
            <h3 className="text-gray-600">Video and sound quality</h3>
            <h3 className="font-semibold">Good</h3>
          </div>
        )}
      </div>

      {/* Resolution */}
      <div className="border-b py-4 flex text-reg items-center">
        {ultraHd ? (
          <div className="ml-3">
            <h3 className="text-gray-600">Resolution</h3>
            <h3 className="font-semibold">4K (Ultra HD) + HDR</h3>
          </div>
        ) : (
          <div className="ml-3">
            <h3 className="text-gray-600">Resolution</h3>
            <h3 className="font-semibold">1080p (Full HD)</h3>
          </div>
        )}
      </div>
    </div>
  );
}
