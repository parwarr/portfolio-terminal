const Banner = () => {
  const ASCII = `
  _   _      _ _         __        __         _     _ _
  | | | | ___| | | ___    \\ \\      / /__  _ __| | __| | |
  | |_| |/ _ \\ | |/ _ \\    \\ \\ /\\ / / _ \\| '__| |/ _\` | |
  |  _  |  __/ | | (_) |    \\ V  V / (_) | |  | | (_| |_|
  |_| |_|\\___|_|_|\\___( )    \\_/\\_/ \\___/|_|  |_|\\__,_(_)
                      |/
  `;

  return (
    <>
      {ASCII.split('\n').map((line, index) => (
        <p key={index} className='text-blue-700 text-2xl'>
          {line}
        </p>
      ))}
    </>
  );
};

export default Banner;
