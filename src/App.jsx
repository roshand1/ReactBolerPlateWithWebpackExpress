import './app.css';
import Header from './components/Header/Header.jsx';
import WebsiteDesign from './components/WebsiteDesign/WebsiteDesign.jsx';
import PrintingService from './components/PrintingService/PrintingService.jsx';
import SocialMedia from './components/SocialMediaMarketing/SocialMedia.jsx';
import SectionDivider from './components/SectionDivider/SectionDivider.jsx';
import Testimonies from './components/Testimonies/Testimonies.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
    return (
      <div className="App">
        <Header></Header>
        <div className="background-svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0f169b" fill-opacity="1" d="M0,288L60,293.3C120,299,240,309,360,288C480,267,600,213,720,181.3C840,149,960,139,1080,138.7C1200,139,1320,149,1380,154.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        </div>
          <div className="individual-section">
              <WebsiteDesign></WebsiteDesign>
          </div>
          <div className="individual-section">
              <PrintingService></PrintingService>
          </div>
          <div className="individual-section">
              <SocialMedia></SocialMedia>
          </div>
          <SectionDivider title='Testimonies'></SectionDivider>
          <div className="individual-section">
              <Testimonies/>
          </div>
          <Footer></Footer>
      </div>
    );
  }
  export default App;