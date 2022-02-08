import React from 'react';
import styles from './Home.module.css';
import InputSearch from './InputSearch/InputSearch';
import Repositories from './Repositories/Repositories';
const Home = () => {
  return (
    <section className="d-flex justify-content-center">
      <InputSearch />
      <Repositories />
    </section>
  );
};

export default Home;
