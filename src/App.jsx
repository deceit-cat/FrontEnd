import React, { useEffect } from "react";
import "./css/public.css";
import { Route, Routes } from "react-router-dom";
import { Register } from "./pages/LoginAndRegister/Register";
import { Login } from "./pages/LoginAndRegister/Login";
import { Main } from "./pages/Main/Main";
import { SetProfile } from "./components/Profile/SetProfile";
import { AddInfoModal } from "./components/Profile/AddInfo/AddInfoModal";
import { getUserInfoThrough, getToken } from "./function/common.js";
import { isUserInfoAtom } from "./hooks/IsUserInfo.js";
import { useRecoilState } from 'recoil';

export default function App() {
  // getUserInfoThrough 값으로 인증 후 jsonData를 객체 형태로 받아와서 Atom에 넣어 전달
  // useRecoilState를 통해 값을 받아오고 변경하기 둘다 가능
  const [isUserInfo, setisUserInfo] = useRecoilState(isUserInfoAtom);
  
  useEffect(() => {
    const fetchData = async () => {
      // 토큰은 잘 넘어오는거 확인
      const token = getToken();

      if(token !== undefined || token !== null) {
        try {
          const userJsonData = await getUserInfoThrough(token, 'entry');

          setisUserInfo({
            email: userJsonData.email,
            username: userJsonData.username,
          });
          console.log(isUserInfo);
        } catch (error) {
          console.error('캐치 함수 내부:', error);
        }
      }
    };
    fetchData();
  }, []);

  return (
      // 받은 유저 정보가 존재할 경우 Main으로 이동, 아니면 Login으로 이동
      <>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Main/>}/>
        <Route path="/Setprofile" element={<SetProfile />} />
        <Route path="/addInfo" element={<AddInfoModal />} />
      </Routes>
    </>
  );
}