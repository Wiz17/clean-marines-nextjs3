"use client";
import Image from "next/image";
import Link from "next/link";
import { Button, Drawer } from "flowbite-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(8, 2, 45, 0.6)",
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src={
              "https://i.pinimg.com/736x/05/60/e3/0560e34b4c5711e10ca17dae6f24db4a.jpg"
            }
            width={40}
            height={50}
          ></Image>
          <p style={{ color: "white", fontSize: "22px" }}>
            <span style={{ fontWeight: "1" }}>Clean</span>
            <span style={{ fontWeight: "500" }}>Marines</span>
          </p>
        </div>
        <div className="flex items-center">
          <div className="max-[699px]:hidden">
            <Link href={"/aboutus"} className="text-white text-xl">
              About us
            </Link>
            <Link href={"/blog"} className="mx-7 text-white text-xl">
              Blog
            </Link>
          </div>
          <Link href={"/login"} className="mt-2">
            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Donate
            </button>
          </Link>
          <svg
            onClick={() => setIsOpen(true)}
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="35"
            height="35"
            viewBox="0 0 50 50"
            className="mx-2 min-[700px]:hidden cursor-pointer"
          >
            <path
              d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"
              style={{ fill: "white" }}
            ></path>
          </svg>
        </div>

        <Drawer open={isOpen} onClose={handleClose}>
          
          <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src={
              "https://i.pinimg.com/736x/05/60/e3/0560e34b4c5711e10ca17dae6f24db4a.jpg"
            }
            width={40}
            height={50}
          ></Image>
          <p style={{ color: "#3d52a0", fontSize: "22px" }} className="ml-2">
            <span style={{ fontWeight: "1" }}>Clean</span>
            <span style={{ fontWeight: "500" }}>Marines</span>
          </p>
        </div>
          <Drawer.Items>
            <div className="mt-10" >
              <p className="text-black hover:text-indigo-700 text-center text-xl my-3"><Link href={"/aboutus"} >About us</Link></p>
              <p className="text-black hover:text-indigo-700 text-center text-xl my-3"><Link href={"/blog"} >Blog</Link></p>
            </div>
            {/* <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
              Supercharge your hiring by taking advantage of our&nbsp;
              <a
                href="#"
                className="text-cyan-600 underline hover:no-underline dark:text-cyan-500"
              >
                limited-time sale
              </a>
              &nbsp;for Flowbite Docs + Job Board. Unlimited access to over 190K
              top-ranked candidates and the #1 design job board.
            </p> */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* <a
                href="#"
                className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                Learn more
              </a> */}
              <Link
                href={"/login"}
                // className="inline-flex items-center rounded-lg bg-sky-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                <button
                class="text-white w-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 my-5"
              >
                Login
              </button>
              </Link>
            </div>
          </Drawer.Items>
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
