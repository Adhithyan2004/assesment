import TestimonialCard from "../components/TestimonialCard";

const Testimonials = () => {
  return (
    <div className="flex flex-col mx-5 my-10 mt-40 sm:mx-14 lg:mx-20">
      <div className="flex flex-col items-center gap-16">
        <h1 className="text-2xl font-bold text-center sm:text-3xl md:text-4xl lg:text-5xl">
          Make
          <span className="text-[#FB7B2E]">
            {" "}
            quick, effective decisions{" "}
          </span>{" "}
          <br /> without impacting performance
        </h1>
        <p className="text-2xl font-bold sm:text-xl">OUR CUSTOMERS</p>
      </div>
      <div className="flex flex-wrap justify-around gap-16 mt-14">
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
