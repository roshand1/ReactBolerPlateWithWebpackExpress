import Table from './components/Table/Table.jsx';
import './app.css';
import tableModel from './testmodel.js'
import Header from './components/Header/Header.jsx';
import WebsiteDesign from './components/WebsiteDesign/WebsiteDesign.jsx';

function App() {
    return (
      <div className="App">
          <div>
              <Header></Header>
          </div>
          <div>
              <WebsiteDesign></WebsiteDesign>
          </div>
      </div>
    );
  }
  export default App;