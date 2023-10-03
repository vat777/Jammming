import logo from '../../assets/logo.svg'
import './App.css';
import '../../assets/general.css';

function App() {
  return (
    <>
      <header>
        <h1>Ja<span className='purple'>mmm</span>ing</h1>
      </header>

      <form className='search-container'>
        <input className='search-input' type="text" />
        <button className='button'>SEARCH</button>
      </form>

      

    </>
  );
}

export default App;
