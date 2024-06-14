// "use client"
import Image from "next/image";
import "@/app/css/footer.css";
const Footer = () => {
  return (
    <>
      {/* <h1>FOOTER</h1> */}
     
      <div
        style={{
          padding: "10px",
          position: "relative", // Ensures proper positioning of the video
          height: "600px",
        }}
        className="bg-sky-800"
      >
        {/* <video
          src="/turtle_ocean_footer.mp4"
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
        ></video> */}

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            padding: "20px",
            // background:
            //   "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))", // Semi-transparent black overlay
          }}
        >
          <div
            className="md:flex mt-6"
            style={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={
                  "https://i.pinimg.com/736x/05/60/e3/0560e34b4c5711e10ca17dae6f24db4a.jpg"
                }
                className="footer-logo"
              ></img>
              
              <p
                style={{ color: "white", marginLeft: "10px" }}
                className="footer-logo-name"
              >
                <span style={{ fontWeight: "1" }}>Clean</span>
                <span style={{ fontWeight: "500" }}>Marines</span>
              </p>
            </div>
            <div>
              <h1 className="text-white  mb-4 max-md:mt-10 font-medium text-2xl social-handle">
                Follow us on
              </h1>
              <div className="flex ">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt=""
                  width="35px"
                  className="mr-3"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpevfm2P0BtgC9LbXH1n2Xp-oR-iLX8xQTBg&s"
                  alt=""
                  width="35px"
                  className="rounded-full mr-3"
                />
                <img
                  src="https://static.vecteezy.com/system/resources/previews/022/488/734/non_2x/3d-render-camera-icon-isolated-on-transparent-background-camera-logo-for-web-site-app-ui-and-logo-free-png.png"
                  alt=""
                  width="35px"
                  className="rounded-full mr-3"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaFVbW8E7H0yE-cJaL4Ukg9WKKHu6tMdtbyg&s"
                  alt=""
                  width="35px"
                  className="rounded-full mr-3"
                />
                <img
                  src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0vjqOGyOmZ4N4Atj0Wrujl7yP-_2iMDxzTg&s"
                  alt=""
                  width="35px"
                  className="rounded-full mr-3"
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <div style={{ marginTop: "20px", color: "white" }}>
                <p>Contact us on +800-299-1991</p>
                <p>Privacy Statement</p>
                <p>Cookie Policy</p>
                <p>Contact</p>
              </div>

              <div style={{ marginTop: "20px", color: "white" }}>
                <p>Non-Profit Limited by Guarantee Registered Number: 122897</p>
              </div>
            </div>

            <div style={{ marginTop: "20px" }}>
              <img
                className="footer-bottom-image "
                src="https://images.squarespace-cdn.com/content/v1/5a55250549fc2b60134ed6cf/123b1d06-af1a-42dd-931d-0cfa26919092/1ftp_Primary_Horizontal_White.png?format=500w"
                alt=""
              />
            </div>
          </div>
          <div style={{ marginTop: "50px" }}>
            <p style={{ color: "white", textAlign: "center" }}>
              @2024 Clean Marines All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
