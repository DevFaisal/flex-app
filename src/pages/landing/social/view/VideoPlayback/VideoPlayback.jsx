import React from 'react';
import Container from '../../../../../components/view/Container';

const VideoPlayback = () => {
  const url = 'https://www.youtube.com/embed/C7BeFLqZRMY';
  return (
    <section className="bg-[#F2F4F8] py-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center px-0 sm:px-10 h-[70vh] ">
        <div className="flex-1 md:rounded-3xl w-fit h-full py-20 flex justify-center items-center ">
          <iframe
            src={`${url}?controls=0&modestbranding=1&rel=0`}
            className="rounded-3xl"
            style={{ border: 'none', width: '100%', height: '100%' }}
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-1 flex flex-col justify-center px-10 md:px-20 py-5 space-y-10 h-full">
          <h1 className="text-2xl md:text-4xl font-bold">Need a video here from Sawan</h1>
          <h6>
            Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros
            scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque
            nullam sagittis, pulvinar.
          </h6>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayback;
