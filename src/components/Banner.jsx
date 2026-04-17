import { MoveUp } from "lucide-react";
import { MoveDown } from "lucide-react";
import { ChevronDown } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative mb-10">
      <div className="bg-[#0f3d2e]/95 pColor rounded-b-[100%] px-10 py-2 h-fit transform-gpu">
        <h3>Good morning,</h3>
        <h1 className="mb-28">Moin Khan</h1>
      </div>
      <div className="sBg absolute top-16 w-[78%] left-1/2 -translate-x-1/2  rounded-2xl card shadow-2xl pColor p-4">
        <h2 className="flex items-center text-sm">
          Total Balance <ChevronDown />
        </h2>
        <h1 className="text-lg mb-2">£18,888</h1>

        <div className="flex justify-between">
          <div>
            <div className="flex items-center text-base">
              <MoveDown size={16} />
              Income
            </div>
            <p className="text-sm text-center">£1,000</p>
          </div>

          <div>
            <div className="flex items-center text-base">
              <MoveUp size={16} />
              Expenses
            </div>
            <p className="text-sm text-center">£1,000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
