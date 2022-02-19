import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Image from "next/image";

export default function Example() {
  const log = () => {
    console.log("hello");
  };

  return (
    <div className="px-4 pt-8 w-full">
      <div className="p-2 mx-auto w-full max-w-md bg-white rounded-2xl">
        <div className="mb-6">
          <div className="font-bold">KEYWORD SEARCH</div>
          <div className="relative">
            <input
              type="text"
              className="p-2 w-full bg-original-white rounded-lg shadow-inner"
            />
            <button className="absolute top-1 right-2">
              <svg
                className="w-8 h-8 text-black"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <circle cx="10" cy="10" r="7" />{" "}
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </button>
          </div>
        </div>
        <Disclosure defaultOpen>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between py-2 px-4 w-full text-sm font-medium text-left bg-original-black focus:outline-none focus-visible:ring hover:opacity-90">
                <span className="text-white">CATEGORYS</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-white`}
                />
              </Disclosure.Button>
              <button onClick={log} className="w-full">
                <Disclosure.Panel className="flex justify-between px-4 pt-4 pb-2 text-sm font-bold text-original-black border border-black hover:opacity-8b0">
                  <div className="flex">
                    <div className="mt-1 mr-6">
                      <Image
                        src="/server.png"
                        alt=""
                        width="27px"
                        height="27px"
                      />
                    </div>
                    <div className="text-xl">SERVER</div>
                  </div>
                  <div className="">
                    <Image src="/plus.png" alt="" width="30px" height="30px" />
                  </div>
                </Disclosure.Panel>
              </button>

              <button onClick={log} className="w-full">
                <Disclosure.Panel className="flex justify-between px-4 pt-4 pb-2 text-sm font-bold text-original-black border-x border-b border-black hover:opacity-80">
                  <div className="flex">
                    <div className="mt-1 mr-6">
                      <Image
                        src="/write.png"
                        alt=""
                        width="27px"
                        height="27px"
                      />
                    </div>
                    <div className="text-xl">WRITER</div>
                  </div>
                  <div className="">
                    <Image src="/plus.png" alt="" width="30px" height="30px" />
                  </div>
                </Disclosure.Panel>
              </button>

              <button onClick={log} className="w-full">
                <Disclosure.Panel className="flex justify-between px-4 pt-4 pb-2 text-sm font-bold text-white bg-original-red border-x border-b border-black hover:opacity-80">
                  <div className="flex">
                    <div className="mt-1 mr-6">
                      <Image
                        src="/mobile.png"
                        alt=""
                        width="27px"
                        height="27px"
                      />
                    </div>
                    <div className="text-xl">MOBILE</div>
                  </div>
                  <div className="">
                    <Image src="/minus.png" alt="" width="30px" height="30px" />
                  </div>
                </Disclosure.Panel>
              </button>

              <Disclosure.Panel className="flex justify-between p-6 text-sm font-bold text-original-black border-x border-b border-black" />
              <Disclosure.Panel className="flex justify-between p-6 text-sm font-bold text-original-black border-x border-b border-black" />
              <Disclosure.Panel className="flex justify-between p-6 text-sm font-bold text-original-black border-x border-b border-black" />
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2" defaultOpen>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between py-2 px-4 w-full text-sm font-medium text-left bg-original-black focus:outline-none hover:opacity-90">
                <span className="text-white">TARGET</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-white`}
                />
              </Disclosure.Button>

              <button onClick={log} className="w-full">
                <Disclosure.Panel className="flex justify-between px-4 pt-4 pb-2 text-sm font-bold text-original-black border-x border-b border-black hover:opacity-80">
                  <div className="flex">
                    <div className="mt-1 mr-6">
                      <Image
                        src="/biginner.png"
                        alt=""
                        width="27px"
                        height="27px"
                      />
                    </div>
                    <div className="text-xl">BIGINNER</div>
                  </div>
                  <div className="">
                    <Image src="/plus.png" alt="" width="30px" height="30px" />
                  </div>
                </Disclosure.Panel>
              </button>
              <Disclosure.Panel className="flex justify-between p-6 text-sm font-bold text-original-black border-x border-b border-black" />
              <Disclosure.Panel className="flex justify-between p-6 text-sm font-bold text-original-black border-x border-b border-black" />
              <Disclosure.Panel className="flex justify-between p-6 text-sm font-bold text-original-black border-x border-b border-black" />
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
