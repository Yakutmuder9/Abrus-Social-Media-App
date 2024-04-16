import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div
      id="loading-transition"
      style={{ height: "100vh", width: "100vh", overflowX: "hidden" }}
      className="vw-100 vh-100  position-absolute d-flex align-items.center justify-content-center"
    >
      <ReactLoading
        type="spinningBubbles"
        color="#0568b9"
        height={125}
        width={125}
        className="d-flex align-items-center justify-content-center"
        id="react-loading"
      />
    </div>
  );
};

export default Loading;
