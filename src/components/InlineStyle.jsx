export const InlineStyle = () => {
  const containerStlye = {
    border: "solid 2px #43ad88",
    borderRadius: "20px",
    padding: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {
    margin: "0",
    color: "#fd5637"
  };
  const buttonStyle = {
    backgroundColor: "#3289ff",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };
  return (
    <div style={containerStlye}>
      <p style={titleStyle}>- Inline Styles -</p>
      <button style={buttonStyle}>Fight!</button>
    </div>
  );
};
