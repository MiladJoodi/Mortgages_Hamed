import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "../Container";

export function Faq() {
  return (
    <section className="w-full">
      <Container>
        <div className="flex h-[400px] items-center gap-8 p-8 gradien rounded-xl">

          <div className="flex-1 text-white font-semibold">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What is the home buyers' plan?
                </AccordionTrigger>
                <AccordionContent>
                  The Canadian Government’s Home Buyers' Plan (HBP) allows
                  first-time home buyers to borrow up to $60,000 from their RRSP
                  for a down payment, tax-free.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What is creditor insurance?</AccordionTrigger>
                <AccordionContent>
                  The mortgage stress test requires financial institutions to
                  make sure a borrower can still make mortgage payments if
                  interest rates increase.{" "}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What is the mortgage stress test?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="hidden md:flex flex-1 text-gray-100 shadow-sm text-xl text-justify md:justify-left leading-7 font-semibold">
            All of our major banks post the same mortgage rates (raising and lowering them practically in unison), lenders make little distinction between small town and big city borrowers, and the standard interest rates they offer do not vary according to the size of a borrower’s down payment.
          </div>

        </div>
      </Container>
    </section>
  );
}
