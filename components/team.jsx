import Image from "next/image";

// components/TeamSection.js
export default function TeamSection() {
    const team = [
      {
        name: "Garv Agarwal",
        role: "Smart contracts",
        image: "/members/garv.jpeg",
      },
      {
        name: "Manish Kumar Saw",
        role: "Website Development",
        image: "/members/me.jpeg",
      },
      {
        name: "Ankit Kumar",
        role: "Stock trade development",
        image: "/members/ankit.jpeg",
      },
      {
        name: "Sanidhya Shekhar Mishra",
        role: "Backend infrastructure",
        image: "/members/ansh.jpeg",
      },
      {
        name: "Raj Mondal",
        role: "Deployment and configuration",
        image: "/team/zara.jpg",
      },
    ];
  
    return (
      <section className="bg-[#0c0f1a] py-24 px-4 sm:px-8 lg:px-20">
        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-widest text-sm">Who We Are</p>
          <h2 className="text-4xl text-white font-semibold">Meet the onTrade Team</h2>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden shadow-md group"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={400}
                className="w-full h-72 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-blue-800/40 flex flex-col justify-end p-4">
                <h3 className="text-white text-lg font-semibold">{member.name}</h3>
                <p className="text-blue-200 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  