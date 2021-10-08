
import './App.css';
import Borderbox from './components/Borderbox';
import Content from './components/Content';
import Nbar from './components/Nbar';
import Subnav from './components/Subnav';

function App() {
  return (
    <div className="App">
      <Nbar/>
      <Subnav/>
      <Borderbox/>
      <Content/>
    </div>
  );
}

export default App;
