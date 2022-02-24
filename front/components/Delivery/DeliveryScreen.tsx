const DeliveryScreen = () => {
  return (
    <div className="flex flex-col w-3/5 ">
      <div className="flex">
        <iframe
          width="1200"
          height="600"
          src="https://www.youtube.com/embed/4N7HKC7szFA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="flex">
        <iframe
          width="1200"
          height="350"
          frameBorder="0"
          src="https://www.youtube.com/live_chat?v=HpdO5Kq3o7Y&embed_domain=localhost"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default DeliveryScreen;
