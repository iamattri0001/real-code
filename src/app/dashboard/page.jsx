import { MdOutlineTimer } from "react-icons/md";
import { GrGroup, GrSecure } from "react-icons/gr";
import { IoShareSocial } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import "./style.css";

const Dashboard = () => {
  return (
    <div className="w-full snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden">
      <div className="w-full h-screen snap-start flex items-center justify-center">
        <div className="space-y-2 w-2/3 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-center">
            Welcome to{" "}
            <span className="heading font-bold bg-gradient-to-br from-accent-400 to-primary-500 bg-clip-text text-transparent">
              RealCode
            </span>
          </h1>
          <h4 className="text-base text-center text-text-100/60">
            Revolutionizing Collaborative Coding
          </h4>
          <p className="text-center text-text-50/85">
            Unlock the power of seamless collaboration in coding with RealCode.
            Our platform offers a cutting-edge real-time collaborative code
            editor designed to streamline teamwork and enhance productivity for
            programmers of all levels. Whether you&apos;re a seasoned developer or
            just starting out, RealCode provides the perfect environment for you
            and your team to thrive.
          </p>
        </div>
      </div>
      <div className="w-full h-screen snap-start flex items-center justify-center">
        <div className="w-2/3 flex flex-col items-center justify-center space-y-5">
          <h3 className="text-3xl heading">Key Features</h3>
          <div className="flex items-center justify-center gap-x-5">
            <Card
              title={"Real-Time Collaboration"}
              description={
                "Say goodbye to version control headaches and endless email chains. With RealCode, multiple programmers can work on the same project simultaneously, seeing changes in real-time. Collaborate effortlessly, share insights, and build together like never before."
              }
              icon={<MdOutlineTimer />}
            />
            <Card
              icon={<GrGroup />}
              title={"Team Creation and Management"}
              description={
                "Easily create teams and invite members to join your coding projects. Whether you&apos;re working on a small side project or a large-scale application, RealCode&apos;s intuitive team management tools make it simple to coordinate efforts and stay organized."
              }
            />
            <Card
              icon={<IoShareSocial />}
              title={"Project Sharing and Accessibility"}
              description={
                "Share your projects with teammates or make them public to collaborate with the wider coding community. RealCode ensures that your code is always accessible, whether you&apos;re working from your desktop, laptop, or mobile device. Seamlessly switch between devices without missing a beat."
              }
            />
          </div>
          <div className="flex items-center justify-center gap-x-5">
            <Card
              icon={<GrSecure />}
              title={"Secure and Reliable"}
              description={
                "Your code is precious, which is why we prioritize security and reliability. RealCode employs state-of-the-art encryption protocols and robust infrastructure to safeguard your data and ensure uninterrupted access to your projects."
              }
            />
            <Card
              icon={<FaGithub />}
              title={"Version Control Integration"}
              description={
                "Stay organized and in control of your codebase with our seamless version control integration. RealCode effortlessly integrates with popular version control systems like Git, enabling you to manage and track changes to your code with precision and ease."
              }
            />
          </div>
        </div>
      </div>

      <div className="w-full h-screen snap-start flex items-center justify-center">
        <div className="w-2/3 flex flex-col items-center justify-center space-y-5">
          <h2 className="text-5xl heading">Get Started Today</h2>
          <p className="text-center text-text-50/85">
            Ready to experience the future of collaborative coding? Sign up for
            RealCode today and join a community of passionate programmers
            dedicated to pushing the boundaries of innovation. Whether you&apos;re
            working on a solo project or building a world-changing application
            with your team, RealCode is your ultimate coding companion. Let&apos;s
            code together, in real-time.
          </p>
          <div className="flex items-center justify-center gap-x-5">
            <button className="bg-accent-400 hover:bg-accent-500 transition-all text-text-950 font-semibold px-3 py-2 rounded-md">
              Github
            </button>
            <button className="hover:underline hover:text-accent-300 transition-all">Developer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

const Card = ({ title, description, icon }) => {
  return (
    <div className="w-[360px] flex flex-col items-center justify-center space-y-5 bg-primary-700/20 hover:bg-primary-700/50 ring-1 ring-secondary-700 transition-all p-5 h-[240px] rounded-xl">
      <div className="text-5xl">{icon}</div>
      <div className="flex flex-col items-center justify-center gap-y-3">
        <h4 className="text-center text-xl">{title}</h4>
        <p className="text-justify text-xs">{description}</p>
      </div>
    </div>
  );
};
