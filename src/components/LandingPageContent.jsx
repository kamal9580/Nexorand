import React from "react";

const LandingPageContent = () => {
  return (
    <div className="container mx-auto">
      <div className="md:flex-row">
        <div className=" p-4 ">
          <h1 className="text-4xl font-bold text-indigo-600 mb-5 text-center">
            Double Your Revenue Potential
          </h1>
          <p className="text-gray-700 font-medium">
            With Nexorand, creators like you are earning up to 2x more. How? By
            leveraging our unique combination of tools designed to maximize your
            income streams.
          </p>
        </div>
        <div className="flex-1 p-4">
          <h1 className=" text-4xl font-bold text-indigo-600 mb-5 text-center">
            MySpace: One Link, Infinite Possibilities
          </h1>
          <p className="text-gray-700 font-medium">
            Showcase your entire digital world with a single, customizable
            Nexorand MySpace link. Direct your audience exactly where you want
            them to go, whether it's your latest content, exclusive offerings,
            or lucrative partnerships.
          </p>
          <span className="text-indigo-500 font-extrabold animate-fadeInOut">
  🎉 Special Offer: 100K+ Followers? MySpace is Free Forever!
</span>


        </div>
        <div className="flex-1 p-4">
          <h1 className="text-4xl font-bold text-indigo-600 mb-5 text-center">
            FanClub: Seamless Monetization
          </h1>
          <p className="text-gray-700 font-medium">
            FanClub: Seamless Monetization Turn your passion into profit with
            our integrated FanClub system. Accept one-time donations, set up
            recurring subscriptions, and sell digital products – all without
            your supporters ever leaving your Nexorand ecosystem.
          </p>
        </div>
        <div className="justify-center bg">
          <div className="  bg-indigo-600 text-center border flex flex-col  py-2">
            <span className=" text-white font-bold text-xl rounded ">
              Ready to Revolutionize Your Creator Journey?
            </span>
            <span className="text-white  font-bold   rounded">
              Join thousands of creators who are already experiencing the
              Nexorand difference.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageContent;
