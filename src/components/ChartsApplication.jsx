import React, { useState, useEffect } from "react";
import { Bar, Line } from 'react-chartjs-2';
import { Chart as 
    ChartJS, 
    ArcElement, 
    Tooltip, 
    Legend, 
    CategoryScale, 
    LinearScale, 
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

function AulasDadas(){
  
  const [data, setData] = useState(null);
  const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmaWxpcGVAZW1haWwuY29tIiwiaWF0IjoxNjk4MjY4Njc4LCJleHAiOjE3MDE4Njg2Nzh9.SNOfaRzetJ4XWfk-4WwCuB49Kjr0VdEhep8cIc3vyH6pkLtj4x4Tpp6PDTiUXF0BASUSbGmvP0zT4dZ_oO9fHw';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/aulas/qtd-aulas-meses', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          console.error(`Error: ${response.status} - ${response.statusText}`);
          throw new Error('Erro ao buscar dados');
        }
        

        const jsonData = await response.json();

        const matematica = [];
        const geografia = [];
        const linguaPortuguesa = [];
        const biologia = [];

        jsonData.forEach((item) => {
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

        const labels = ['Agosto', 'Setembro', 'Outubro'];
        
        const chartData = {
          labels,
          datasets: [
            {
              label: 'Matemática',
              data: matematica,
              backgroundColor: '#114a0c',
            },
            {
              label: 'Português',
              data: linguaPortuguesa,
              backgroundColor: '#227e18',
            },
            {
              label: 'Geografia',
              data: geografia,
              backgroundColor: '#1a6412',
            },
            {
              label: 'Biologia',
              data: biologia,
              backgroundColor: '#001600',
            },
          ],
        };

        setData(chartData);
      } catch (error) {
        console.error('Houve um erro ao buscar os dados:', error);
      }
    };

    fetchData();
  }, [token]);

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
        maxHeight: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
      >
      <strong>Aulas Dadas</strong>
      {data ? <Bar data={data} options={options} /> : <p>Carregando dados...</p>}
    </div>
      </>
  );
};

function LucroMensal() {

  const [data, setData] = useState(null);
  const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmaWxpcGVAZW1haWwuY29tIiwiaWF0IjoxNjk4MjY4Njc4LCJleHAiOjE3MDE4Njg2Nzh9.SNOfaRzetJ4XWfk-4WwCuB49Kjr0VdEhep8cIc3vyH6pkLtj4x4Tpp6PDTiUXF0BASUSbGmvP0zT4dZ_oO9fHw';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/aulas/total-valor-aulas', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          console.error(`Error: ${response.status} - ${response.statusText}`);
          throw new Error('Erro ao buscar dados');
        }
        

        const jsonData = await response.json();
        
        const chartData = {
          labels: ['Agosto', 'Setembro', 'Outubro'],
          datasets: [
            {
              fill: true,
              label: 'Dataset 2',
              data: jsonData.map(item => item[1]),
              borderColor: '#114a0c',
              backgroundColor: '#005d00b3',
            },
          ],
        };

        setData(chartData);
      } catch (error) {
        console.error('Houve um erro ao buscar os dados:', error);
      }
    };

    fetchData();
  }, [token]);

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
        <strong>Lucro Mensal dos Professores</strong>
        {data ? <Line data={data} options={options} /> : <p>Carregando dados...</p>}    </div>
    </>
  )
}

export {AulasDadas, LucroMensal, UsuariosMeses};