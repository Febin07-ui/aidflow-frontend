import React from "react";

const data = [
  { label: "Food", value: 90 },
  { label: "Water", value: 55 },
  { label: "Meds", value: 70 },
  { label: "Shelter", value: 40 },
];

function ResourceNeeds() {
  return (
    <div className="w-80 h-full bg-[#0B1220] border-1 border-gray-700 rounded-2xl p-5 text-white shadow-lg">
      <h3 className="text-lg font-semibold">Resource Needs</h3>
      <p className="text-sm text-gray-400 mb-6">
        Distribution by category
      </p>

      <div className="flex items-center justify-between mb-9">
        <div>
          <p className="text-xs text-gray-400">TOTAL ITEMS</p>
          <p className="text-2xl font-bold">1,250</p>
        </div>
        <span className="text-green-400 bg-green-400/10 px-2 py-1 rounded-md text-sm">
          ↗ 10%
        </span>
      </div>

      {/* Bars */}
      <div className="flex items-end justify-between">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            
            {/* FIXED HEIGHT */}
            <div className="w-10 h-40 bg-[#0F2742] rounded-lg flex items-end overflow-hidden mb-3">
              <div
                className="w-full bg-blue-500 rounded-lg transition-all duration-700"
                style={{ height: `${item.value}%` }}
              />
            </div>

            <span className="text-xs text-gray-400 ">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResourceNeeds;
