import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>
        <p className="text-xl mt-20 ">
          I'm khushi parmar, a undergraduate student with a passion for
          technology and a drive to make a positive impact through software
          development. Although I'm just starting my journey in the world of
          full stack development, I'm eager to learn, grow, and contribute to
          exciting projects.
        </p>
        <br />
        <p className="text-xl">
          What excites me most about software development is the opportunity to
          solve complex problems and create solutions that enhance the lives of
          others. I love the collaborative nature of coding and thrive in
          environments where teamwork and innovation are valued.
        </p>

        <br />
        <p className="text-xl">
          I'm on the lookout for opportunities to kickstart my career in full
          stack development and am eager to contribute my passion and skills to
          a forward-thinking team. Let's connect and explore how we can create
          something amazing together!
        </p>
      </div>
    </div>
  );
};

export default About;
