'use client';

import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Disclosure, DisclosureButton, DisclosurePanel } from "@/components/custom-disclosure";

export default function DisclosureNode() {

  return (
    <>
      <Disclosure defaultOpen={true}>
        {({ open, setOpen }) => (
          <>
            <DisclosureButton setOpen={setOpen} className="group flex w-full items-center justify-between hover:underline hover:opacity-70">
              <span className="py-2 text-sm/6 font-semibold">Animals</span>
              <ChevronRightIcon className={`size-5 ${open && 'rotate-90'}`}/>
            </DisclosureButton>
            <DisclosurePanel open={open} className="py-1 pl-6 pr-4 text-sm/5 border-l border-gray-300 dark:border-gray-700">
              <Disclosure defaultOpen={true}>
                {({ open, setOpen }) => (
                  <>
                    <DisclosureButton setOpen={setOpen} className="group flex w-full items-center justify-between hover:underline hover:opacity-70">
                      <span className="py-2 text-sm/6 font-semibold">Mammals</span>
                      <ChevronRightIcon className={`size-5 ${open && 'rotate-90'}`}/>
                    </DisclosureButton>
                    <DisclosurePanel open={open} className="py-1 pl-6 pr-4 text-sm/5 border-l border-gray-300 dark:border-gray-700">
                      <Disclosure defaultOpen={true}>
                        {({ open, setOpen }) => (
                          <>
                            <DisclosureButton setOpen={setOpen} className="group flex w-full items-center justify-between hover:underline hover:opacity-70">
                              <span className="py-2 text-sm/6 font-semibold">Dog</span>
                              <ChevronRightIcon className={`size-5 ${open && 'rotate-90'}`}/>
                            </DisclosureButton>
                            <DisclosurePanel open={open} className="p-2">
                              <ul>
                                <li>- Siberian Husky</li>
                                <li>- Saint Bernard</li>
                                <li>- Border Collie</li>
                                <li>- Golden Retriever</li>
                                <li>- Beagle</li>
                                <li>- Bull Terrier</li>
                              </ul>
                            </DisclosurePanel>
                          </>
                        )}
                      </Disclosure>
                      <Disclosure defaultOpen={true}>
                        {({ open, setOpen }) => (
                          <>
                            <DisclosureButton setOpen={setOpen} className="group flex w-full items-center justify-between hover:underline hover:opacity-70">
                              <span className="py-2 text-sm/6 font-semibold">Cat</span>
                              <ChevronRightIcon className={`size-5 ${open && 'rotate-90'}`}/>
                            </DisclosureButton>
                            <DisclosurePanel open={open} className="p-2">
                              <ul>
                                  <li>- Persian</li>
                                  <li>- Maine Coon</li>
                                  <li>- British Shorthair</li>
                                  <li>- Siamese</li>
                                  <li>- Oriental Shorthair</li>
                                  <li>- Russian Blue</li>
                                </ul>
                            </DisclosurePanel>
                          </>
                        )}
                      </Disclosure>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
              <Disclosure defaultOpen={true}>
                {({ open, setOpen }) => (
                  <>
                    <DisclosureButton setOpen={setOpen} className="group flex w-full items-center justify-between hover:underline hover:opacity-70">
                      <span className="py-2 text-sm/6 font-semibold">Birds</span>
                      <ChevronRightIcon className={`size-5 ${open && 'rotate-90'}`}/>
                    </DisclosureButton>
                    <DisclosurePanel open={open} className="py-1 pl-6 pr-4 text-sm/5 border-l border-gray-300 dark:border-gray-700">
                      <Disclosure defaultOpen={true}>
                        {({ open, setOpen }) => (
                          <>
                            <DisclosureButton setOpen={setOpen} className="group flex w-full items-center justify-between hover:underline hover:opacity-70">
                              <span className="py-2 text-sm/6 font-semibold">Pigeon</span>
                              <ChevronRightIcon className={`size-5 ${open && 'rotate-90'}`}/>
                            </DisclosureButton>
                            <DisclosurePanel open={open} className="p-2">
                              <ul>
                                <li>- Rock Pigeon</li>
                                <li>- King Pigeon</li>
                                <li>- Homers</li>
                                <li>- Tumbler Pigeon</li>
                                <li>- Fantail Pigeon</li>
                                <li>- Barb Pigeon</li>
                              </ul>
                            </DisclosurePanel>
                          </>
                        )}
                      </Disclosure>
                      <Disclosure defaultOpen={true}>
                        {({ open, setOpen }) => (
                          <>
                            <DisclosureButton setOpen={setOpen} className="group flex w-full items-center justify-between hover:underline hover:opacity-70">
                              <span className="py-2 text-sm/6 font-semibold">Chicken</span>
                              <ChevronRightIcon className={`size-5 ${open && 'rotate-90'}`}/>
                            </DisclosureButton>
                            <DisclosurePanel open={open} className="p-2">
                              <ul>
                                <li>- Leghorn</li>
                                <li>- Rhode Island Red</li>
                                <li>- Silkie</li>
                                <li>- Plymouth Rock</li>
                                <li>- Orpington</li>
                                <li>- Sussex</li>
                              </ul>
                            </DisclosurePanel>
                          </>
                        )}
                      </Disclosure>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </>
  );
}
