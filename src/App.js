import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Article from './components/Article';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Comment from './components/Comment';

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

  return(
    <div>
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

      <p>Listar Cursos</p>
      <p>{data.nome}</p>
      <p>{data.preco}</p>
    </div>
  );
}

export default App;
