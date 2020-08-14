import React, {useState} from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

function CadastroCategoria(){
    const [categorias, setCategorias] = useState(['teste','teste2' ])
    const valoresIniciais = {
        nome: 'Categoria inicial',
        descricao: 'Desc inicial',
        cor: '#000'
    }
    const [values, setValues] = useState(valoresIniciais)
    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>
            <form onSubmit={function handleSubmit(event){
                event.preventDefault()
                setCategorias([
                    ...categorias,
                    values
                ])
            }} >
                <div>
                <label>
                    Nome da Categoria
                    <input 
                    type="text"
                    value={values.nome}
                    onChange= {function handleFunction(e){
                        e.preventDefault()
                        setValues(e.target.value)
                        
                    }}
                    />
                </label>
                    </div>
                <div>
                <label>
                    Descrição:
                    <textarea 
                    type="text"
                    value={values.descricao}
                    onChange= {function handleFunction(e){
                        e.preventDefault()
                        setValues(e.target.value)
                        
                    }}
                    />
                </label>
                </div>
                <div>
                <label>
                    Cor:
                    <input 
                    type="color"
                    value={values.cor}
                    onChange= {function handleFunction(e){
                        e.preventDefault()
                        setValues(e.target.value)
                        
                    }}
                    />
                </label>
                </div>

                <button>
                    Cadastrar
                </button>
            </form>
            <ul>
                {categorias.map((categoria, index)=> {
                    return(
                        <li key={`${categoria}${index}`} >
                            {categoria}
                        </li>
                    )
                })}
            </ul>
            
            <Link to="/" >
                Ir para home
            </Link>
        </PageDefault>
    )
}
export default CadastroCategoria