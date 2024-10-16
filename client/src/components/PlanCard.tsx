import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function PlanCard() {
  return (
    <div className="border rounded p-3 h-[350px] w-full pointer mr-3 ">
      <div className="first-custom-gradient rounded w-full p-3 text-white font-bold">
        <h3 className="text-2xl">Standard </h3>
        <p className="font-light">1080p</p>
      </div>

      <div className="border-b py-4 flex text-reg items-center">
        <div className="w-6 h-6 rounded-full text-sm bg-cyan-500 flex items-center justify-center">
          <CheckIcon color="white" width={15} fontWeight={900} />
        </div>
        <div className="ml-3">
          <h3 className="text-gray-600">Monthly price</h3>
          <h3 className="font-semibold">£4.99</h3>
        </div>
      </div>

      <div className="border-b py-4 flex text-reg items-center">
        <div className="w-6 h-6 rounded-full text-sm bg-cyan-500 flex items-center justify-center">
          <CheckIcon color="white" width={15} fontWeight={900} />
        </div>
        <div className="ml-3">
          <h3 className="text-gray-600">Video and sound quality</h3>
          <h3 className="font-semibold">Good</h3>
        </div>
      </div>

      <div className="border-b py-4 flex text-reg items-center">
        <div className="w-6 h-6 rounded-full text-sm bg-cyan-500 flex items-center justify-center">
          <CheckIcon color="white" width={15} fontWeight={900} />
        </div>
        <div className="ml-3">
          <h3 className="text-gray-600">Resolution</h3>
          <h3 className="font-semibold">1080p (Full HD)</h3>
        </div>
      </div>
    </div>
  );
}
