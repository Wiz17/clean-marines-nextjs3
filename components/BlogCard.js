import Link from "next/link";
const BlogCard = ({props}) => {
    console.log(props.name);
  return (
    <>
      <div className="p-3 ">
        <Link href={`/blog2/${props.name.trim()
                             .replace(/\s+/g, '-')          
                             .replace(/[^a-zA-Z0-9\-]/g, '')}`}>
          <img
            src={props.image}
            alt=""
            className="rounded-lg cursor-pointer"
          />
          <h1
            className="text-xl font-bold my-3 cursor-pointer hover:underline"
            style={{ color: "#3d52a0" }}
          >
            {props.name}
          </h1>
        </Link>

        <div className="flex items-center my-3">
          <img
            src={props.author.photo}
            alt=""
            className="rounded-full w-10"
          />
          <div className="">
            <p
              className="ml-2 text-sm font-semibold"
              style={{ color: "#3d52a0" }}
            >
              {props.author.name}
            </p>
            <p
              className="ml-2 text-sm font-normal"
              style={{ color: "#3d52a0" }}
            >
              {props.author.qualification}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogCard;
