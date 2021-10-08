import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <p>- styled components -</p>
      <button>FIGHT</button>
    </Container>
  );
};

const Container = styled.div`
  border: solid 2px #43ad88;
  border-radius: 20px;
  padding: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
