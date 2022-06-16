import './App.css';
import NewsList from './components/NewsList';
import Nav from './components/Nav';



function App() {
  return (

    <div className='container'>
      <div className='nav'><Nav /></div>
      <div className="content"><NewsList /></div>
      <div className='footer'>foooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
      oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooter</div>
    </div>
  );
}

export default App;
