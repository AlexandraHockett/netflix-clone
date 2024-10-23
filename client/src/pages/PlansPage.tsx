import { useState } from "react";
import PlanCard from "../components/PlanCard";
import usePlans from "../hooks/usePlans";
import loadingGif from "../assets/LoadTime.gif";

export default function PlansPage() {
  const { loading, data, error } = usePlans();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null); // State to track selected plan

  if (loading) return <img src={loadingGif} alt="Loading" />;

  console.log({ loading, data, error });

  // Handler for selecting a plan
  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId); // Set selected plan
  };

  return (
    <div className="flex items-center h-screen justify-center">
      <div className="w-[600px]">
        <h1 className="font-semibold text-3xl">
          Choose the plan that’s right for you
        </h1>
        <div className="flex mt-4">
          {data &&
            data?.map((plan) => (
              <PlanCard
                plan={plan}
                key={plan.id}
                isSelected={selectedPlan === plan.id} // Pass the selected state
                onSelect={() => handleSelectPlan(plan.id)} // Handle selection
              />
            ))}
        </div>
        <button
          className="rounded bg-red-400 p-3 text-white px-10 mt-3 w-full"
          disabled={!selectedPlan} // Disable button if no plan is selected
        >
          Purchase
        </button>
      </div>
    </div>
  );
}
