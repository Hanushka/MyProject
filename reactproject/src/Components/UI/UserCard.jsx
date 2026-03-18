import React from "react";
import styles from '../../Pages/home.module.css';
function UserCard({ name, role, image, price }) {
  return (
    <div className={styles['user-card']}>
      <img src={image} alt="Images" className={styles['user-image']} />
      <h2>{name}</h2>
      <p>{role}</p>
      {price && <p>{price}</p>}
    </div>
  );
}

export default UserCard;

