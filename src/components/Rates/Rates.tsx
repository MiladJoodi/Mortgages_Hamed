import Image from "next/image";
import Container from "../Container";
import { Label } from "../ui/label";
import RatesCalculator from "./RatesCalculator";

const Rates = () => {
  return (
    <section className="">
      <Container>

        <div className="flex flex-col md:flex-row justify-between gap-2 p-4 w-[90%] mx-auto">
          {/* Left */}
          <div className="flex flex-1 flex-col justify-evenly gap-6 p-4 overflow-hidden">
            <h4 className="text-3xl text-dolphin">Today's Rates *</h4>

            <table className="w-full divide-y divide-gray-200 border text-md md:text-lg">
              <thead className="text-white font-bold bg-applyBtnOrange">
                <tr className="">
                  <th className="px-2 lg:px-6 xl:px-8 py-1 text-left font-medium text-white uppercase tracking-wider ">
                    Term
                  </th>
                  <th className="px-2 lg:px-6 xl:px-8 py-1 text-left font-medium text-white uppercase tracking-wider ">
                    Rate
                  </th>
                  <th className="px-2 lg:px-6 xl:px-8 py-1 text-left font-medium text-white uppercase tracking-wider ">
                    APR
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="bg-gray-50 hover:bg-gray-200 duration-100">
                  <td className="px-2 lg:px-6 xl:px-8 py-1 whitespace-nowrap">30 Yr Fxd</td>
                  <td className="px-2 lg:px-6 xl:px-8 py-1 whitespace-nowrap">5.747%</td>
                  <td className="px-2 lg:px-6 xl:px-8 py-1 whitespace-nowrap">5.819%</td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="px-2 lg:px-6 xl:px-8 py-1 whitespace-nowrap">30 Yr Fxd</td>
                  <td className="px-2 lg:px-6 xl:px-8 py-1 whitespace-nowrap">5.747%</td>
                  <td className="px-2 lg:px-6 xl:px-8 py-1 whitespace-nowrap">5.819%</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-200 duration-100">
                  <td className="px-2 lg:px-6 xl:px-8 py-1 whitespace-nowrap">30 Yr Fxd</td>
                  <td className="px-2 lg:px-6 xl:px-8 py-1 whitespace-nowrap">5.747%</td>
                  <td className="px-2 lg:px-6 xl:px-8 py-1 whitespace-nowrap">5.819%</td>
                </tr>
              </tbody>
            </table>

            <p className="text-sm">
              *=This is only an estimate, provided for illustrative purposes
              only. Actual rates and payments may vary. It does not constitute a
              quote.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-1 flex-col items-center gap-8 lg:py-8">
            <Image
              src="/Rates.png"
              alt=""
              width={1000}
              height={300}
              className="w-[500px]"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between gap-2 w-[90%] mx-auto">
          <div className="flex flex-1 flex-col center items-center gap-6 p-4 overflow-hidden">
          <Image
              src="/calculate.jpg"
              alt=""
              width={1000}
              height={300}
              className="w-[400px]"
            />
          </div>
          {/* Calculator In Today's Rates Section */}
          <div className="flex flex-1 flex-col items-center gap-8 lg:py-8">
          <RatesCalculator />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Rates;
