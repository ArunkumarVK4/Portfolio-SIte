import React from "react";
import img1 from "../pics/img1.png";
import img2 from "../pics/img2.png";
import img3 from "../pics/img3.png";
import img4 from "../pics/img4.png";
import img5 from "../pics/img5.png";
import { FaLaptopCode } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";

export default function Project() {
  return (
    
    <div>
      <div className="container" name="project">
        <div className="row">
                    {/* 1 */}
          <h1 className="text-center fw-bold text-warning display-4 mt-5">
            {" "}
            Project{" "}
          </h1>
          

            <h3 className="mt-3 text-start get text-center ">Doctor Appointment Booking Management</h3>
          
          <div className="col-lg-5 col-md-12 col-12 text-center mx-auto">
            <br />
            <h5 className="mt-3 text-start get ">
            Developed a comprehensive doctor appointment booking management application using React for the front-end, Node.js for the back-end, and MongoDB for data storage, complete with separate user and admin dashboards
            </h5>
            <br />

            <div className="mt-3">
              <a
                target="_blank"
                href="https://health-book-frontend-fwa6.vercel.app/"
                className="btn btn-info hand fw-bold mx-auto "
              >
                <h4>
                  <RiLiveFill /> Live{" "}
                </h4>
              </a>
              //{" "}
              <a
                target="_blank"
                href="https://github.com/ArunkumarVK4/Health-book-Frontend"
                className="btn btn-info  hand fw-bold my-3"
              >
                {" "}
                <h4>
                  <FaLaptopCode /> Frontend
                </h4>
              </a>
              //{" "}
              <a
                target="_blank"
                href="https://github.com/ArunkumarVK4/Health-book-Frontend"
                className="btn btn-info  hand fw-bold mx-auto ml-2"
              >
                {" "}
                <h4>
                  <FaLaptopCode /> Backend
                </h4>
              </a>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-12 text-center mt-1 mx-auto mb-1">
            <img
              className="img-fluid mt-5 rounded-3 mb-5 border border-5 hand"
              src={img5}
              alt=""
            />
          </div>

                              {/* 2  */}
            <h3 className="mt-3 text-start get text-center ">Courser Selling Site</h3>

          <div className="col-lg-5 col-md-12 col-12 text-center mx-auto">
            <br />
            <h5 className="mt-3 text-start get ">
            Designed a course selling site with React, Node.js, and MongoDB, offering a diverse range of courses. and Integration of Razorpay's payment gateway ensures secure and hassle-free transactions, elevating the user experience and facilitating a seamless learning journey.
            </h5>
            <br />

            <div className="mt-3">
              <a
                target="_blank"
                href="https://splendorous-vacherin-c5b009.netlify.app/"
                className="btn btn-info hand fw-bold mx-auto "
              >
                <h4>
                  <RiLiveFill /> Live{" "}
                </h4>
              </a>
              //{" "}
              <a
                target="_blank"
                href="https://github.com/ArunkumarVK4/Course-selling-site-client"
                className="btn btn-info  hand fw-bold my-3"
              >
                {" "}
                <h4>
                  <FaLaptopCode /> Frontend
                </h4>
              </a>
              //{" "}
              <a
                target="_blank"
                href="https://github.com/ArunkumarVK4/Course-selling-site-server"
                className="btn btn-info  hand fw-bold mx-auto ml-2"
              >
                {" "}
                <h4>
                  <FaLaptopCode /> Backend
                </h4>
              </a>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-12 text-center mt-1 mx-auto mb-1">
            <img
              className="img-fluid mt-5 rounded-3 mb-5 border border-5 hand"
              src={img4}
              alt=""
            />
          </div>

          {/* 3 */}
          <h3 className="mt-3 text-start get text-center ">Book Store Site</h3>

          <div className="col-lg-5 col-md-12 col-12 text-center mx-auto">
            <br />
            <h5 className="mt-3 text-start get ">
              Developed the front-end of the Book Store app using React JS, Node
              JS MongoDB and ensuring a responsive and interactive user
              interface
            </h5>
            <br />

            <div className="mt-3">
              <a
                target="_blank"
                href="https://dainty-taiyaki-f83fb9.netlify.app/"
                className="btn btn-info hand fw-bold mx-auto "
              >
                <h4>
                  <RiLiveFill /> Live{" "}
                </h4>
              </a>
              //{" "}
              <a
                target="_blank"
                href="https://github.com/ArunkumarVK4/Book-Store-Frontend-"
                className="btn btn-info  hand fw-bold my-3"
              >
                {" "}
                <h4>
                  <FaLaptopCode /> Frontend
                </h4>
              </a>
              //{" "}
              <a
                target="_blank"
                href="https://github.com/ArunkumarVK4/Book-Store-Backend"
                className="btn btn-info  hand fw-bold mx-auto ml-2"
              >
                {" "}
                <h4>
                  <FaLaptopCode /> Backend
                </h4>
              </a>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-12 text-center mt-1 mx-auto mb-1">
            <img
              className="img-fluid mt-5 rounded-3 mb-5 border border-5 hand"
              src={img1}
              alt=""
            />
          </div>

          {/* 4 */}
          <h3 className="mt-3 text-start get text-center ">ToDo App</h3>

          <div className="col-lg-5 col-md-12 col-12 text-center mx-auto">
            <br />
            <h5 className="mt-3 text-start get ">
            Developed an innovative and secure Full Stack To-Do List application, featuring robust user authentication, JWT token storage in cookies, and advanced password hashing techniques for enhanced data protection, all seamlessly integrated with MongoDB as the database backend. 
            </h5>
            <br />

            <div className="mt-3">
              <a
                target="_blank"
                href="https://unique-tulumba-640d05.netlify.app/
                "
                className="btn btn-info hand fw-bold mx-auto "
              >
                <h4>
                  <RiLiveFill /> Live{" "}
                </h4>
              </a>
              //{" "}
              <a
                target="_blank"
                href="
                https://github.com/ArunkumarVK4/MERN-Auth-Frontend"
                className="btn btn-info  hand fw-bold my-3"
              >
                {" "}
                <h4>
                  <FaLaptopCode /> Frontend
                </h4>
              </a>
              //{" "}
              <a
                target="_blank"
                href="https://github.com/ArunkumarVK4/MERN-Auth"
                className="btn btn-info  hand fw-bold mx-auto ml-2"
              >
                {" "}
                <h4>
                  <FaLaptopCode /> Backend
                </h4>
              </a>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-12 text-center mt-1 mx-auto mb-1">
            <img
              className="img-fluid mt-5 rounded-3 mb-5 border border-5 hand"
              src={img2}
              alt=""
            />
          </div>

          {/* 5 */}
          <h3 className="mt-3 text-start get text-center ">HULU Site</h3>

          <div className="col-lg-5 col-md-12 col-12 text-center mx-auto">
            <br />
            <h5 className="mt-3 text-start get ">
              Created a Hulu website clone using React, integrated APIs to fetch
              and display content, and added categorized sections for an
              immersive user experience
            </h5>
            <br />

            <div className="mt-3">
              <a
                target="_blank"
                href="https://flourishing-sprite-2db1d6.netlify.app/
                "
                className="btn btn-info hand fw-bold mx-auto "
              >
                <h4>
                  <RiLiveFill /> Live{" "}
                </h4>
              </a>
              //{" "}
              <a
                target="_blank"
                href="
                
                https://github.com/ArunkumarVK4/hulu-clone
"
                className="btn btn-info  hand fw-bold my-3"
              >
                {" "}
                <h4>
                  <FaLaptopCode /> Frontend
                </h4>
              </a>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-12 text-center mt-1 mx-auto mb-1">
            <img
              className="img-fluid mt-5 rounded-3 mb-5 border border-5 hand"
              src={img3}
              alt=""
            />
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
