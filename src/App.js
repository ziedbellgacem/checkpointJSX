
import './App.css';
import myImage from "./imageInSrc.jpg"

function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black',maxWidth:'100vw'}}>
      <h1 className='title red'>Zied Bellgacem</h1>
      <br/>
      <img src={myImage} alt="react" width="400" height="200" />
      <br/>
      <img src="/imageInPublic.jpg" width="400" height="200" alt="react"/>
      </div>
      <br/>
      <video widt="320" height="240" controls>
        <source src="/react js.mp4" type="video/mp4"/>

      </video>
    </div>
    
  );
}

export default App;
