// import { NavLink } from 'react-router-dom';
import s from "./Header.module.scss";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="container">
      <h1></h1>
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

      {/* <div>
          <label className={s.label}>Image upload</label>
          <input className={s.input} type="file" onChange={handleFileSubmit} />
          {fileName && <p className={s.fileName}>Selected file: {fileName}</p>}
          {img && (
            <div className={s.imagePreview}>
              <img src={img} alt="preview" />
            </div>
          )}
        </div>
        <button className={s.saveButton} type="submit">
          Save
        </button>
      </form>
    </div> */}
    </header>
  );
};

export default Header;
