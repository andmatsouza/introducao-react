import React from 'react';
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
    </div>
  );
}

export default App;
