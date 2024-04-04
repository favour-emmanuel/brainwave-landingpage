interface dataProp {
  number: string;
  text: string;
}
const data: dataProp[] = [
  { number: "1M+", text: "Customers visit Albino every months" },
  {
    number: "93%",
    text: "Satisfaction rate from our customers.",
  },
  {
    number: "4.9",
    text: "Average customer ratings out of 5.00!",
  },
];

const BodySection = () => {
  return (
    <div className="max-w-[1640px] w-full mx-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-6">
        {data.map((item) => (
          <div className="flex gap-5 items-center">
            <h3>{item.number}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodySection;
