import styled from "styled-components";
import star_wars_bg from "../../images/star_wars_bg.png";

const StyledAppContainer = styled.div`
  background-image: url(${star_wars_bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 18px;
`;

export default StyledAppContainer;
