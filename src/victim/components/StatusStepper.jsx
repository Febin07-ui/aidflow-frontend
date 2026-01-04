import { Check } from "lucide-react";
import { useState } from "react";

function StatusStepper() {
  const [currentStep, setCurrentStep] = useState(2); // 0-based index
  console.log(setCurrentStep)
    const steps = [
    "Submitted",
    "Approved",
    "Assigned & En Route",
    "Delivered",
    ];

  return (
    <div className="w-full ml-25 px-6 py-4  bg-primary-blue ">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex-1 flex items-center">
            
            {/* Circle */}
            <div className="relative flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2
                  ${
                    index < currentStep
                      ? "bg-blue-500 border-blue-500 text-white"
                      : index === currentStep
                      ? "border-blue-500 text-blue-500"
                      : "border-gray-600 text-gray-600"
                  }
                `}
              >
                {index < currentStep ? <Check size={16} /> : index + 1}
              </div>

              {/* Label */}
              <span
                className={`mt-2 text-sm whitespace-nowrap
                  ${
                    index <= currentStep
                      ? "text-blue-400"
                      : "text-gray-500"
                  }
                `}
              >
                {step}
              </span>
            </div>

            {/* Line */}
            {index !== steps.length - 1 && (
              <div
                className={`flex-1 h-[2px] mx-2
                  ${
                    index < currentStep
                      ? "bg-blue-500"
                      : "bg-gray-700"
                  }
                `}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatusStepper;
