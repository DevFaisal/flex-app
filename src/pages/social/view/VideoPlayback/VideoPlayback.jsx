import React from "react";
import Container from "../../../../components/view/Container";

const VideoPlayback = () => {
  const url = "https://www.youtube.com/embed/C7BeFLqZRMY";
  return (
<<<<<<< HEAD
    <Container>
      <section className="py-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center px-0 sm:px-10">
        <div className="flex-1 bg-gray-200 rounded-3xl h-[23rem] md:h-[30rem] flex justify-center items-center">
          <iframe
            src={`${url}?controls=0&modestbranding=1&rel=0`}
            className="rounded-3xl"
            style={{ border: "none", width: "100%", height: "100%" }}
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-1 px-10 md:px-20 py-5 space-y-10">
          <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold">Need a video here from Sawan</h2>
          <p>
            Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo
            in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar.
          </p>
        </div>
      </section>
    </Container>
=======
    <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center px-0 sm:px-10  h-[50vh]">
      <div className="flex-1 md:rounded-3xl h-full w-full p-10 flex justify-center items-center ">
        <iframe
          src={`${url}?controls=0&modestbranding=1&rel=0`}
          className="rounded-3xl"
          style={{ border: "none", width: "100%", height: "100%" }}
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex-1 flex flex-col justify-center px-10 md:px-20 py-5 space-y-10 h-full">
        <h1 className="font-bold">Need a video here from Sawan</h1>
        <h6>
          Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in
          viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar.
        </h6>
      </div>
    </section>
>>>>>>> testing
  );
};

export default VideoPlayback;
