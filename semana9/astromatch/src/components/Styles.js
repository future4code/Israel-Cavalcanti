import styled from "styled-components";

export const Container = styled.body`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(250, 231, 216);
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 700px;
  border-radius: 15px 50px;
  border: solid white;
  background-color: rgb(249, 178, 78);
  box-shadow: 5px 5px 10px gray;
`;

// ================PROFILEPAGE==================

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10%;
`;

export const InfoProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  height: 75%;
`;

export const ImageProfile = styled.img`
  display: flex;
  width: 350px;
  height: 400px;
  border: solid white;
  box-shadow: 3px 3px 20px gray;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 15%;
`;

// ================MATCHPAGE==================

export const ContainerMatches = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ProfileMatch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 115px;
  height: 115px;
`;

export const ImageCircle = styled.img`
  display: flex;
  border-radius: 50px;
  width: 80px;
  height: 80px;
  border: solid white;
  box-shadow: 3px 3px 20px gray;
`;
