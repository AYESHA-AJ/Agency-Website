import React from "react";
import { Link } from "react-scroll";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      image: "/src/assets/blog1.png",
    },
    {
      id: 2,
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
      image: "/src/assets/blog2.png",
    },
    {
      id: 3,
      title: "Revamping the Membership Model with Triathlon Australia",
      image: "/src/assets/blog3.png",
    },
  ];

  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12 ">
      <div className="text-center text-neutralDGray md:w-1/2 mx-auto">
        <h2 className="text-4xl font-semibold mb-4 ">
          Caring is the new marketing
        </h2>
        <p className="text-sm mb-8 md:w-3/4 mx-auto">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-between">
        {blogs.map((blog) => (
          <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
            <img src={blog.image}
            className="hover:scale-95 transition- duration-300all"/>
            <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
              <h3 className="mb-2 text-neutralDGray font-semibold">{blog.title}</h3>
              <div className="flex items-center justify-center">
                <Link
                  className="text-brandPrimary font-bold hover:text-neutral-700"
                  href="/"

                >
                  Readmore <span><img
                  className="inline-block ml-2 pt-2 "
                  src="/src/assets/Right.png"
                ></img></span>
                </Link>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
