import styled from "styled-components";

export const Body = styled.body`
  display: flex;
  flex-direction: column;
  background-image: url("https://static.vecteezy.com/packs/media/components/home/masthead-vectors/img/lavakidneys_800x400@2x-2db5e5a0c944e2b16a11a18674570f76.jpg");
  position: fixed;
  min-width: 100%;
  min-height: 100%;
  background-size: cover;
  background-position: cover;
  margin: 0;
  justify-content: space-between;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  min-width: 100%;
  width: 90px;
`;

export const Logo = styled.div`
  display: flex;
`;

export const Inputs = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 500px;
`;

// ====================================

export const ContainerDays = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: auto;
  align-items: stretch;
`;

export const Day = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  min-height: 700px;
  align-items: center;
  background-color: rgba(255, 255, 204, 0.4);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  margin: 10px;
`;

// ====================================

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  min-width: 100%;
  min-height: 200px;
`;

export const Notes = styled.div`
  display: flex;
  min-width: 90%;
  min-height: 90%;
`;
