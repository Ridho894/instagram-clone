import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

function ModalLogout({ open, close, handleLogout }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className={"fixed z-10 inset-0 overflow-y-auto"}
        onClose={close}
      >
        <div
          className={
            "flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-48 text-center sm:block sm:p-0"
          }
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay
              className={
                "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              }
            />
          </Transition.Child>
          {/* trick to browser centering the modal contents */}
          <span
            className={"hidden sm:inline-block sm:align-middle sm:h-screen"}
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className={
                "inline-block space-y-8 align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
              }
            >
              <p className={"text-center font-bold"}>Are you sure?</p>
              <div className={"flex flex-row justify-between"}>
                <button
                  onClick={close}
                  className={
                    "bg-black text-white hover:bg-white hover:text-black hover:border-black border-2 p-2 rounded-full w-28"
                  }
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogout}
                  className={
                    "bg-white text-black border-2 border-black hover:bg-black hover:text-white p-2 rounded-full w-28"
                  }
                >
                  Yes
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default ModalLogout;
