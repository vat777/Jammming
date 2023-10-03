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

      <div className='result-playlist-container'>
        
        <div className='result-container'>
          <h2>Search results:</h2>
          
          <table>
            <thead>
              <tr>
                <th>Artist</th>
                <th>Song</th>
                <th>Album</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rezz</td>
                <td>Menace</td>
                <td>Nightmare on </td>
                <td>+</td>
              </tr>

              <tr>
                <td>Rezz</td>
                <td>Menace</td>
                <td>Nightmare on </td>
                <td>+</td>
              </tr>

              <tr>
                <td>Rezz</td>
                <td>Menace</td>
                <td>Nightmare on </td>
                <td>+</td>
              </tr>
              
            </tbody>
          </table>

        </div>

        <div className='playlist-container'>

        </div>

      </div>

    </>
  );
}

export default App;
