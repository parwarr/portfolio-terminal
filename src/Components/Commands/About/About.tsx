import RenderCommand from '../RenderCommand/RenderCommand';

const Help = () => {
  const aboutMe = [
    {
      command: 'about',
      description:
        "Hi 😄 I'm Parwar and 19-years-old from Switzerland. I am currently in the 3rd year of my apprenticeship as an IT specialist. I am passionate about web development and I love to create new things. I am always ready to learn new technologies and improve my skills. It all started with a game. At that time, I was bored and I discovered my passion out of boredom. Through programming, I was able to implement my own ideas in the game and was totally fascinated by it. Since I am still in education, I could afford to change departments. I was able to move to a development team and was once again confirmed in my passion.  have now been working as a web developer since March 2023. I started with backend development where I was able to learn JavaScript, TypeScript, and NestJS and implemented customer projects together with the team. Now I have moved to the frontend and am currently learning frontend and fullstack-development.",
    },
  ];
  return (
    <>
      <RenderCommand commands={aboutMe} />
    </>
  );
};

export default Help;
