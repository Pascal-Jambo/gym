import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/enum";
import useMediaQuery from "@/hooks/useMediaQuerry";
import ActionButton from "@/shared/ActionButton";

type Props = {
    isTopPage:boolean;
  selectedPage: SelectedPage;
  setSelected: (value: SelectedPage) => void;
};

const NavBar = ({  isTopPage,selectedPage, setSelected }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediaScreens = useMediaQuery("(min-width:1060px)");
  const [isMenuToggled, setMenuToggled] = useState<boolean>(false);
  const navBarBackground=isTopPage?"":"bg-primary-100 drop-shadow"
  return (
    <nav>
      <div className={`${navBarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="logo" />
            {/* rightsise */}
            {isAboveMediaScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelected={setSelected}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelected={setSelected}
                  />

                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelected={setSelected}
                  />

                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelected={setSelected}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign in</p>
                  <ActionButton setSelected={setSelected}>
                    Become a member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* MOBILE MENU MODAL */}
      {!isAboveMediaScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 h-full z-40 w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* MENU ITEMS */}
          <div className="flex flex-col items-center gap-8 text-xl">
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelected={setSelected}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelected={setSelected}
                  />

                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelected={setSelected}
                  />

                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelected={setSelected}
                  />
                </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
