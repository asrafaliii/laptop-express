import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './components/Post/Post'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Post></Post>
    </div>
  );
}

export default App;
