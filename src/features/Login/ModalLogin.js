import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { googleProvider, auth } from '../../services/firebase';
import { useDispatch } from 'react-redux';
import { setUser } from './LoginSlice';
export default function ModalLogin({ openModalLogIn, setOpenModalLogIn }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);
  const loginWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        console.log(result);
        dispatch(setUser(result));
        // setUser(result.user);
        setOpenModalLogIn(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Transition.Root show={openModalLogIn} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
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
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex justify-end">
                    {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 cursor-pointer hover:text-black translate-y-[-12px] translate-x-[12px]"
                      onClick={() => setOpenModalLogIn(false)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
                <section className="items-center">
                  <div className="text-gray-800">
                    <div className="flex justify-center xl:justify-center justify-center items-center">
                      <div className="xl:w-[80%] min-w-[80%] lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <form>
                          <div className="items-center">
                            <p className="text-lg mb-0 text-center font-bold text-[24px]">
                              Sign in with
                            </p>
                          </div>
                          <div className="flex justify-center items-center mt-[5px]">
                            <button
                              type="button"
                              data-mdb-ripple="true"
                              data-mdb-ripple-color="light"
                              onClick={loginWithGoogle}
                              className="p-3 bg-blue-600 text-white font-medium text-xs uppercase rounded-[10px] shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                            >
                              <svg
                                class="h-8 w-8 text-white"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M17.788 5.108A9 9 0 1021 12h-8" />
                              </svg>
                            </button>
                          </div>
                          <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                            <p className="text-center font-semibold mx-4 mb-0">
                              Or
                            </p>
                          </div>

                          <div className="mb-6">
                            <input
                              type="text"
                              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="exampleFormControlInput2"
                              placeholder="Email address"
                            />
                          </div>

                          <div className="mb-6">
                            <input
                              type="password"
                              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="exampleFormControlInput2"
                              placeholder="Password"
                            />
                          </div>

                          <div className="flex justify-between items-center mb-6">
                            <div className="form-group form-check">
                              <input
                                type="checkbox"
                                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                id="exampleCheck2"
                              />
                              <label
                                className="form-check-label inline-block text-gray-800"
                                for="exampleCheck2"
                              >
                                Remember me
                              </label>
                            </div>
                            <a href="#!" className="text-blue-800">
                              Forgot password?
                            </a>
                          </div>

                          <div className="text-center p-[10px]">
                            <button
                              type="button"
                              className="inline-block w-[70%] px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                              Login
                            </button>
                            <p className="text-sm font-semibold mt-2 mr-[10px] pt-1 mb-0">
                              Don't have an account?
                              <a
                                href="#!"
                                className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out ml-[10px]"
                              >
                                Register
                              </a>
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
