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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit,
          suscipit repellendus quam explicabo debitis eligendi, magni animi quod
          ducimus expedita dolorum accusantium fugit ipsa autem ad perferendis!
          Dolorum nulla mollitia asperiores quam. Eos repellat odio perferendis
          tempore iure nemo nulla rerum ipsam maiores facilis aliquam, earum,
          reprehenderit unde tenetur itaque.
        </p>
        <br />
        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo quisquam
          culpa, ratione perspiciatis esse nobis officiis fuga ullam consectetur
          quae odio commodi aperiam recusandae amet placeat provident voluptate
          doloremque maxime alias, similique, repellendus repellat nisi et
          totam! Repellendus ex at nihil porro, minus enim deleniti odit sit cum
          dolorem beatae.
        </p>
      </div>
    </div>
  );
};

export default About;
