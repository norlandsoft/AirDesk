import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="search" class="search_baidu">
          <form action="http://www.baidu.com/s" method="GET" target="_blank">
            <input class="input_wd" type="text" name="wd" size="50" />
            <input class="input_submit" type="submit" value="百度" />
          </form>
        </div>

        <div id="search" class="search_google">
          <form action="https://www.google.com/search" method="GET" target="_blank">
            <input class="input_wd" type="text" name="q" size="50" />
            <input class="input_submit" type="submit" value="Google" />
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
