import Table from './components/Table/Table.jsx';
import './app.css';
import tableModel from './testmodel.js'
import Header from './components/Header/Header.jsx';
import SampleBody from './components/SampleBody/SampleBody.jsx';

function App() {
    return (
      <div className="App">
          <div>
              <Header></Header>
          </div>
          <div>
              <SampleBody></SampleBody>
          </div>
          <div>
              <Table tableModel/>
          </div>
      </div>
    );
  }
  export default App;