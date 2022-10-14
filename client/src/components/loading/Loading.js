import ReactLoading from "react-loading";
// import styled from "tachyons-components";

const Loading = () => {
//   const Section = styled('div')`
// flex flex-wrap content-center justify-center w-100 h-100 bg-blue`;

//   const Article = styled('div')`
// w-25 ma2 h4 items-center justify-center flex flex-column flex-wrap`;

//   const Prop = styled('h3')`
// f5 f4-ns mb0 white`;
  return (
    <div style={{ background: "red" }} className="vw-100 vh-100 bg-warning position-absolute">
      <div key='spinningBubbles'>
        <ReactLoading type='spinningBubbles' color="#fff"  height={667} width={375} />
      </div>
    </div>
  )
}

export default Loading;
