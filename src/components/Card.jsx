function Card({ priority }) {
  return (
    <div
      className={`py-6  px-5 ${
        priority === "high"
          ? "bg-red-100"
          : priority === "med"
          ? "bg-yellow-100"
          : "bg-green-100"
      } rounded-lg`}
    >
      <span>This is an annoucement to do something by a given deadline</span>
      <div className="my-5"></div>
      <div
        className={`p-2 border ${
          priority === "high"
            ? "border-red-300"
            : priority === "med"
            ? "border-yellow-300"
            : "border-green-300"
        }  w-1/2  self-center border-b-0 border-r-0 border-l-0 border-t-2`}
      >
        {" "}
      </div>
      <span className="flex items-center">
        <img
          src="https://via.placeholder.com/40"
          className="rounded-full"
          alt=""
        />

        <span className="text-sm mx-4">
          this is the teacher who assigned it
        </span>
      </span>
    </div>
  );
}
export default Card;
