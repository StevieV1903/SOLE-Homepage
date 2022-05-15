import './App.css';
import AppStoreBtn from "./assets/AppleStore.png";
import GooglePlayBtn from "./assets/GoogleStore.png";
import Header from "./assets/SOLEMapHeader.png";
import DunbarMapIcon from "./assets/DunbarMapIcon.png";
import PrestonMapIcon from "./assets/PrestonMapIcon.png";
import NBMapIcon from "./assets/NBMapIcon.png";
import HaddingtonMapIcon from "./assets/HaddingMapIcon.png";
import MusselburghMapIcon from "./assets/MusselMapIcon.png";
import TranentMapIcon from "./assets/FaSideMapIcon.png";

const SoleHomepage = () => {
  
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={Header} alt="SOLE map header" />
      </header>
      <main className="App-main">
        <h1>Welcome to SOLE</h1>
          <p>SOLE is an app for your East Lothian community.</p>
          <p>SOLE provides an easy-to-use online shopping and community experience to rediscover and connect with local shops, services and amenities.</p>
          <p>Download the app today to browse and shop, book activities or events, find a local service, join a group, keep up with local news or go on a trail.</p>
          <p>The SOLE app is packed with special offers, competitions and promotions.</p>

            <div className="App-download-container">
              <img src={AppStoreBtn} alt="Apple Store download"  />
              {/* link to Apple App Store URL */}
              <img src={GooglePlayBtn} alt="Google Play Store download"  />
              {/* link to Google Play Store URL */}
            </div>

          <p>Local businesses now have the chance to trade together online to their community as well as in their physical spaces. If you’re a business you can register here:</p>
          <button>Register Now</button>
          {/* link to business registration page */}
          <h3>SOLE is available for the following East Lothian regions:</h3>
          <div className="App-county-container">
              <div className="App-county-item">
                <a href="">
                  {/* link to Dunbar town home page */}
                  <img src={DunbarMapIcon} className="App-county-logo" alt="Dunbar" />
                  <p>Dunbar and East Linton</p> 
                </a>
              </div>
              <div className="App-county-item">
                <a href="">
                   {/* link to Haddington town home page */}
                  <img src={HaddingtonMapIcon} className="App-county-logo" alt="Dunbar" />
                  <p>Haddington and Lammermuir</p> 
                </a>
              </div>
              <div className="App-county-item">
                <a href="">
                   {/* link to Musselburgh town home page */}
                  <img src={MusselburghMapIcon} className="App-county-logo" alt="Dunbar" />
                  <p>Musselburgh</p> 
                </a>
              </div>
              <div className="App-county-item">
                <a href="">
                   {/* link to North Berwick town home page */}
                  <img src={NBMapIcon} className="App-county-logo" alt="Dunbar" />
                  <p>North Berwick Coastal</p> 
                </a>
              </div>
              <div className="App-county-item">
                <a href="">
                   {/* link to Preston Seton Gosford town home page */}
                  <img src={PrestonMapIcon} className="App-county-logo" alt="Dunbar" />
                  <p>Preston, Seton and Gosford</p> 
                </a>
              </div>
              <div className="App-county-item">
                <a href="">
                   {/* link to Tranent town home page */}
                  <img src={TranentMapIcon} className="App-county-logo" alt="Dunbar" />
                  <p>Fa'side</p> 
                </a>
              </div> 
          </div>
      </main>
      {/* Application FOOTER component code will need to be added here. */}
    </div>
  );
}

export default SoleHomepage;

