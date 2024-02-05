const KeyboardShortcuts = () => {
  const text1 = 'Tab';
  const text2 = 'Up and Down arrow keys';
  const text3 = 'Ctrl + l';

  const command1 = 'autocompletes the command';
  const command2 = 'navigate through command history';
  const command3 = 'clear the terminal screen';

  return (
    <div className='container mr-auto p-4'>
      <div className='space-y-2'>
        <p className='text-custom-green font-bold'>Keyboard Shortcuts</p>
        <div className='flex'>
          <p className='text-custom-purple font-bold flex-shrink-0 w-32'>{text1}</p>
          <p className='mr-3'>={'>'}</p>
          <p className='text-white'>{command1}</p>
        </div>
        <div className='flex'>
          <p className='text-custom-purple font-bold flex-shrink-0 w-32'>{text2}</p>
          <p className='mr-3'>={'>'}</p>
          <p className='text-white'>{command2}</p>
        </div>
        <div className='flex'>
          <p className='text-custom-purple font-bold flex-shrink-0 w-32'>{text3}</p>
          <p className='mr-3'>={'>'}</p>
          <p className='text-white'>{command3}</p>
        </div>
      </div>
    </div>
  );
};

export default KeyboardShortcuts;
