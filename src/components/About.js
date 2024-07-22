import React from "react";
import "./About.css";

function About() {
  return (
    <div
      className={`overflow-auto bck flex justify-between bg-[rgba(11, 1, 34, 0.306)] gap-[2.5vw] py-5 px-[4.5vw]`}
    >
      <div className="h-[fit-content] w-full pl-5 py-5 rounded-xl border-4 bg-blue-900/[0.1] border-white/75 relative transition-all duration-300 hover:scale-105">
        <h1 className="text-3xl">Key Skills and Expertise</h1>
        <ul className="list-disc text-xl ml-4 mt-8 text-white/[0.6]">
          <h1 className="text-xl text-yellow-200 font-bold">
            Front End Development
          </h1>
          <li className="my-[1.5vh] text-[18px]">
          <b className="text-lg text-orange-400">React.js:</b> Expertise in building single-page applications (SPAs) with React, state management, and component-based architecture.
          </li>
          <li className="my-[1.5vh] text-[18px]">
          <b className="text-lg text-orange-400">JavaScript (ES6+):</b> Strong understanding of modern JavaScript features, including asynchronous programming, destructuring, and arrow functions.
          </li>
          <li className="my-[1.5vh] text-[18px]">
          <b className="text-lg text-orange-400">HTML & CSS:</b> Proficient in creating <span className="text-white italic">responsive</span> and accessible web pages using semantic HTML and modern CSS techniques, including Flexbox.
          </li>
          <li className="my-[1.5vh] text-[18px]">
          <b className="text-lg text-orange-400">Tailwind CSS:</b> Experience in using utility-first CSS framework to build responsive and visually appealing interfaces.
          </li>
          <li className="my-[1.5vh] text-[18px]">
          <b className="text-lg text-orange-400">React Router:</b> Skilled in implementing client-side routing to create seamless navigation experiences in SPAs.
          </li>
        </ul>
        <ul className="list-disc text-xl ml-4 mt-8 text-white/[0.6]">
          <h1 className="text-xl text-yellow-200 font-bold">
            Back End Development
          </h1>
          <li className="my-[1.5vh] text-[18px]">
          <b className="text-lg text-orange-400">LocalStorage API:</b> Efficient use of browser storage to persist user data, providing a consistent user experience across sessions.
          </li>
        </ul>
        <ul className="list-disc text-xl ml-4 mt-8 text-white/[0.6]">
          <h1 className="text-xl text-yellow-200 font-bold">
          UI/UX Design
          </h1>
          <li className="my-[1.5vh] text-[18px]">
          <b className="text-lg text-orange-400">Responsive Design:</b> Expertise in creating mobile-first designs that adapt to various screen sizes and devices.
          </li>
          <li className="my-[1.5vh] text-[18px]">
          <b className="text-lg text-orange-400">User Experience:</b> Focus on building intuitive and user-friendly interfaces with smooth transitions and interactions.
          </li>
        </ul>
      </div>
      <div className="p-5 h-[fit-content] bg-blue-900/[0.1] border-4 border-white/75 rounded-xl transition-all duration-300 hover:scale-105">
        <h1 className="text-3xl">Project Highlights</h1>
        <ul className="list-disc text-xl ml-4 mt-8 text-white/[0.6]">
          <h1 className="text-xl text-yellow-200 font-bold">
          Dynamic Task Management App
          </h1>
          <li className="my-[1.5vh] text-[18px]">
          <b className="text-lg text-orange-400">Task Management:</b> Implemented features for adding, deleting, and persisting tasks using React state management and LocalStorage.
          </li>
          <li className="my-[1.5vh] text-[18px]">
          <b className="text-lg text-orange-400">Responsive Design:</b> Ensured the app is fully responsive and provides a great user experience on both desktop and mobile devices.
          </li>
          <li className="my-[1.5vh] text-[18px]">
          <b className="text-lg text-orange-400">Interactive UI:</b> Developed a visually appealing and interactive user interface with smooth transitions and hover effects.
          </li>
          <li className="my-[1.5vh] text-[18px]">
          <b className="text-lg text-orange-400">DOM Manipulation:</b> Utilized direct DOM manipulation for dynamic updates to the task list, demonstrating advanced JavaScript skills.
          </li>
        </ul>
        <ul className="list-disc text-xl ml-4 mt-8 text-white/[0.6]">
          <h1 className="text-xl text-yellow-200 font-bold">
          Navigation System
          </h1>
          <li className="my-[1.5vh] text-[18px]">
          <b className="text-lg text-orange-400">Navbar Component:</b> Created a responsive navigation bar with fixed positioning and smooth transitions, including a sidebar for mobile view.
          </li>
          <li className="my-[1.5vh] text-[18px]">
          <b className="text-lg text-orange-400">React Router Integration:</b> Integrated React Router to enable seamless client-side routing between different pages.
          </li>
        </ul>
        <ul className="list-disc text-xl ml-4 mt-8 text-white/[0.6]">
          <h1 className="text-xl text-yellow-200 font-bold">
          Form Handling
          </h1>
          <li className="my-[1.5vh] text-[18px]">
          <b className="text-lg text-orange-400">Input Validation:</b> Implemented input validation to enhance user experience and data integrity.
          </li>
          <li className="my-[1.5vh] text-[18px]">
          <b className="text-lg text-orange-400">Dynamic Form Submission:</b> Built a form for task and description input with dynamic state updates and real-time feedback.
          </li>
        </ul>
      </div>

      {/* <div className="h-[fit-content] w-full flex flex-col gap-5">
        <div className="p-5 h-size-full bg-blue-900/[0.1] border-4 border-white/75 rounded-xl transition-all duration-300 hover:scale-105">
        <h1 className="text-3xl">Project Highlights</h1>
        <ul className="list-disc text-xl ml-4 mt-8 text-white/[0.6]">
          <h1 className="text-xl text-yellow-200 font-bold">
          Dynamic Task Management App
          </h1>
          <li className="my-[1.5vh] text-[18px]">
          <b className="text-lg text-orange-400">Task Management:</b> Implemented features for adding, deleting, and persisting tasks using React state management and LocalStorage.
          </li>
          <li className="my-[1.5vh] text-[18px]">
          <b className="text-lg text-orange-400">Responsive Design:</b> Ensured the app is fully responsive and provides a great user experience on both desktop and mobile devices.
          </li>
          <li className="my-[1.5vh] text-[18px]">
          <b className="text-lg text-orange-400">Interactive UI:</b> Developed a visually appealing and interactive user interface with smooth transitions and hover effects.
          </li>
          <li className="my-[1.5vh] text-[18px]">
          <b className="text-lg text-orange-400">DOM Manipulation:</b> Utilized direct DOM manipulation for dynamic updates to the task list, demonstrating advanced JavaScript skills.
          </li>
        </ul>
        <ul className="list-disc text-xl ml-4 mt-8 text-white/[0.6]">
          <h1 className="text-xl text-yellow-200 font-bold">
          Navigation System
          </h1>
          <li className="my-[1.5vh] text-[18px]">
          <b className="text-lg text-orange-400">Navbar Component:</b> Created a responsive navigation bar with fixed positioning and smooth transitions, including a sidebar for mobile view.
          </li>
          <li className="my-[1.5vh] text-[18px]">
          <b className="text-lg text-orange-400">React Router Integration:</b> Integrated React Router to enable seamless client-side routing between different pages.
          </li>
        </ul>
        <ul className="list-disc text-xl ml-4 mt-8 text-white/[0.6]">
          <h1 className="text-xl text-yellow-200 font-bold">
          Form Handling
          </h1>
          <li className="my-[1.5vh] text-[18px]">
          <b className="text-lg text-orange-400">Input Validation:</b> Implemented input validation to enhance user experience and data integrity.
          </li>
          <li className="my-[1.5vh] text-[18px]">
          <b className="text-lg text-orange-400">Dynamic Form Submission:</b> Built a form for task and description input with dynamic state updates and real-time feedback.
          </li>
        </ul>
        </div>
        <div className="p-5 h-[fit-content] w-full bg-blue-900/[0.1] border-4 border-white/75 rounded-xl transition-all duration-300 hover:scale-105">
          <h1 className="text-3xl">Technologies Used:</h1>
          <p className="text-white/[0.6] my-[4vh] text-[18px]">
            Welcome to the Todo List application! In today's fast-paced world,
            managing your tasks efficiently is crucial for productivity and
            success. This app is designed to help you organize your daily
            activities and ensure that nothing important slips through the
            cracks. Whether you're a student, a professional, or just someone
            looking to stay on top of your personal tasks, this Todo List
            application is here to assist you.
          </p>
          <p className="text-white/[0.6] my-[4vh] text-[18px]">
            With its simple and intuitive interface, you can easily add, edit,
            and delete tasks as needed. The application is designed to be
            user-friendly, allowing you to focus on what really matters—getting
            things done. Our goal is to provide a seamless experience for users
            to keep track of their to-do items and improve productivity.
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default About;
