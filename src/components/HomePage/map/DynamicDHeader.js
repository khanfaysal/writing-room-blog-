import React from "react";

const DynamicDHeader = () => {
  return (
    <header className="hero w-full bg-muted-background lg:bg-home-hero bg-contain bg-right bg-no-repeat ">
      <section className="w-full px-5 md:px-0 md:w-wrap mx-auto flex items-center py-10 2xl:py-20">
        <div className="w-full  lg:w-2/3">
          <h1 className="text-left text-3xl">Dynamic D</h1>
          <h2 className="text-left text-4xl font-black">
            Ultimate Dedicated Server Hosting For Your Online Kingdom.
          </h2>
          <p className="text-left text-xl mt-5">
            Built For:{" "}
            <span className="tag text-accent-blue text-xl">
              Digital Agency, Developers, Entrepreneurs, and Online Business
              Owners.
            </span>
          </p>
          <div className="my-5">
            <button className="btn btn-primary btn-md">Open My Ticket</button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default DynamicDHeader;
