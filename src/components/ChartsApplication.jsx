import store from "../store.js"
import React, { useState, useEffect } from "react";

import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { Chart as 
    ChartJS, 
    ArcElement, 
    Tooltip, 
    Legend, 
    LinearScale,
    CategoryScale, 
    BarElement, 
    PointElement, 
    LineElement, 
    Filler,
    Title 
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    ArcElement, 
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

function StatusAula() {

      const [getStatus, setStatus]= useState([]);
      const [getTotais, setTotais] = useState([]);

      useEffect(() => {
      fetch(`${store.getState().backEndUrl}aulas/total-aulas-status`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("usuario")).token
        },
      })
          .then(response => {
              if (!response.ok) {
                  throw new Error('Erro na requisição');
              }
              return response.json();
          })
          .then(data => {

            const status = [];
            const total = [];

            data.forEach((item) => {
              status.push(item.status);
              total.push(item.total);
            });

            setStatus(status);
            setTotais(total);
          })
          .catch(error => {

              console.error(error);
          });
    }, []);
  
  const chartData = {
    labels: getStatus,
    datasets: [
      {
        data: getTotais,
        backgroundColor: ['#227e18', '#001600'],
      },
    ],
  };
  
  
  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  };
  
  return(
    <div style={{ 
        width: '100%', 
        maxHeight: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'column' }}
    >
        <strong>Aulas por Status</strong>
        <Doughnut data={chartData} options={options} />
    </div>
)
}

function AulasDadas(){

    const [getMatematica, setMatematica] = useState([])
    const [getGeografia, setGeografia] = useState([])
    const [getLinguaPortuguesa, setLinguaPortuguesa] = useState([])
    const [getBiologia, setBiologia] = useState([])

    useEffect(() => {
      fetch(`${store.getState().backEndUrl}aulas/qtd-aulas-meses`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("usuario")).token
        },
      })
          .then(response => {
              if (!response.ok) {
                  throw new Error('Erro na requisição');
              }
              return response.json();
          })
          .then(data => {

            const matematica = [];
            const geografia = [];
            const linguaPortuguesa = [];
            const biologia = [];

            data.forEach((item) => {
              if (item.materiaNome === 'Matematica') {
                matematica.push(item.total);
              } else if (item.materiaNome === 'Geografia') {
                geografia.push(item.total);
              } else if (item.materiaNome === 'Lingua Portuguesa') {
                linguaPortuguesa.push(item.total);
              } else if (item.materiaNome === 'Biologia') {
                biologia.push(item.total);
              }
            });

            setMatematica(matematica);
            setGeografia(geografia);
            setLinguaPortuguesa(linguaPortuguesa);
            setBiologia(biologia);
          })
          .catch(error => {

              console.error(error);
          });
    }, []);

    const labels = ['Agosto', 'Setembro', 'Outubro'];
            
    const chartData = {
      labels,
      datasets: [
        {
          label: 'Matemática',
          data: getMatematica,
          backgroundColor: '#114a0c',
        },
        {
          label: 'Português',
          data: getLinguaPortuguesa,
          backgroundColor: '#227e18',
        },
        {
          label: 'Geografia',
          data: getGeografia,
          backgroundColor: '#1a6412',
        },
        {
          label: 'Biologia',
          data: getBiologia,
          backgroundColor: '#001600',
        },
      ],
    };
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
    };
  
    return (
      <>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
        >
        <strong>Aulas Dadas</strong>
        <Bar data={chartData} options={options} />
      </div>
        </>
    );
};


function LucroMensal() {

    const [getLucro, setLucro] = useState();

    useEffect(() => {
      fetch(`${store.getState().backEndUrl}aulas/total-valor-aulas`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("usuario")).token
        },
      })
          .then(response => {
              if (!response.ok) {
                  throw new Error('Erro na requisição');
              }
              return response.json();
          })
          .then(data => {

            const lucro = [];

            for (let i = 0; i < data.length; i++) {
              lucro.push(data[i]);
            }

            setLucro(lucro)
              
          })
          .catch(error => {
              
              console.error(error);
          });
    }, []);

    const chartData = {
      labels: ['Agosto', 'Setembro', 'Outubro'],
      datasets: [
        {
          fill: true,
          label: 'Dataset 2',
          data: getLucro,
          borderColor: '#114a0c',
          backgroundColor: '#005d00b3',
        },
      ],
    };
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
    };
  
    return(
      <>
        <div style={{ 
            width: '100%', 
            maxHeight: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            flexDirection: 'column' }}
        >
            <strong>Lucro Mensal</strong>
            <Line data={chartData} options={options}/>
        </div>
      </>
    )
}

function LucroMateria() {

    const [getMateria, setMateria] = useState([])
    const [getLucro, setLucro] = useState([])

    useEffect(() => {
      fetch(`${store.getState().backEndUrl}aulas/preco-total-matematica`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("usuario")).token
        },
      })
          .then(response => {
              if (!response.ok) {
                  throw new Error('Erro na requisição');
              }
              return response.json();
          })
          .then(data => {

            const materia = [];
            const lucro = [];

            data.forEach((item) => {
                materia.push(item[1]);
                lucro.push(item[0]);
            });

            setMateria(materia);
            setLucro(lucro);
          })
          .catch(error => {

              console.error(error);
          });
    }, []);
  
  const chartData = {
    labels: getMateria,
    datasets: [
      {
        label: 'Vendas Mensais',
        data: getLucro,
        backgroundColor: ['#1a6412', '#114a0c', '#227e18', '#001600'],
        borderColor: '#001600',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return(
    <>
      <div style={{ 
          width: '100%', 
          maxHeight: '100%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          flexDirection: 'column' }}
      >
          <strong>Lucro Matéria</strong>
          <Bar data={chartData} options={options}/>
      </div>
    </>
  )
}

function UsuariosMeses() {
    
    const data = {
        labels: ['Agosto', 'Setembro', 'Outubro'],
        datasets: [
          {
            label: 'Alunos',
            data: [10, 15, 7, 10, 19],
            fill: false,
            borderColor: '#001600',
            backgroundColor: '#001600', 
            borderWidth: 2,
          },
          {
            label: 'Professores',
            data: [5, 8, 12, 5, 15],
            fill: false,
            borderColor: '#227e18',
            backgroundColor: '#227e18', 
            borderWidth: 2,
          },
        ],
    };
      
    const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
    };
    
    return(
        <div style={{ 
            width: '100%', 
            maxHeight: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            flexDirection: 'column' }}
        >
            <strong>Usuários</strong>
            <Line data={data} options={options} />
        </div>
    )
}


export {AulasDadas, LucroMensal, UsuariosMeses, StatusAula, LucroMateria};
