import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import authorData from "../data/author_data";
import Badge960 from "../components/icons/badge_960";
import Showcase from "../components/showcase";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div className="h-screen w-full bg-gradient-to-bl from-herogradient-100 to-herogradient-200">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-screen w-full backdrop-blur-sm">
          <div>
            <Badge960
              className="mx-auto py-8 h-40 md:h-52 lg:h-64 xl:h-80  text-customRed-logo fill-current"
              data-aos="fade-right"
            />
            {/* <div
              data-aos="fade-up"
              className="text-center font-extrabold text-4xl tracking-wide text-gray-200"
            >
              {authorData.slogan}
            </div> */}
          </div>
        </div>
      </div>
    </div>

    <section className="py-12 bg-customGray-300">
      <div className="container mx-auto px-4 xl:w-1/2">
        <div className="flex flex-wrap">
          <div className="w-full px-auto text-left" data-aos="fade-up">
            <div className="px-6 py-5 flex-auto break-words">
              <h6 className="text-3xl font-bold pb-4 text-gray-500 tracking-widest">
                {"About".toUpperCase()}
              </h6>
              <p className="text-gray-600 font-normal tracking-wider">
                {authorData.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="relative py-4">
      <Showcase
        title="Apps"
        subtitle="Check out our privacy-focused apps."
        link={"/apps"}
      />
      <Showcase
        title="Packages"
        subtitle="Build your own using our Flutter Packages."
        link={"/packages"}
      />
    </section>

    {/* <section className="relative py-20">
      {productData.map((item, key) => {
        return (
          <AppFeaturePreview
            key={key}
            icon={item.icon}
            title={item.title}
            slogan={item.slogan}
            description={item.description}
            url={item.url}
            route={item.route}
            github={item.github}
          />
        );
      })}
    </section> */}
  </Layout>
);

export default IndexPage;
