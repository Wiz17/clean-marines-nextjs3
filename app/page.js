"use client";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import KeenSlider from "keen-slider";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "@/app/css/page.css";
const Home = () => {
  const router = useRouter();
  console.log(router);
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
  return (
    <>
      <div
        style={{
          height: "100vh",

          // backgroundImage: ` url('https://img.freepik.com/premium-photo/bottle-ocean-is-floating-water_889056-1979.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
          padding: "20px",
        }}
      >
        <div className="z-50 absolute bottom-10 bg-blue-800 bg-opacity-75 p-10 border-8 border-rose-600 rounded-md text-white max-[560px]:w-11/12">
          <Link
            href={"/"}
            className="text-6xl text-center max-[560px]:text-4xl max-[560px]:font-semibold hover:underline"
          >
            Donate Today!
          </Link>

          <p className="text-xl mt-3">Contribute to keeping our seas clean..</p>
        </div>
        <video
          src="/turtle_swimming_desktop.mp4"
          autoPlay
          muted
          loop
          preload
          style={{
            width: "100%", // Ensures the video takes up the entire width of the div
            height: "100%", // Ensures the video takes up the entire height of the div
            objectFit: "cover", // Ensures the video covers the entire space without distortion
            position: "absolute", // Positions the video relative to the div
            top: 0, // Aligns the video to the top of the div
            left: 0, // Aligns the video to the left of the div
          }}
        ></video>
      </div>

      <div
      // style={{ padding: "20px 20px" }}
      // className="  bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"
      >
        <div style={{}}>
          <div
            // style={{

            //   marginTop: "40px",
            // }}
            className="body-video-box py-10 px-5 "
          >
            <video
              autoPlay
              muted
              loop
              preload
              style={{ borderRadius: "15px" }}
              className="body-video-player"
            >
              <source
                src="https://assets.theoceancleanup.com/app/uploads/2022/05/donate-video-new-600.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="body-video-player-text">
              <div>
                <div
                  style={{
                    fontWeight: "700",
                    fontSize: "30px",

                    color: "#3d52a0",
                  }}
                >
                  10000T OF
                </div>{" "}
                <div
                  style={{
                    fontSize: "30px",
                    fontWeight: "400",
                    color: "#3d52a0",
                  }}
                >
                  FLOATING PLASTIC
                </div>
              </div>
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: "400",
                  color: "#3d52a0",
                }}
              >
                CLEANED TILL STARTING
              </div>
              <div style={{
                  fontSize: "30px",
                  fontWeight: "400",
                  color: "#3d52a0",
                }}> OF 2024!!</div>
              <p>
                With your help, we can work towards a future where plastic no
                longer pollutes our oceans. This is possible by cleaning up what
                is already out there, and stopping plastic on its way to the
                ocean via rivers. We are currently cleaning up in the Great
                Pacific Garbage Patch, as well as working on more river
                Interceptor deployments in some of the world’s most polluted
                rivers.
              </p>
            </div>
          </div>

          <div
            style={{ backgroundColor: "#b8c7ff" }}
            className="h-1 body-line"
          ></div>

          <div className="body-carousel-box py-10 px-5">
            <div className="body-carousel-box-text">
              <span
                style={{
                  fontWeight: "100",
                  fontSize: "30px",
                  color: "#3d52a0",
                }}
              >
                CLEAN
              </span>
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "30px",
                  color: "#3d52a0",
                }}
              >
                MARINES
              </span>{" "}
              is a leading international ocean conservation non-profit that does
              good in the world. Our mission is to keep the oceans clean and
              repair marine ecosystems, allowing nature and people to thrive. We
              help keep the oceans clean with cleanup initiatives, create
              educational resources for schools, send out cleanup equipment to
              community groups, research ocean pollution and raise awareness for
              clean oceans.
            </div>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 body-carousel-box-content">
              <Carousel>
                <img
                  src="https://assets.newatlas.com/dims4/default/0399deb/2147483647/strip/true/crop/4032x3024+0+0/resize/2880x2160!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Fde%2F09%2Ff6a5b08d4d5f91594324bdf4270f%2F221110-the-ocean-cleanup-interceptor-007-ballona-creek-1.jpg"
                  alt="..."
                />
                <img
                  src="https://assets.theoceancleanup.com/app/uploads/2020/01/1911-The-Ocean-Cleanup-BoyaninAsia-DvdK-1111149-960x640.jpg"
                  alt="..."
                />
                <img
                  src="https://assets.theoceancleanup.com/app/uploads/2019/10/TheOceanCleanup_October2nd_Press_Briefing_System001B-24.jpg"
                  alt="..."
                />
                <img
                  src="https://metro.co.uk/wp-content/uploads/2019/05/SEI_69908392.jpg?quality=90&strip=all&zoom=1&resize=480%2C320"
                  alt="..."
                />
                <img
                  src="https://www.telegraph.co.uk/content/dam/business/spark/PandG-plastics/turtle-eating-plastic.jpg?imwidth=680"
                  alt="..."
                />
                {/* <Image
                  src="https://assets.newatlas.com/dims4/default/0399deb/2147483647/strip/true/crop/4032x3024+0+0/resize/2880x2160!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Fde%2F09%2Ff6a5b08d4d5f91594324bdf4270f%2F221110-the-ocean-cleanup-interceptor-007-ballona-creek-1.jpg"
                  alt="..."
                  width={500}
      height={500}
                />
                <Image
                  src="https://assets.theoceancleanup.com/app/uploads/2020/01/1911-The-Ocean-Cleanup-BoyaninAsia-DvdK-1111149-960x640.jpg"
                  alt="..."
                  width={500}
      height={500}
                />
                <Image
                  src="https://assets.theoceancleanup.com/app/uploads/2019/10/TheOceanCleanup_October2nd_Press_Briefing_System001B-24.jpg"
                  alt="..."
                  width={500}
      height={500}
                />
                <Image
                  src="https://metro.co.uk/wp-content/uploads/2019/05/SEI_69908392.jpg?quality=90&strip=all&zoom=1&resize=480%2C320"
                  alt="..."
                  width={500}
      height={500}
                />
                <Image
                  src="https://www.telegraph.co.uk/content/dam/business/spark/PandG-plastics/turtle-eating-plastic.jpg?imwidth=680"
                  alt="..."
                  width={500}
      height={500}
                /> */}
              </Carousel>
            </div>
          </div>

          <link
            href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css"
            rel="stylesheet"
          />

          <section className="">
            <div class="custom-shape-divider-bottom-1718248150">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                  opacity=".25"
                  class="shape-fill"
                ></path>
                <path
                  d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                  opacity=".5"
                  class="shape-fill"
                ></path>
                <path
                  d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                  class="shape-fill"
                ></path>
              </svg>
            </div>
            <div className=" bg-sky-100 ">
              <div style={{ color: "#3d52a0" }} className="py-10 ">
                <p
                  style={{
                    fontWeight: "30",
                    marginBottom: "0.5rem",
                    // fontSize: "30px",
                    textAlign: "center",
                  }}
                  className="max-[600px]:text-2xl min-[601px]:text-4xl my-2"
                >
                  Join The Cleanup
                </p>
                <p
                  style={{ textAlign: "center" }}
                  className="max-[600px]:text-3xl min-[601px]:text-4xl  my-2"
                >
                  YOU CAN HELP RID
                </p>
                <p
                  style={{
                    marginBottom: "2rem",
                    // fontSize: "40px",
                    textAlign: "center",
                  }}
                  className="max-[600px]:text-3xl min-[601px]:text-4xl  my-2"
                >
                  THE OCEANS OF PLASTIC !!
                </p>

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Donate
                  </button>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div class="custom-shape-divider-top-1718213422">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                  opacity=".25"
                  class="shape-fill"
                ></path>
                <path
                  d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                  opacity=".5"
                  class="shape-fill"
                ></path>
                <path
                  d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                  class="shape-fill"
                ></path>
              </svg>
            </div>
            <div className="mx-auto px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
              <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
                <h2
                  className=""
                  style={{
                    fontWeight: "600",
                    fontSize: "30px",
                    color: "#3d52a0",
                  }}
                >
                  WHAT OUR CREW SAYING!!
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
                  <div className="keen-slider__slide">
                    <blockquote className="flex h-full flex-col justify-between bg-slate-50 p-6 shadow-sm sm:p-8 lg:p-12">
                      <div>
                        <div className="mt-4">
                          <p className="text-2xl font-bold font-normal text-blue-800 sm:text-3xl">
                            Stayin Alive
                          </p>

                          <p className="mt-4 leading-relaxed text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Rem, consequuntur eius ex blanditiis
                            consectetur ad molestiae cumque mollitia nemo ut?
                          </p>
                        </div>
                      </div>

                      <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                        &mdash; Michael Scott
                      </footer>
                    </blockquote>
                  </div>

                  <div className="keen-slider__slide">
                    <blockquote className="flex h-full flex-col justify-between bg-slate-50 p-6 shadow-sm sm:p-8 lg:p-12">
                      <div>
                        <div className="mt-4">
                          <p className="text-2xl font-bold font-normal text-blue-800 sm:text-3xl">
                            Still lots of work remained!
                          </p>

                          <p className="mt-4 leading-relaxed text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Velit praesentium eaque magni doloribus magnam
                            repellat, eveniet consectetur dolore ipsam maiores
                            nemo nulla excepturi dolor ab sequi numquam rerum
                            unde esse voluptatum debitis? Delectus nobis
                            deleniti eius reiciendis, voluptatum voluptas
                            commodi?
                          </p>
                        </div>
                      </div>

                      <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                        &mdash; Emillie Pots
                      </footer>
                    </blockquote>
                  </div>

                  <div className="keen-slider__slide">
                    <blockquote className="flex h-full flex-col justify-between bg-slate-50 p-6 shadow-sm sm:p-8 lg:p-12">
                      <div>
                        <div className="mt-4">
                          <p className="text-2xl font-bold font-normal text-blue-800 sm:text-3xl">
                            On Mission
                          </p>

                          <p className="mt-4 leading-relaxed text-gray-700">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat culpa numquam nesciunt dolorum illo
                            totam explicabo adipisci quasi officia, possimus
                            impedit vero illum quod veritatis distinctio
                            architecto delectus magni, quas voluptatibus ab
                            facilis commodi labore? Exercitationem molestias
                            illum iste? Praesentium vero fugiat itaque
                            asperiores architecto culpa temporibus deserunt,
                            possimus cumque.
                          </p>
                        </div>
                      </div>

                      <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                        &mdash; Jonathan K.
                      </footer>
                    </blockquote>
                  </div>
                  <div className="keen-slider__slide">
                    <blockquote className="flex h-full flex-col justify-between bg-slate-50 p-6 shadow-sm sm:p-8 lg:p-12">
                      <div>
                        <div className="mt-4">
                          <p className="text-2xl font-bold font-normal text-blue-800 sm:text-3xl">
                            Clean Planet Mission
                          </p>

                          <p className="mt-4 leading-relaxed text-gray-700">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Iure, praesentium.
                          </p>
                        </div>
                      </div>

                      <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                        &mdash; Sia Novan.
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
