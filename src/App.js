import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Article from './components/Article';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Comment from './components/Comment';
//import './app.css';
import { Container, HeaderSty, MenuSty, ConteudoSty} from './styles';

function App() {

  const comment = {
    date: new Date(),
    text: 'Maecenas interdum vestibulum odio nec tempor. ',
    author: {
      name: 'Anderson',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
  }

  const [nome, setNome] = useState("Anderson");
  const [produtoId, setProdutoId] = useState(3);
  const [produtoNome, setProdutoNome] = useState("");
  const [data, setData] = useState({
    nome: '',
    preco: ''
  })
  const [dados, setDados] = useState({
    nome_usuario: '',
    email_usuario: ''
});

const cadUsuario = e => {
  e.preventDefault();
  console.log("Nome: " + dados.nome_usuario);
  console.log("E-mail: " + dados.email_usuario);
}

const valorInput = e => setDados({...dados, [e.target.name]: e.target.value});

  function buscarProduto() {
    console.log("Procurar produto");
    setProdutoId(4); // ao setar um novo idproduto o useEffect é executado novamente
    setProdutoNome("Curso de react");
    setData({
      nome: "Curso React.js",
      preco: 245
    })
  }

  useEffect(() => {
    buscarProduto();
  },[produtoId]);

  const nomePerso = {
    color: "green",
    fontFamily: "Arial",
    fontSize: "18px"
  }

  return(
    <Container>
      <HeaderSty>
        <p>Logo</p>
      </HeaderSty>
      <MenuSty>
        Menu
      </MenuSty>
      <ConteudoSty>
        <span>Listar Usuários</span>
      </ConteudoSty>

      <hr />
      <Header />
      
      <Menu />
      <Article />
      <Comment 
      date={comment.date}
      text={comment.text}
      author={comment.author}
      />
      <Aside />
      <Footer />
      <hr />
        <p>Hooks - Usestate</p><br /><br />
        <p>{nome}</p>
        <button onClick={() => setNome("Anderson Mathias")}>Alterar</button>
      <hr />
      <p>Listar Produto</p>
      <p>{produtoNome}</p>

      <p style={nomePerso}>Listar Cursos</p>
      <p className='curso'>{data.nome}</p>
      <p>{data.preco}</p>

      <hr />
      <h1 style={{color: "#0000ff", fontSize: 15}}>Cadastrar</h1>
      <form onSubmit={cadUsuario}>
        <label>Nome:</label>
        <input type="text" name="nome_usuario" placeholder="Nome do cliente" onChange={valorInput}/><br /><br />

        <label>E-mail:</label>
        <input type="email" name="email_usuario" placeholder="Melhor e-mail do cliente" onChange={valorInput}/><br /><br />

        <button type='submit'>Cadastrar</button>
      </form>
      <hr />
    </Container>
  );
}

export default App;
