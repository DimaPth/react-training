import { Input, Modal, Popover } from "antd";
import { LoginOutlined, HeartTwoTone, HomeFilled, LogoutOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import style from "./HeaderMenu.module.css";
import { Header } from "antd/lib/layout/layout";
import { useActions } from "../../hooks/useActions";
import { NavLink, useHistory } from "react-router-dom";
import { Select } from "antd";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";

const { Option } = Select;
const { Search } = Input;

const HeaderMenu = () => {
  const { push } = useHistory();
  const [searchValue, setSearchValue] = useState("");
  const { findMovie, setMoviesPage, setMoviesType, setUser, setIsAuth, setIsError } = useActions();
  const { isAuth, user } = useSelector((state) => state.auth);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const auth = getAuth();

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        setUser({
          email: null,
          id: null,
          token: null,
        });
        setIsAuth(false);
        push("/login");
      })
      .catch(() => {
        setIsError("error");
      });
    setIsModalVisible(false);
  };

  return (
    <>
      <Header style={{ padding: "0 10px" }}>
        <div className={style.wrap}>
          <Popover content="home">
            <NavLink
              to="/"
              onClick={() => {
                findMovie("Enemy");
                setMoviesPage(1);
              }}
            >
              <HomeFilled className={style.icon} style={{ fontSize: "20px", cursor: "pointer" }} />
            </NavLink>
          </Popover>
          <Select defaultValue="Type" style={{ marginLeft: "15px", width: "120px" }} onChange={(e) => setMoviesType(e)}>
            <Option value="">All</Option>
            <Option value="movie">Movie</Option>
            <Option value="series">Series</Option>
          </Select>
          <Search
            className={style.search}
            placeholder="Search"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            onSearch={(e) => {
              findMovie(e);
              setMoviesPage(1);
              setSearchValue("");
              push("/");
            }}
            enterButton
          />
          {isAuth ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ color: "white" }}>{user.displayName}</div>
              <Popover content="logout">
                <LogoutOutlined
                  onClick={showModal}
                  className={style.icon}
                  style={{ fontSize: "22px", color: "azure" }}
                />
              </Popover>
            </div>
          ) : (
            <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => push("/login")}>
              <div style={{ color: "white" }}>Login</div>
              <LoginOutlined className={style.icon} style={{ fontSize: "22px", color: "azure" }} />
            </div>
          )}
          <Popover content="favorite">
            <HeartTwoTone
              className={style.icon}
              style={{ marginLeft: "10px", fontSize: "22px" }}
              twoToneColor="#eb2f96"
              onClick={() => push("/favorite")}
            />
          </Popover>
        </div>
      </Header>
      <Modal title="Logout" visible={isModalVisible} onOk={logoutUser} onCancel={handleCancel} centered>
        Are you sure want to logout?
      </Modal>
    </>
  );
};

export default HeaderMenu;
