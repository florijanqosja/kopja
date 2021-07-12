import { useState } from "react";
import { useHistory } from "react-router";
import PopOver from "./ButtonPopOver";
import SideMenu from "./SideMenu";

const Header = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="py-5 lg:py-10 px-6 lg:px-16 flex justify-between bg-yellow-500">
        <div className="flex justify-center md:justify-start md:w-1/4 w-full lg:ml-0 lg:pb-0 lg:pr-0 md:pr-5">
          <div className="w-full lg:text-3xl text-2xl font-extrabold py-2 cursor-pointer filter hover:drop-shadow-2xl transition ease-linear duration-200">
            Agon
          </div>

          <div className="flex md:hidden w-1/2 justify-end">
            <button className="-mr-3 -mb-4" onClick={() => setShow(true)}>
              Open
            </button>
          </div>
        </div>
        <div className="hidden md:flex justify-center xl:max-w-xl lg:w-1/2 items-center">
          <input
            classContainer="rounded-xl flex w-full focus-within:border-gray-300"
            classSearch="flex md:pl-3 w-full"
            classDropdwon="z-50"
          />
        </div>
        <div className="hidden md:flex justify-end md:w-1/4 lg:mr-0 items-center">
          <div className="flex justify-around">
            <PopOver />

            <button className="rounded relative px-2 py-2 hover:shadow-md transition-all ease-linear duration-300" />
          </div>
        </div>
      </div>
      <SideMenu show={show} setShow={setShow} wrapperClass="sm:w-3/4 w-full">
        <div className="relative w-full bg-white shadow-xl">
          <div className="absolute top-0 right-0 px-2 pb-2 flex">
            <button className="pr-2 pt-5" onClick={() => setShow(false)}>
              Close
            </button>
          </div>
          <div className="h-full flex flex-col py-3 overflow-y-scroll w-11/12 mx-auto">
            <div className="px-4 mb-6">
              <div className="mb-6"></div>
            </div>
            <div className="flex w-full flex-col items-start px-2">
              <div className="flex justify-center self-center py-3 md:w-3/4 w-full">
                <div>Test</div>
              </div>
              <div className=" z-20">
                <button
                  className="rounded py-2 border-2 border-transparent hover:border-gray-600 hover:shadow-md transition-all ease-linear duration-300 pr-3"
                  onClick={() => {
                    history.push("/profile");
                    setShow(!show);
                  }}
                />
              </div>
              <div className="sm:-mr-1  z-20">
                <button
                  className="rounded py-2 border-2 border-transparent hover:border-gray-600 hover:shadow-md transition-all ease-linear duration-300 pr-3"
                  onClick={() => {
                    setShow(!show);
                  }}
                />
              </div>
              <div className="sm:-mr-1 z-20">
                <button
                  className="rounded py-2 border-2 border-transparent hover:border-gray-600 hover:shadow-md transition-all ease-linear duration-300 pr-3"
                  onClick={() => {
                    history.push("/account");
                    setShow(!show);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </SideMenu>
    </>
  );
};
export default Header;
