function home_1() {
  return (
    <div className="h-[750px] ">
      <div className="flex flex-col items-center justify-start h-full">
        <div>
          <iframe
            width="1200"
            height="675"
            src="https://www.youtube.com/embed/Xd6vtHMlse4"
            //https://www.youtube.com/watch?v=Xd6vtHMlse4
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default home_1;
