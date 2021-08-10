import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import IconButton from "../components/iconbutton";
import Icon256 from "../components/icon256";
import HistoryOfMeIcon from "../assets/img/HistoryOfMeIcon512.svg";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div className="h-screen w-full bg-gradient-to-bl from-herogradient-100 to-herogradient-200">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-screen w-full backdrop-blur-sm">
          <div>
            <Icon256 className="mx-auto py-8" data-aos="fade-right" />
            <div
              data-aos="fade-up"
              className="text-center font-extrabold text-4xl tracking-wide text-gray-200"
            >
              choose a lit life
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="py-12 bg-customGray-100">
      <div className="container mx-auto px-4 xl:w-1/2">
        <div className="flex flex-wrap">
          <div className="w-full px-auto text-left" data-aos="fade-up">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-2xl">
              <div className="px-6 py-5 flex-auto">
                <h6 className="text-3xl font-semibold pb-4 text-gray-300">
                  About
                </h6>
                <p className="text-gray-600 font-light tracking-wider">
                  LitLifeSoftware is an independent creator of mobile apps. All
                  apps featured on this website are free to use and open source.
                  We don't collect data and neither intent to do so in the
                  future. Our goal is to provide offline-first and privacy
                  oriented experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="relative py-20">
      <div className="container mx-auto px-4 xl:w-1/2">
        <div className="items-center flex flex-wrap">
          {/* <img
            alt="..."
            data-aos="fade-right"
            className="max-w-xs my-8 rounded-lg shadow-lg md:w-4/12 ml-auto mr-auto"
            src={HistoryOfMePoster}
          /> */}
          <div className="w-full md:w-3/12 mx-auto px-4 align-top">
            {/* <img
              alt="..."
              data-aos="fade-right"
              className="max-w-xs my-8 rounded-lg shadow-lg md:w-4/12 ml-auto mr-auto"
              src={}
            /> */}
            <div className="flex rounded-4xl mx-auto sm:mx-0 bg-white shadow-lg w-48 h-48"
            data-aos="fade-right">
              <HistoryOfMeIcon className="h-24 mx-auto my-auto py-auto px-auto" />
            </div>
          </div>

          <div
            className="w-full md:w-9/12 mx-auto px-4 sm:px-8 align-top"
            data-aos="fade-left"
          >
            <div className="py-4 px-4">
              <h3 className="text-2xl font-semibold  text-gray-800 text-center sm:text-left">
                History of Me
              </h3>
              <p className="my-4 text-lg leading-relaxed text-gray-600 text-center sm:text-left">
                Your personal digital diary.
              </p>
              <p>
                History of Me allows you to keep a private and digital diary on
                your phone.
              </p>
              <div className="mt-8 text-center sm:text-left">
                <IconButton title="DOWNLOAD" icon={faGithub} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
