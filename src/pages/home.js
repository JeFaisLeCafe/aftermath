import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Devise = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  font-size: 75px;
  justify-content: flex-around;
  align-items: center;
`;

const DeviseText = styled.div`
  padding-left: 30px;
`;
function Home() {
  return (
    <Container>
      <Devise>
        <img alt="logo_with_name" src="./logo_aftermath.png" />
        <DeviseText>
          Together <br />
          we rise
        </DeviseText>
      </Devise>
    </Container>
  );
}

export default Home;
