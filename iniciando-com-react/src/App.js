import React from 'react';



function App(props) {

  const modificaNome = event => {
   console.log(event.target.value)
  }

  const criaComboBox = () => {
    const opcoes = ["Danilo", "Tito"]
    const comboxBoxOpcoes = opcoes.map(opcao => <option>{opcao}</option>)
    return (
      <select>
        {comboxBoxOpcoes}
      </select>
    )
  }



const MeuComboBox = () => criaComboBox()
return (
  <>
    <input className="text-centralizado" type="text" value={props.nome} onChange={modificaNome}></input>
    <h1>Ola {props.nome} sua idade é {props.idade}</h1>
     <MeuComboBox />

  </>
)

}


export default App;


