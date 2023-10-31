import styled from 'styled-components';
import { darken, lighten } from 'polished';

const SetProfileBox = styled.div`
  @media only screen and (min-width: 430px) {
    width: 365px;
    margin: auto;
  }

  @media only screen and (max-width: 430px) {
    max-width: auto;
    margin: auto;
  }
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; /* 수평 가운데 정렬 */
  height: 100vh; /* 화면 높이 만큼 늘리기 */

`;
const ExplainContainer = styled.div`
  box-sizing: border-box;
  display:flex;
  width: 697px;
  height: 124px;
  /* border: 1px solid #000000; */

  flex-basis: 200px;
`;
const SetContainer = styled.div`
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content: center;
  width: 697px;
  height: 816px;
  /* border: 1px solid #000000; */
`;
const SetBox = styled.div`
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  width: 680px;
  height: 800px;
  background: #FFFFFF;
  border: 7px solid #B4B4B4;
  border-radius: 30px;
`;
const ProfileImageBox = styled.div`
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content: center;
  width: 250px;
  height: 250px;
  /* border: 1px solid #000000; */
`;
const ProfileImage = styled.img`
  box-sizing: border-box;
  width: 230px;
  height: 230px;
  background: #FFFFFF;
  border: 5px solid #B4B4B4;
  border-radius: 50%;
`;
const InputBox = styled.div`
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  width: 560px;
  height: 299px;
  /* border: 1px solid #000000; */
`;
const StartButton = styled.button`
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content: center;
  margin-top: 10px; 
  width: 480px;
  height: 86px;
  background: #F8E792;
  border-radius: 30px;
  border: none;
  background: #F8E792;
  &:hover {
    background: ${lighten(0.1, '#F8E792')};
  }
  &:active {
    background:  ${darken(0.1, '#F8E792')};
  }
  /* 서비스 시작하기 */
  font-family: 'Noto Sans KR', sans-serif;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
`;
const InputNickname = styled.input`
  border: none;
  outline:none;
  border-bottom: 5px solid #B4B4B4;
  width: 480px;
  height: 50px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  font-size: 24px;
`;
const InputIntroduce = styled.input`
  border: none;
  outline:none;
  border-bottom: 5px solid #B4B4B4;
  width: 480px;
  height: 50px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  font-size: 24px;
`;