import TestimonialCard from "../components/TestimonialCard";

const Testimonials = () => {
  return (
    <div className="flex flex-col mx-5  mt-40 my-10 sm:mx-14 lg:mx-20">
      <div className="flex flex-col items-center gap-16">
        <h1 className="sm:text-3xl md:text-4xl lg:text-5xl text-2xl text-center font-bold">
          Make
          <span className="text-[#FB7B2E]">
            {" "}
            quick, effective decisions{" "}
          </span>{" "}
          <br /> without impacting performance
        </h1>
        <p className="sm:text-xl text-2xl font-bold">OUR CUSTOMERS</p>
      </div>
      <div className="flex xl:gap-16 flex-wrap mt-14 justify-evenly">
        <TestimonialCard
          avatar={"/images/disneyLogo.png"}
          review={
            "Red Sky's freight forwarding team books, tracks and delivers end-to-end freight."
          }
          author={"Martha Bishop, Supply Manager @ Disney"}
        />
        <TestimonialCard
          avatar={"/images/bbcLogo.png"}
          review={
            "Unprecedented visibility and control for you, your partners, customers and suppliers - all technical and shipping documentation centralised in a single dashboard"
          }
          author={"Harsh Singh, Logistics @ BBC"}
        />
        <TestimonialCard
          avatar={"/images/wealthyLogo.png"}
          review={
            "Unprecedented visibility and control for you, your partners, customers and suppliers - all technical and shipping documentation centralised in a single dashboard"
          }
          author={"Aditya Agrawal, Logistics @ Wealthy"}
        />
      </div>
    </div>
  );
};

export default Testimonials;
