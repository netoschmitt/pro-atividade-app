import  { useEffect, useState } from 'react'

const atividadeInicial = {
  id:0,
  titulo:'',
  prioridade:0,
  descricao: ''
}


export default function AtividadeForm(props) {
  const[atividade,setAtividade] = useState(atividadeAtual())

  // se ativSel. existir => setAtividade
  useEffect(()=>{
    if(props.ativSelecionada.id !== 0)
      setAtividade(props.ativSelecionada);
  }, [props.ativSelecionada]);  // vigiando o ativSelecionada
  
  
  const inputTextHandler = (e) => {
    const {name, value} = e.target;

    //add + 1 propriedade ao obj
    setAtividade({...atividade, [name]: value})
  }

  function atividadeAtual() {
    if(props.ativSelecionada.id !== 0){
      return props.ativSelecionada
    }
    else{
      return atividadeInicial;
    }
  }

  return (
    <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Título</label>
          <input
                name='titulo'
                value={atividade.titulo}
                onChange={inputTextHandler}
                id='titulo' type="text" className="form-control" />
        </div>

        <div className="col-md-6">
          <label className="form-label">Prioridade</label>
          <select
              name='prioridade'
              value={atividade.prioridade}
              onChange={inputTextHandler}
              id="prioridade" className="form-select">
              <option defaultValue="0">Selecione...</option>
              <option value='1'>Baixa</option>
              <option value='2'>Normal</option>
              <option value='3'>Alta</option>
          </select>
        </div>

       

        <div className="col-md-12">
          <label className="form-label">Descrição</label>
          <textarea
                name='descricao'
                value={atividade.descricao}
                onChange={inputTextHandler}
                id='descricao' type="text" className="form-control" />
        </div>
        <hr/>

        <div className="col-12">
          <button className='btn btn-outline-secondary' onClick={props.addAtividade}>
              + Atividade 
          </button>
        </div>
    </form>
  )
}




// <div className="col-md-6">
// <label className="form-label">Id</label>
// <input 
//   id='id' 
//   type="text" 
//   className="form-control"
//   // inputTextHandler
//   name='id'
//   onChange={inputTextHandler}


//   //  retorna maior elemento do id + 1 :>>>>>  Math.max.apply(Math, props.atividades.map(item => item.id)) + 1
//   value={atividade.id}  />
// </div>