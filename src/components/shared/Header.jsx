import {
  Popover,
  PopoverButton,
  Transition,
  PopoverPanel,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/react";
import classNames from "classnames";
import React, { Fragment, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { HiOutlineChatAlt, HiOutlineBell } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  //function to generate random photo from unsplash using unsplash api..
  // const getRandomPhoto = () => {
  //   fetch(
  //     "https://api.unsplash.com/photos/random?query=admin&client_id=it56l71a2O8Nq64kB9QeuLmWhZ8G0m_0T7A-zpj1qM8"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => console.log("image", data["urls"]["regular"]));
  // };
  // useEffect(() => {
  //   getRandomPhoto();
  // }, []);
  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center py-2">
      <div className="rounded-sm shadow-sm w-2/5 border  border-black/10 relative px-2">
        <FaSearch
          fontSize={17}
          className="absolute top-1/2 -translate-y-1/2 left-3 text-neutral-500"
        />
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 h-10  text-md w-[90%] focus:outline-none active:outline-none"
        />
      </div>
      <div className="flex items-center gap-2 mr-2">
        <Popover className="relative">
          {({ open }) => (
            <>
              <PopoverButton
                className={classNames(
                  open && "bg-gray-100",
                  "inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100 p-2 rounded-full"
                )}
              >
                <HiOutlineChatAlt fontSize={24} />
              </PopoverButton>
              <Transition
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <PopoverPanel
                  // anchor="bottom"
                  className="absolute right-0 mt-2.5 w-80 z-10 "
                >
                  <div className="bg-white rounded-sm shadow-md  p-2 ring-1 ring-black ring-opacity-5">
                    <strong className="text-gray-700">Messages</strong>
                    <div className="py-1 mt-1 text-sm text-gray-500">
                      This is message panel
                    </div>
                  </div>
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
        <Popover className="relative">
          {({ open }) => (
            <>
              <PopoverButton
                className={classNames(
                  open && "bg-gray-100",
                  "inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100 p-2 rounded-full"
                )}
              >
                <HiOutlineBell fontSize={24} />
              </PopoverButton>
              <Transition
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <PopoverPanel
                  // anchor="bottom"
                  className="absolute right-0 mt-2.5 w-80 z-10 "
                >
                  <div className="bg-white rounded-sm shadow-md  p-2 ring-1 ring-black ring-opacity-5">
                    <strong className="text-gray-700">Notifications</strong>
                    <div className="py-1 mt-1 text-sm text-gray-500">
                      This is notification panel.
                    </div>
                  </div>
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
        <Menu as="div" className="relative">
          <div>
            <MenuButton className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
              <span className="sr-only">Open user menu</span>
              <div
                className="h-10 w-10 rounded-full bg-cover bg-no-repeat bg-center bg-sky-500"
                style={{
                  //dummy photo from unsplash
                  backgroundImage:
                    'url("https://media.istockphoto.com/id/1338134319/photo/portrait-of-young-indian-businesswoman-or-school-teacher-pose-indoors.jpg?s=1024x1024&w=is&k=20&c=0yUW1VuW3FizTDgdlHL4zp5Od5X9JCdMJyCXp2WTPx8=")',
                }}
              >
                <span className="sr-only">Shreya Chatterjee</span>
              </div>
            </MenuButton>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-75"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <MenuItems className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <MenuItem>
                {({ active }) => (
                  <div
                    onClick={() => navigate("/profile")}
                    className={classNames(
                      active && "bg-gray-100",
                      "text-gray-700 focus:bg-gray-200 rounded-sm px-4 py-2 cursor-pointer"
                    )}
                  >
                    Your Profile
                  </div>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <div
                    onClick={() => navigate("/settings")}
                    className={classNames(
                      active && "bg-gray-100",
                      "text-gray-700 focus:bg-gray-200 rounded-sm px-4 py-2 cursor-pointer"
                    )}
                  >
                    Settings
                  </div>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <div
                    // onClick={() => logoutHandler()}// for later use
                    className={classNames(
                      active && "bg-gray-100",
                      "text-gray-700 focus:bg-gray-200 rounded-sm px-4 py-2 cursor-pointer"
                    )}
                  >
                    Sign Out
                  </div>
                )}
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
