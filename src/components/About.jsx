import React from "react";
import { useContext, } from "react";
import { LanguageContext } from "../components/contextprovider/Language";
const About = () => {
  const { contextData } = useContext(LanguageContext);

  //console.log("your language is" + contextData.Language);
  return (
    <div>
      <h1 className=" text-center  font-bold text-green-900  animate-pulse justify-center text-3xl">
               Golden business group
      </h1>
      <section className="">
        <div className="py-3 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest  uppercase title-font">
                Why choose us?
                {contextData.Language == "English" ? "News" : "ሓዱሽ ሓበሬታ"}
              </h2>
              <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                We know tech, we know finance. We are fintech experts.
              </p>
              <p className="mt-4 max-w-2xl text-lg  text-black lg:mx-auto">
                We know how to handle taxation for all the countried we operate
                in. We care for our customers and help them manage cashflows.
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src="https://www.svgrepo.com/show/503163/api-settings.svg" />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Powerful API
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base  text-black">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Easy to integrate SDK
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base  text-black">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Low Transaction Cost
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base  text-black">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Powerful Dashboard
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base  text-black">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
