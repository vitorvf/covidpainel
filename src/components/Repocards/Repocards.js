import React from 'react';
import styles from './Repocards.module.css';
const Repocards = ({ data }) => {
  return (
    <div className=" container d-flex justify-content-center flex-wrap">
      <div className="d-flex justify-content-center flex-wrap">
        {data?.map((caso) => (
          <div
            style={{ marginRight: '30px', marginTop: '25px' }}
            id={styles.cardBrazil}
            key={caso.uid}
          >
            <h1 className={styles.tituloCards}>
              {' '}
              Situação em: {caso.provinceState}:
            </h1>

            <p className={styles.paragrafroCasos}>
              Casos confirmados:
              <span style={{ color: '#01f563' }}> {caso.confirmed}</span>
            </p>

            <p className={styles.paragrafro}>
              Cases ativos:
              <span style={{ color: '#efa003' }}> {caso.active}</span>
            </p>

            <p className={styles.paragrafro}>
              Óbitos confirmados:
              <span style={{ color: 'red' }}> {caso.deaths}</span>
            </p>

            <p className={styles.paragrafro}>
              Morto nos ultimos 28 dias:
              <span style={{ color: '#bb151b' }}> {caso.cases28Days}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Repocards;
