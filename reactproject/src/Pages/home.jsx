import React from "react";
import UserCard from "../Components/UI/UserCard";
import styles from './home.module.css'; 
import Counter from "../Components/UI/Counter";  
import Button from "../Components/UI/Button";
import Form from "../Components/UI/Form";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.cards}>
        <UserCard
          name="Alice"
          role="Full Stack Developer"
          image="/Assets/images/image1.jpg"
        />
        <UserCard
          name="Brian"
          role="Data Scientist"
          image="/Assets/images/image2.jpg"
        />
        <UserCard
          name="Charlie"
          role="UI/UX Designer"
          image="/Assets/images/image3.jpg"
        />
        <UserCard
          name="SmartWatch"
          price="R9000"
          image="/Assets/images/product1.jpg"
        />
        <UserCard
          name="Camera"
          price="R6000"
          image="/Assets/images/product2.jpg"
        />
        <UserCard
          name="Tablet"
          price="R4000"
          image="/Assets/images/product3.jpg"
        />
        <UserCard
          name="iPhone"
          price="R45000"
          image="/Assets/images/product4.jpg"
        />
        <UserCard
          name="Headphones"
          price="R1500"
          image="/Assets/images/product5.jpg"
        />
      </div>
      <Button />
      <Counter />
      <Form />
    </div>
  );
}

export default Home;




