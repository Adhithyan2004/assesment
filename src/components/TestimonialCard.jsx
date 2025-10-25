const TestimonialCard = ({ avatar, review, author }) => {
  return (
    <div className="bg-[#f9f3ef] rounded-3xl p-8 w-full md:w-96 text-center flex flex-col items-center shadow-sm">
      {/* Avatar / Logo */}
      <div className="flex justify-center -mt-14 border-8 border-[#f9f3ef] rounded-full">
        <div className="bg-white rounded-full p-4 ">
          <img
            src={avatar}
            alt="review avatar"
            className="w-16 h-16 object-contain "
          />
        </div>
      </div>
      <div className="flex flex-col grow justify-between w-full">
        {/* Review */}
        <p className="  text-left mt-6 mb-10 leading-relaxed">{review}</p>

        {/* Author */}
        <p className="text-gray-500 text-left font-semibold mt-auto">
          {author}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
