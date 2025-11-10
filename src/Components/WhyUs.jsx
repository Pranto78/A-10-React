import React from "react";
import {
  FaQuoteLeft,
  FaMapMarkerAlt,
  FaHandshake,
  FaUser,
} from "react-icons/fa";

const whyUsData = [
  {
    icon: <FaQuoteLeft className="text-3xl text-yellow-500" />,
    title: "“Yiqust Clews b6 Viay?”",
    desc: "Vlee sira lost lto nte ssapn the snaviesnt intl inrente ss wind the snes peridnect",
  },
  {
    icon: <FaMapMarkerAlt className="text-3xl text-teal-600" />,
    title: "Weal Hout s Retee",
    desc: "How tows alcaore ipnster sersnnet joses taverse trnidee ekonmce toiet",
  },
  {
    icon: <FaHandshake className="text-3xl text-indigo-600" />,
    title: "Tiley Cannilay",
    desc: "Tlow avors wee, twiveeneer snpsane ut hers sers prined mos mrteee",
  },
  {
    icon: <FaUser className="text-3xl text-gray-800" />,
    title: "What Our Client Say",
    desc: "Domy Buitefsy Nemes",
  },
];

const WhyUs = () => {
  return (
    <div className="w-full py-16 bg-base-200">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-12">
          Why Choose Home<span className="text-yellow-600 font-bold">Nest</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUsData.map((item, i) => (
            <div
              key={i}
              className="bg-base-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-base-content mb-2">
                {item.title}
              </h3>
              <p className="text-base-content/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
