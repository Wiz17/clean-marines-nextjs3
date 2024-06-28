"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "@/app/css/dynamicRouter.css";

const Page1 = () => {
  const param = useParams();
  const [blogData, setBlogData] = useState({
    image:
      "https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq",

    name: "",
    content: [],
    author: {
      photo: "",
      name: "",
      qualification: "",
    },
  });
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("/blogData.json");
      const data = await response.json();

      const filteredData = data.find((item) => {
        return (
          item.name
            .trim()
            .replace(/\s+/g, "-")
            .replace(/[^a-zA-Z0-9\-]/g, "") === param.slug
        );
      });
      console.log(filteredData.image);

      setBlogData(filteredData);
    };
    // console.log(blogData);

    fetchBlogs();
  }, []);
  return (
    <>
      {/* <h1>about fetched {param.slug}</h1> */}
      <div className="relative blog-head-img">
        <img
          src={blogData.image}
          alt=""
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0  flex justify-center items-center">
          <div className="bg-white bg-opacity-75 py-10 px-5 min-[850px]:w-8/12">
            <h1
              className="text-3xl font-bold my-3 cursor-pointer hover:underline text-center"
              style={{ color: "#3d52a0" }}
            >
              {blogData.name}
            </h1>
            <h1 className="text-center text-lg" style={{ color: "#3d52a0" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              tenetur.
            </h1>
            <div className="mt-10">
              <svg
                class="wave-separator w-full"
                height="47"
                viewBox="0 0 575 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M575 26.049c0-.638-.589-1.113-1.213-.979a417.107 417.107 0 0 1-119.091 8.109c-14.321-1.099-28.576-2.954-42.858-4.813h-.001c-2.284-.297-4.57-.595-6.856-.89-16.567-2.133-33.182-4.108-49.915-4.731-50.775-1.891-101.072 8.692-150.557 19.428-7.111 1.543-15.008 2.77-22.177 2.194-7.16-.577-13.462-2.94-17.588-8.451-.5-.667-.936-1.34-1.393-2.044a67.078 67.078 0 0 0-.846-1.284c-.776-1.141-1.657-2.295-2.809-3.242-3.527-2.9-8.451-2.967-12.59-2.481-5.351.627-10.686 2.055-15.917 3.454-1.933.517-3.851 1.03-5.751 1.498-7.108 1.75-14.046 2.895-20.979 1.527-1.865-.368-3.533-.944-4.546-2.131-1.599-1.875-1.173-4.115.142-7.07.321-.72.682-1.456 1.058-2.216l.104-.212c.341-.688.691-1.396 1.02-2.107.722-1.564 1.376-3.219 1.638-4.896.511-3.28-.678-6.392-2.703-8.85-2.023-2.453-4.926-4.322-8.008-5.15C87.108-.917 80.75.546 75.006 2.118A262.929 262.929 0 0 0 .448 35.799.995.995 0 0 0 0 36.63c0 .796.888 1.272 1.553.835A260.931 260.931 0 0 1 75.535 4.047c5.77-1.58 11.638-2.875 17.11-1.404 2.681.721 5.226 2.36 6.983 4.491 1.754 2.129 2.674 4.682 2.27 7.27-.218 1.397-.776 2.85-1.477 4.365-.316.685-.654 1.368-.996 2.06l-.105.211a63.372 63.372 0 0 0-1.092 2.29c-1.323 2.972-2.285 6.31.163 9.18 1.485 1.742 3.757 2.416 5.681 2.796 7.381 1.457 14.675.218 21.844-1.547 1.987-.49 3.959-1.017 5.922-1.542 5.183-1.386 10.305-2.756 15.501-3.366 4.071-.477 8.243-.298 11.087 2.04.931.765 1.684 1.731 2.425 2.822.248.364.502.756.764 1.158.486.748.995 1.532 1.528 2.243 4.597 6.14 11.548 8.644 19.028 9.246 7.471.602 15.601-.679 22.762-2.233 49.517-10.743 99.574-21.264 150.059-19.383 16.634.62 33.17 2.583 49.734 4.716 2.281.294 4.564.591 6.847.889 14.279 1.858 28.592 3.721 42.971 4.824h.001a419.107 419.107 0 0 0 119.667-8.148.998.998 0 0 0 .788-.976z"
                  fill="#074E92"
                />
              </svg>
            </div>
            <div className="mt-10">
              <div className="flex justify-center items-center">
                <div className="italic font-bold" style={{ color: "#3d52a0" }}>
                  Written by
                </div>
                <img
                  src={blogData.author.photo}
                  alt=""
                  width={50}
                  className="rounded-full mx-3"
                />

                <div>
                  <p className="font-bold" style={{ color: "#3d52a0" }}>
                    {blogData.author.name}
                  </p>
                  <p style={{ color: "#3d52a0" }}>
                    {blogData.author.qualification}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="w-full flex justify-center">
        <div className="min-[850px]:w-8/12">
          <div className="flex justify-center items-center">
            <div className="bg-white bg-opacity-75 py-10 px-5 ">
              <h1
                className="text-3xl font-bold my-3 cursor-pointer hover:underline text-center"
                style={{ color: "#3d52a0" }}
              >
                {blogData.name}
              </h1>
              <h1 className="text-center text-lg" style={{ color: "#3d52a0" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                tenetur.
              </h1>
              <div className="mt-10">
                <svg
                  class="wave-separator w-full"
                  height="47"
                  viewBox="0 0 575 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M575 26.049c0-.638-.589-1.113-1.213-.979a417.107 417.107 0 0 1-119.091 8.109c-14.321-1.099-28.576-2.954-42.858-4.813h-.001c-2.284-.297-4.57-.595-6.856-.89-16.567-2.133-33.182-4.108-49.915-4.731-50.775-1.891-101.072 8.692-150.557 19.428-7.111 1.543-15.008 2.77-22.177 2.194-7.16-.577-13.462-2.94-17.588-8.451-.5-.667-.936-1.34-1.393-2.044a67.078 67.078 0 0 0-.846-1.284c-.776-1.141-1.657-2.295-2.809-3.242-3.527-2.9-8.451-2.967-12.59-2.481-5.351.627-10.686 2.055-15.917 3.454-1.933.517-3.851 1.03-5.751 1.498-7.108 1.75-14.046 2.895-20.979 1.527-1.865-.368-3.533-.944-4.546-2.131-1.599-1.875-1.173-4.115.142-7.07.321-.72.682-1.456 1.058-2.216l.104-.212c.341-.688.691-1.396 1.02-2.107.722-1.564 1.376-3.219 1.638-4.896.511-3.28-.678-6.392-2.703-8.85-2.023-2.453-4.926-4.322-8.008-5.15C87.108-.917 80.75.546 75.006 2.118A262.929 262.929 0 0 0 .448 35.799.995.995 0 0 0 0 36.63c0 .796.888 1.272 1.553.835A260.931 260.931 0 0 1 75.535 4.047c5.77-1.58 11.638-2.875 17.11-1.404 2.681.721 5.226 2.36 6.983 4.491 1.754 2.129 2.674 4.682 2.27 7.27-.218 1.397-.776 2.85-1.477 4.365-.316.685-.654 1.368-.996 2.06l-.105.211a63.372 63.372 0 0 0-1.092 2.29c-1.323 2.972-2.285 6.31.163 9.18 1.485 1.742 3.757 2.416 5.681 2.796 7.381 1.457 14.675.218 21.844-1.547 1.987-.49 3.959-1.017 5.922-1.542 5.183-1.386 10.305-2.756 15.501-3.366 4.071-.477 8.243-.298 11.087 2.04.931.765 1.684 1.731 2.425 2.822.248.364.502.756.764 1.158.486.748.995 1.532 1.528 2.243 4.597 6.14 11.548 8.644 19.028 9.246 7.471.602 15.601-.679 22.762-2.233 49.517-10.743 99.574-21.264 150.059-19.383 16.634.62 33.17 2.583 49.734 4.716 2.281.294 4.564.591 6.847.889 14.279 1.858 28.592 3.721 42.971 4.824h.001a419.107 419.107 0 0 0 119.667-8.148.998.998 0 0 0 .788-.976z"
                    fill="#074E92"
                  />
                </svg>
              </div>
              <div className="mt-10">
                <div className="flex justify-center items-center">
                  <div
                    className="italic font-bold"
                    style={{ color: "#3d52a0" }}
                  >
                    Written by
                  </div>
                  <img
                    src={blogData.author.photo}
                    alt=""
                    width={50}
                    className="rounded-full mx-3"
                  />

                  <div>
                    <p className="font-bold" style={{ color: "#3d52a0" }}>
                      {blogData.author.name}
                    </p>
                    <p style={{ color: "#3d52a0" }}>
                      {blogData.author.qualification}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 py-10">
            {blogData.content.map((data, index) => {
              if (index === 0) {
                const words = data.split(" ");
                const firstWord = words.shift();
                const restOfSentence = words.join(" ");

                return (
                  <div className="mt-5" style={{ color: "#3d52a0" }}>
                    <span className="font-bold text-3xl">{firstWord}</span>{" "}
                    {restOfSentence}
                  </div>
                );
              } else {
                return (
                  <div className="mt-5" style={{ color: "#3d52a0" }}>
                    {data}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
