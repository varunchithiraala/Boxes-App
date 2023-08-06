const Box = props => {
  //  Write your code here.
  const {className, boxText} = props;
  const box = `box-container ${className}`
  return (
    <div className={box}>
        <p className="box-title">{boxText}</p>
    </div>
  );
};

const element = (
  //  Write your code here. 
  <div className="boxes-app-container">
      <h1 className="boxes-container-heading">Boxes</h1>
      <div className="boxes-container">
          <Box className="yellow-box" boxText="small-box" />
          <Box className="blue-box" boxText="medium-box" />
          <Box className="pink-box" boxText="large-box" />
      </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
