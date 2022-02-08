import React, { useState, useRef } from 'react';
import styles from '../InputSearch/InputSearch.module.css';
import Repositories from '../Repositories/Repositories';
const Input = () => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const inputBusca = useRef();
  const [error, SetError] = useState(false);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    async function fetchCep() {
      setLoading(true);
      const response = await fetch(
        `https://covid19.mathdro.id/api/countries/${inputBusca.current.value}/confirmed`,
      );
      if (data.length === 0 || response.statusText === 'Not Found') {
        console.log('Erro');
        SetError(true);
      } else {
        SetError(false);
      }
      const json = await response.json();
      setData(json);
      setLoading(false);
    }

    fetchCep();
    console.log(data);
  };

  return (
    <div className={styles.positionInput}>
      <main className="d-flex justify-content-center">
        <div className={styles.box} id="box">
          <div className={styles.posicaoTitles}>
            <h1 className={styles.h1Busca}>Digite a sigla de algum Pais</h1>
            <p className={styles.pBusca}>
              Informe o Pais para Receber os dados
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              className={styles.search}
              placeholder="Digite o Nome de algum pais"
              required
              ref={inputBusca}
            />
            <button type="submit" className={styles.btnSearch}>
              Pesquisar
            </button>
          </form>
        </div>
      </main>
      {/* Exibe se estiver carregando */}
      {loading && !error && <p className={styles.loadingcor}>Carregando....</p>}
      {/* Exibe se não estiver carregando, se não retornar erro, se tiver algum dado */}
      {!loading && !data.erro && data && (
        <div>
          <Repositories data={data} />
        </div>
      )}
      {/* Exibe se retornar o erro  */}
      {error && <p className={styles.erro}>Digite um Pais valido!</p>}
    </div>
  );
};

export default Input;
