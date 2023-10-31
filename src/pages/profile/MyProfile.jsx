import React, { useEffect, useState } from "react";
import profileImg from "../../assets/images/Group 26.png";
import hamburgerOn from "../../assets/images/icon-post-list-on.png";
import hamburgerOff from "../../assets/images/icon-post-list-off.png";
import albumOn from "../../assets/images/icon-post-album-on.png";
import albumOff from "../../assets/images/icon-post-album-off.png";

import { ProImg, Intro, Body, Btns, Sect1 } from "./MyProfileStyle";
import TopBar from "../../components/topbar/TopBarBasic";
import TabMenu from "../../components/tab/TabMenu";
import PostList from "../../components/postlist/PostList";
import Product from "../../components/product/Product";
import { Link } from "react-router-dom";
import PostAlbum from "../../components/postalbum/PostAlbum";
import { profileApi, myProfileApi, getImg } from "../../api/ProfileApi";
import {
  apiImageState,
  accountNameState,
  introState,
  userNameState,
} from "../../state/ModifyAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { useRecoilState, useRecoilValue } from "recoil";
import { imageState } from "../../state/PostAtom";
import { tokenState } from "../../state/AuthAtom";
import { tokenState } from "../../state/AuthAtom";

export default function MyProfile() {
  const [hamburgerBtn, setHamburgerBtn] = useState(true);
  const [userName, setUserName] = useRecoilState(userNameState);
  const [id, setId] = useRecoilState(accountNameState);
  const [intro, setIntro] = useRecoilState(introState);
  const [image, setImage] = useRecoilState(imageState);
  const [apiImage, setApiImage] = useRecoilState(apiImageState);
  const token = useRecoilValue(tokenState);

  const showPost = () => {
    setHamburgerBtn(!hamburgerBtn);
  };

  // 내 프로필 조회

  const handleMyProfile = async (e) => {
    try {
      const res = await myProfileApi(token);
      setImage(res.user.image);
      setUserName(res.user.username);
      setId(res.user.accountname);
      setIntro(res.user.intro);
      console.log(res);
    } catch (error) {
      console.log("에러입니다.");
    }
  };

  useEffect(() => {
    handleMyProfile();
  }, []);

  return (
    <Body>
      <TopBar />
      <Sect1>
        <ProImg>
          <button>
            <Link to='/followers'>
              <span className='followers'>128</span>
              <p>followers</p>
            </Link>
          </button>
          <img src={image} alt='프로필 이미지' className='profileImg' />
          <button>
            <Link to='/following'>
              <span>128</span>
              <p>followings</p>
            </Link>
          </button>
        </ProImg>
        <Intro>
          <h2>{userName}</h2>
          <p>@ {id}</p>
          <p>{intro}</p>
        </Intro>
        <Btns>
          <Link to='/modify'>
            <button className='modify-btn'>프로필 수정</button>
          </Link>
          <Link to='/product'>
            <button className='register-btn'>상품 등록</button>
          </Link>
        </Btns>
      </Sect1>
      <Product />
      <div className='album-btns'>
        <button onClick={showPost}>
          <img src={hamburgerBtn ? hamburgerOn : hamburgerOff} alt='' />
        </button>
        <button onClick={showPost}>
          <img src={hamburgerBtn ? albumOff : albumOn} alt='' />
        </button>
      </div>
      {hamburgerBtn ? <PostList /> : <PostAlbum />}
      <TabMenu />
    </Body>
  );
}
