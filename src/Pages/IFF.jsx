import React from 'react';

function MyIframeComponentt() {
  return (
    <div>
      {/* Replace 'src' with the URL you want to embed */}
      <iframe
        title="My Embedded Content"
        src="https://www.cnet.com/health/fitness/12-best-cardio-workouts/"
        width="1540"
        height="600"
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default MyIframeComponentt;
