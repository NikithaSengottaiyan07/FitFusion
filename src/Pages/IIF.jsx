import React from 'react';

function MyIframeeComponent() {
  return (
    <div>
      {/* Replace 'src' with the URL you want to embed */}
      <iframe
        title="My Embedded Content"
        src="https://www.healthline.com/health/exercise-fitness/cooldown-exercises"
        width="1540"
        height="600"
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default MyIframeeComponent;
