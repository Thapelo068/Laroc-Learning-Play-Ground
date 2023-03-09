import style from "./WorkCard.module.scss";
import { NavLink } from "react-router-dom";
import { usePopup } from "../../../hooks/usePopup";
import { WorkCardPopup } from "./WorkCardPopup/WorkCardPopup";

export const WorkCard = ({ work }) => {
  const { isPopupVisible, toggle, ref: menuRef } = usePopup();

  const openMenu = (e) => {
    e.preventDefault();
    toggle();
  };
  if (work.title === null) return null;
  return (
    <NavLink className={style.card} to={`/you-work/${work._id}`}>
      <div className={style.preview}></div>

      <div className={style.info}>
        <span className={style.title}>{work.title}</span>
        <span className={style.desc}>{work.description}</span>
      </div>

      <div onClick={openMenu} className={style.menu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <WorkCardPopup menuRef={menuRef} isVisible={isPopupVisible} work={work} />
    </NavLink>
  );
};
