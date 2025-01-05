'use client';

import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Disclosure, DisclosureButton, DisclosurePanel } from "@/components/disclosure";

const buttonStyle = 'flex w-full items-center justify-between hover:underline hover:opacity-70';
const pannelStyle = 'py-1 pl-6 pr-4 text-sm/6 border-l border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300';
const titleStyle = 'py-2 font-meduim text-gray-900 dark:text-gray-100 text-lg';

export default function DisclosureNode() {

  return (
    <Disclosure defaultOpen={true}>
      {({ open, setOpen }) => (
        <>
          <DisclosureButton setOpen={setOpen} className={buttonStyle}>
            <span className={titleStyle}>Animals</span>
            <ChevronRightIcon className={`size-5 ${open && 'rotate-90'}`}/>
          </DisclosureButton>
          <DisclosurePanel open={open} className={pannelStyle}>
            <Disclosure defaultOpen={true}>
              {({ open, setOpen }) => (
                <>
                  <DisclosureButton setOpen={setOpen} className={buttonStyle}>
                    <span className={titleStyle}>Mammals</span>
                    <ChevronRightIcon className={`size-5 ${open && 'rotate-90'}`}/>
                  </DisclosureButton>
                  <DisclosurePanel open={open} className={pannelStyle}>
                    <Disclosure defaultOpen={true}>
                      {({ open, setOpen }) => (
                        <>
                          <DisclosureButton setOpen={setOpen} className={buttonStyle}>
                            <span className={titleStyle}>Dog</span>
                            <ChevronRightIcon className={`size-5 ${open && 'rotate-90'}`}/>
                          </DisclosureButton>
                          <DisclosurePanel open={open} className="px-4">
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
                          <DisclosureButton setOpen={setOpen} className={buttonStyle}>
                            <span className={titleStyle}>Cat</span>
                            <ChevronRightIcon className={`size-5 ${open && 'rotate-90'}`}/>
                          </DisclosureButton>
                          <DisclosurePanel open={open} className="px-4">
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
                  <DisclosureButton setOpen={setOpen} className={buttonStyle}>
                    <span className={titleStyle}>Birds</span>
                    <ChevronRightIcon className={`size-5 ${open && 'rotate-90'}`}/>
                  </DisclosureButton>
                  <DisclosurePanel open={open} className={pannelStyle}>
                    <Disclosure defaultOpen={true}>
                      {({ open, setOpen }) => (
                        <>
                          <DisclosureButton setOpen={setOpen} className={buttonStyle}>
                            <span className={titleStyle}>Pigeon</span>
                            <ChevronRightIcon className={`size-5 ${open && 'rotate-90'}`}/>
                          </DisclosureButton>
                          <DisclosurePanel open={open} className="px-4">
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
                          <DisclosureButton setOpen={setOpen} className={buttonStyle}>
                            <span className={titleStyle}>Chicken</span>
                            <ChevronRightIcon className={`size-5 ${open && 'rotate-90'}`}/>
                          </DisclosureButton>
                          <DisclosurePanel open={open} className="px-4">
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
  );
}
