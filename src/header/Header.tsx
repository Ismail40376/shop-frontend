// import { NavLink } from 'react-router-dom';
import { useState } from "react";
import Modal from "react-modal";
import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
};

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className={s.headerLine}></div>
      <header className="container">
        <nav className={s.nav}>
          <div className={s.navLinks}>
            <NavLink to="/logo">
              <img src="/logo-icon.png" alt="logo" />
            </NavLink>
            <NavLink to="/dishes">Men</NavLink>
            <NavLink to="/orders">Women</NavLink>
            <NavLink to="/orders">Boys</NavLink>
            <NavLink to="/orders">Girls</NavLink>
          </div>

          <div className={s.navLinks}>
            <NavLink to="/logo">
              <img src="/profile-icon.png" alt="logo" />
            </NavLink>
            <NavLink to="/logo">
              <img src="/heart-icon.png" alt="logo" />
            </NavLink>
            <NavLink to="/logo">
              <img src="/cart-icon.png" alt="logo" />
            </NavLink>
          </div>
        </nav>
        <div className={s["burger-menu"]}>
          <NavLink to="/logo">
            <img src="/logo-icon.png" alt="logo" />
          </NavLink>
          <button onClick={() => setIsModalOpen(true)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {isModalOpen && (
        <div>
          <Modal isOpen={isModalOpen} style={customStyles} contentLabel="Example Modal">
            <button onClick={() => setIsModalOpen(false)} className={s.closeIcon}>
              close
            </button>
            <div className={s.modalLinks}>
              <NavLink to="/Women">Женщины</NavLink>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Header;
