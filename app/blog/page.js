"use client";
import KeenSlider from "keen-slider";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "@/app/css/page.css";
import BlogCard from "@/components/BlogCard";
const Page1 = () => {
  const arr = [1, 2, 3, 4];
  const keenSliderRef = useRef(null);

  useEffect(() => {
    keenSliderRef.current = new KeenSlider(
      "#keen-slider",
      {
        loop: true,
        slides: {
          origin: "center",
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 2.5,
              spacing: 32,
            },
          },
        },
      },
      []
    );
  }, []);

  const onNextClick = () => {
    keenSliderRef.current.next();
  };
  const onPrevClick = () => {
    keenSliderRef.current.prev();
  };

  const [blogs, setBlogs] = useState([]);
  const [blogArray1, setBlogArray1] = useState([]);
  const [blogArray2, setBlogArray2] = useState([]);
  const [blogArray3, setBlogArray3] = useState([]);
  const [blogArray4, setBlogArray4] = useState([]);
  const [blogArray5, setBlogArray5] = useState([]);
  const [loader, setLoader] = useState(false)
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoader(true);
      const response = await fetch("/blogData.json");
      const data = await response.json();
      console.log(data);
      setBlogArray1(data.slice(0, 2));
      setBlogArray2(data.slice(2, 3));
      setBlogArray3(data.slice(3, 5));
      setBlogArray4(data.slice(5, 10));
      setBlogArray5(data.slice(0 , 5));
      setBlogs(false);
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <div className="">
        <p
          className="mt-24 text-center font-extrabold text-5xl max-[770px]:text-4xl"
          style={{ color: "#3d52a0" }}
        >
          BLOGS
        </p>
        <div className="w-full min-[771px]:flex">
          {!loader && (
            <div className="flex justify-center w-full">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
                alt=""
              />
            </div>
          )}
          <div className="w-3/12 max-[770px]:hidden">
            {blogArray1.map((e, index) => {
              // console.log(e.name);
              return <BlogCard key={index} props={e} />;
            })}
          </div>
          <div className="w-6/12 justify-center max-[770px]:w-full max-[770px]:hidden">
            {blogArray2.map((e, index) => {
              return <BlogCard key={index} props={e} />;
            })}
          </div>
          <div className="w-6/12 justify-center max-[770px]:w-full min-[771px]:hidden">
            {blogArray5.map((e, index) => {
              return <BlogCard key={index} props={e} />;
            })}
          </div>
          <div className="w-3/12 max-[770px]:hidden">
            {blogArray3.map((e, index) => {
              return <BlogCard key={index} props={e} />;
            })}
          </div>
        </div>

        <div>
          <link
            href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css"
            rel="stylesheet"
          />
          <div className="mx-auto px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-12 bg-sky-100">
            <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
              <h2
                className=""
                style={{
                  fontWeight: "600",
                  fontSize: "30px",
                  color: "#3d52a0",
                }}
              >
                SEE MORE!!
              </h2>

              <div className="mt-8 flex gap-4 lg:mt-0">
                <button
                  aria-label="Previous slide"
                  id="keen-slider-previous"
                  className="rounded-full border border-blue-800 p-3 text-blue-800 transition hover:bg-blue-800 hover:text-white"
                  onClick={onPrevClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 rtl:rotate-180"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>

                <button
                  aria-label="Next slide"
                  id="keen-slider-next"
                  className="rounded-full border border-blue-800 p-3 text-blue-800 transition hover:bg-blue-800 hover:text-white"
                  onClick={onNextClick}
                >
                  <svg
                    className="size-5 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-8 lg:col-span-2 lg:mx-0">
              <div id="keen-slider" className="keen-slider">
                {/* <div className="keen-slider__slide">
                    
                  <BlogCard />
                </div>
                <div className="keen-slider__slide">
                    
                  <BlogCard />
                </div> */}

                {blogArray4.map((e, index) => {
                  return (
                    <>
                      <div className="keen-slider__slide">
                        <BlogCard key={index} props={e} />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
