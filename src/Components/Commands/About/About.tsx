const Help = () => {
  const aboutMe = [
    {
      description:
        "Hi 😄 I'm Parwar, a 19-year-old web developer from Switzerland. I am currently in the 3rd year of my apprenticeship as an IT specialist. I am passionate about web development and I love to create new things. I am always ready to learn new technologies and improve my skills. It all started with a game. At that time, I was bored and I discovered my passion out of boredom. Through programming, I was able to implement my own ideas in the game and was totally fascinated by it. Since I am still in education, I could afford to change departments. I was able to move to a development team and was once again confirmed in my passion.  have now been working as a web developer since March 2023. I started with backend development where I was able to learn JavaScript, TypeScript, and NestJS and implemented customer projects together with the team. Now I have moved to the frontend and am currently learning React.",
    },
  ];

  return (
    <>
      <div>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-white text-2xl font-bold'>About me</p>
            <div className='flex flex-col items-center justify-center'>
              {aboutMe.map((command, index) => (
                <div
                  key={index}
                  className='flex flex-row items-center justify-center'
                >
                  <p className='text-white text-2xl font-bold mb-5 mr-3'>
                    {command.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
