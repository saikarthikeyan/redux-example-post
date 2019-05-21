import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import PostForm from './components/PostForm';
import { Provider} from 'react-redux';
import store from './store';



function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <PostForm />
        <hr/>
      <Post />

    </div>
    </Provider>
  );
}

export default App;
