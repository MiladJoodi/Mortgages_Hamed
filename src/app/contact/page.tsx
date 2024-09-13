import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <section className="p-4">
      <Container>
        <section className="bg-gray-100">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div className="lg:col-span-2 lg:py-12">
                <p className="max-w-xl text-lg">
                  If you're new to buy to let or already with us, don’t hesitate
                  to contact us. There are dedicated teams ready to help.
                </p>

                <div className="mt-8">
                  <a href="#" className="text-2xl font-bold text-pink-600">
                    {" "}
                    (+1) 416 869 8458{" "}
                  </a>

                  <address className="mt-2 not-italic">
                    Toronto, CA
                  </address>
                </div>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form action="#" className="space-y-4">
                  <div>
                    <label className="sr-only" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Name"
                      type="text"
                      id="name"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Email address"
                        type="email"
                        id="email"
                      />
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                    <div>
                      <label
                        htmlFor="Option1"
                        className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      >
                        <input
                          className="sr-only"
                          id="Option1"
                          type="radio"
                          name="option"
                        />

                        <span className="text-sm"> Option 1 </span>
                      </label>
                    </div>

                    <div>
                      <label
                        htmlFor="Option2"
                        className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      >
                        <input
                          className="sr-only"
                          id="Option2"
                          type="radio"
                          name="option"
                        />

                        <span className="text-sm"> Option 2 </span>
                      </label>
                    </div>

                    <div>
                      <label
                        htmlFor="Option3"
                        className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      >
                        <input
                          className="sr-only"
                          id="Option3"
                          type="radio"
                          name="option"
                        />

                        <span className="text-sm"> Option 3 </span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="message">
                      Message
                    </label>

                    <textarea
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Message"
                      id="message"
                    ></textarea>
                  </div>

                  <div className="mt-4">
                    <Button
                      type="submit"
                      className="w-full bg-applyBtnOrange hover:bg-applyBtnOrange hover:opacity-80 transition-all duration-150"
                    >
                      Send
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default page;
