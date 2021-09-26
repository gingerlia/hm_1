
import './App.css';

import img1 from './1.JPG';
import img2 from './2.JPG';
import img3 from './3.JPG';


function App() {
  return (
    <div className="container">
      
      <div class="div1 ">
        <div>This is the first one</div>
      </div>
      <div class="div2">
      <div>This is the second one</div>
      </div>
      <div class="div3">
      <div>This is the third one</div>
      </div>

      <div class="div4" >
      <img src={img1} width="200" height="200" /> </div>
      
      <div class="div5" >
      <img src={img2} width="200" height="200" /> </div>

      <div class="div6" >
      <img src={img3} width="200" height="200" /> </div>
      
    
 
    
    </div>
  );
}

export default App;
