import { LampDemo } from "@/components/Lamp";
import { NavbarContainer } from "@/components/Navbar";
import { ThreeDCardDemo } from "@/components/ThreeDCard";

import { TimelineDemo } from "@/components/Timeline";

const page = () => {
  const data = [
    {
      projectName: "Gym Android App",
      projectDescription:
        "This app is build using React Native.\nRazorpay Payment Gateway integration is done for seamless payment across the app.\nUsed React Reanimated package for a bit of animations in the application.",
      projectLink: "/hello",
      techStack: "React Native , Android Studio , Android Emulator",
      projectImage:
        "https://images.pexels.com/photos/1250260/pexels-photo-1250260.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <>
      <NavbarContainer />

      <LampDemo />
      <TimelineDemo />
      <p className="text-4xl text-white text-center font-bold my-4">
        My Projects
      </p>
      <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {data.map((item, idx) => {
          return <ThreeDCardDemo key={idx} {...item} />;
        })}
      </div>
    </>
  );
};

export default page;
