import { FC } from 'react';

const App: FC = () => {
  const handleOnShare = () => {
    if (!navigator.share) {
      console.log('Share failed');
      return;
    }

    navigator
      .share({
        title: 'Test',
        text: 'This is a test',
        url: 'https://mcommemutuelle.com/'
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  };

  return <button onClick={handleOnShare}>OPEN SHARE</button>;
};
export default App;
