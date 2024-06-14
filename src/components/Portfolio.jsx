import React from 'react';
import pay from '../assets/portfolio/pay.png';
import burgir from '../assets/portfolio/burgir.png';
import gemini from '../assets/portfolio/gemini.png';
import placement from '../assets/portfolio/placement.png';
import Todo from '../assets/portfolio/Todo.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: pay,
      demoLink: 'https://pay-and-park.vercel.app/',
      codeLink: 'https://github.com/Khushi041/pay-and-park',
    },
    {
      id: 2,
      src: burgir,
      demoLink: 'https://github.com/Khushi041/BurGir',
      codeLink: 'https://github.com/Khushi041/BurGir',
    },
    {
      id: 3,
      src: gemini,
      demoLink: 'https://clone-gemini-puce.vercel.app/',
      codeLink: 'https://github.com/Khushi041/Clone_Gemini',
    },
    {
      id: 4,
      src: placement,
      demoLink: 'https://placement-board.vercel.app/',
      codeLink: 'https://github.com/Khushi041/Placement-Board',
    },
    {
      id: 5,
      src: Todo,
      demoLink: 'https://manage-to-do-s.vercel.app/',
      codeLink: 'https://github.com/Khushi041/Manage-ToDo-s',
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my projects right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button> */}
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
