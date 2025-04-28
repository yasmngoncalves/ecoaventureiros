import { Link } from "react-router-dom";

export default function Card({ title, description, image, link, buttonText }) {
  return (
    <div className="bg-white rounded-[15px] shadow-md overflow-hidden flex flex-col transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-[15px]"
      />
      <div className="p-6 flex-1 flex flex-col items-center text-center">
        <h3 className="text-green-700 text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-base mb-6">{description}</p>
        <Link
          to={link}
          className="bg-eco-amarelo hover:bg-yellow-500 text-white font-bold uppercase py-2 px-6 rounded-full transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
