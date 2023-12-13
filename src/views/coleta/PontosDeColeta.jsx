import React from 'react';
import MenuCental from "../../MenuCental";

const PontosDeColeta = () => {
  const pontos = [
    {
      title: 'Recycle Descarte de Eletrônico',
      image: 'ponto1.jpg',
      text: 'R. Hermano de Barros e Silva, 4584 - Candeias, Jaboatão dos Guararapes - PE, 54430-080',
      link: 'https://maps.app.goo.gl/bceqerRLNA7Sbwte7',
    },
    {
      title: 'REEECicle - Inteligência em Reciclagem',
      image: 'ponto2.jpg',
      text: 'R. Prof. Mussa Hazin, 108 - Iputinga, Recife - PE, 52171-011',
      link: 'https://maps.app.goo.gl/VnxxJg32Y6d27YfFA',
    },
    {
      title: 'Drive Thru Coleta Seletiva',
      image: 'ponto3.jpg',
      text: 'Estr. do Arraial, 4469 - Casa Amarela, Recife - PE, 52051-380',
      link: 'https://maps.app.goo.gl/wSavBTUuPc11VfKM8',
    },
    {
      title: 'ReciPE- Centro de reciclagem de garrafas e latas',
      image: 'ponto4.jpg',
      text: 'Av. Dantas Barreto - São José, Recife - PE, 50010-360',
      link: 'https://maps.app.goo.gl/Ty7oDz4DxeFbM5Rq8',
    },
    {
      title: 'Papão de Pilhas',
      image: 'ponto5.jpg',
      text: 'R. Santo Elías, Nº - 36 - A, 1º andar - Prazeres, Jaboatão dos Guararapes - PE, 54330-230',
      link: 'https://maps.app.goo.gl/g7aXxUb4g4hXwUcRA',
    },
    {
      title: 'Ecoestação IBURA',
      image: 'ponto6.jpg',
      text: 'Av. Rio Largo, 336-338 - COHAB, Recife - PE, 51345-120',
      link: 'https://maps.app.goo.gl/JXJzMY5FZ3Rex71s5',
    },
    {
      title: 'ECONÚCLEO VIA MANGUE',
      image: 'ponto7.jpg',
      text: 'R. Manoel de Brito, 871 - Pina, Recife - PE, 51110-100',
      link: 'https://maps.app.goo.gl/E4D6FzKn7gN6tjme6',
    },
    {
      title: 'Ecodigital - Descarte Já',
      image: 'ponto8.jpg',
      text: 'R. Barão de Souza Leão, 1000 - Boa Viagem, Recife - PE, 51030-300',
      link: 'https://maps.app.goo.gl/o9SiDGZNMfohYHxU7',
    }
  
  ];

  const pontosEsquerda = pontos.slice(0, Math.ceil(pontos.length / 2));
  const pontosDireita = pontos.slice(Math.ceil(pontos.length / 2));

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <MenuCental />
      <h1 style={{ color: '#FFFFFF' }}>Pontos de Coleta</h1>
      <br />
      <br />
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div style={{ width: '48%', marginBottom: '20px' }}>
          {pontosEsquerda.map((ponto, index) => (
            <div key={index} className="ponto-de-coleta" style={{ margin: '10px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 style={{ textDecoration: 'none', color: '#FFFFFF', cursor: 'pointer' }}>
                  <a href={ponto.link} style={{ textDecoration: 'none', color: '#FFFFFF' }}>
                    {ponto.title}
                  </a>
                </h2>
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  <img
                    src={ponto.image}
                    alt={`Imagem ${index + 1}`}
                    style={{ maxWidth: '100px', margin: '10px 0' }}
                  />
                  <p>{ponto.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ width: '48%', marginBottom: '20px' }}>
          {pontosDireita.map((ponto, index) => (
            <div key={index} className="ponto-de-coleta" style={{ margin: '10px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 style={{ textDecoration: 'none', color: '#FFFFFF', cursor: 'pointer' }}>
                  <a href={ponto.link} style={{ textDecoration: 'none', color: '#FFFFFF' }}>
                    {ponto.title}
                  </a>
                </h2>
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  <img
                    src={ponto.image}
                    alt={`Imagem ${index + 1}`}
                    style={{ maxWidth: '100px', margin: '10px 0' }}
                  />
                  <p>{ponto.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PontosDeColeta;

   