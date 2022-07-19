import React from 'react'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Services', href: '#' },
  { name: 'About', href: '#' },
  { name: 'FAQ', href: '#' },
  { name: 'Contact', href: '#' },
]

export default function Navbar() {
  return (
    <Popover className="absolute w-full top-0 z-50 scroll-smooth">
    <div className="relative pt-6 px-4 sm:px-6 lg:px-16">
      <nav
        className="relative flex items-center justify-between sm:h-10 lg:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center  w-full md:w-auto">
            <a href="/">
              <span className="sr-only">Workflow</span>
              <img
                alt="logo"
                className="h-8 ml-2 w-auto lg:ml-8 lg:h-20"
                src="/img/aloha_training.png"
              />
            </a>
          </div>
          <div className="mr-2 flex items-center md:hidden">
            <Popover.Button className="mr-2 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-white">
              <span className="sr-only ">Open main menu</span>
              <MenuIcon className="h-6 w-6 " aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
        <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 md:text-1xl lg:text-2xl">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-white hover:underline hover:underline-offset-4 hover:decoration-4 hover:lg:underline-offset-8"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </div>
    <Transition
      as={Fragment}
      enter=" duration-150 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        static
        className="z-10 top-0 inset-x-0 bg-white p-2 transition transform origin-top-right md:hidden sticky"
      >
        <div className="rounded-lg shadow-md bg-white ring-1 ring-white ring-opacity-5 overflow-hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 ">
            {navigation.map((item) => (
              <Popover.Button key={item.name} className="flex w-full justify-start">
              <a
                
                href={item.href}
                className="text-black block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-[#313AAD] w-full"
              >
                {item.name}
              </a>
              </Popover.Button>
            ))}
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>
  )
}
