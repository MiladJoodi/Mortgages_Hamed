import Image from "next/image";

const Rates = () => {
  return (
    <div className="flex flex-col md:flex-row px-16 items-center justify-evenly gap-12">
      {/* Left */}
      <div className="flex flex-col gap-6">
        <h4 className="text-3xl text-dolphin">Today's Rates *</h4>

        <table className="w-[500px] divide-y divide-gray-200 border text-lg">
          <thead className="text-white font-bold bg-applyBtnOrange">
            <tr className="">
              <th className="px-8 py-1 text-left font-medium text-white  uppercase tracking-wider ">
                Term
              </th>
              <th className="px-8 py-1 text-left font-medium text-white  uppercase tracking-wider ">
                Rate
              </th>
              <th className="px-8 py-1 text-left font-medium text-white  uppercase tracking-wider ">
                APR
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="bg-gray-50 hover:bg-gray-200 duration-100">
              <td className="px-8 py-1 whitespace-nowrap">30 Yr Fxd</td>
              <td className="px-8 py-1 whitespace-nowrap">5.747%</td>
              <td className="px-8 py-1 whitespace-nowrap">5.819%</td>
            </tr>
            <tr className="hover:bg-gray-200">
              <td className="px-8 py-1 whitespace-nowrap">30 Yr Fxd</td>
              <td className="px-8 py-1 whitespace-nowrap">5.747%</td>
              <td className="px-8 py-1 whitespace-nowrap">5.819%</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-200 duration-100">
              <td className="px-8 py-1 whitespace-nowrap">30 Yr Fxd</td>
              <td className="px-8 py-1 whitespace-nowrap">5.747%</td>
              <td className="px-8 py-1 whitespace-nowrap">5.819%</td>
            </tr>
          </tbody>
        </table>

        <p className="text-xs">
          *=This is only an estimate, provided for illustrative purposes only.
          Actual rates and payments may vary. It does not constitute a quote.
        </p>
      </div>

      {/* Right */}
      <div className="">
        <Image
          src="/Rates.png"
          alt=""
          width={1000}
          height={300}
          className="w-[500px]"
        />
      </div>
    </div>
  );
};

export default Rates;
