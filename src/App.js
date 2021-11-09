import React from 'react';
import MaterialTable from 'material-table'; /* importando tabela do MaterialTable */

function App() {

  const colunas=[
    {
      title:'Artista',
      field:'artista'
    },
    {
      title:'Pais de origem',
      field:'pais'
    },
    {
      title:'Genero(s)',
      field:'genero'
    },
    {
      title:'Vendas',
      field:'vendas',
      type:"numeric"
    }
  ];

  const data=[
    {artista: 'The beatles', pais:'reino Unido', genero:'rock, pop', vendas:1000},
    {artista: 'Elvis', pais:'Estados unidos', genero:'Rock and roll, country', vendas:1000},
  ];

  return (
    <div >
      <MaterialTable
      columns={colunas}
      data={data}
      title="Crud em React e Material UI"
      actions={[
        {
        icon:'E',
        tooltip:'editar',
        onClick: (event, rowData)=>alert("Editar " +rowData.artista)
        },
        {
        icon:'D',
        tooltip:'deletar',
        onClick: (event, rowData)=>alert("Deletar " +rowData.artista)
        }
      ]}
      options={{
        actionsColumnIndex: -1
      }}
      localization={{
        header: {
          actions: "Ações Editar/Deletar"
        }
      }}
      />
    </div>
  );
}

export default App;