import logo from './logo.svg';
import './App.css';
import Leftnav from './Leftnav';
import Centerbar from './Centerbar';
import Rightnav from './Rightnav';


function App() {
  return (
    <div className="App ">
      <div className='h-14 w-full mt-4 border-4 '> </div>
      <div className='flex'>
      <Leftnav/>
     <Centerbar/>
     <Rightnav/>
     
     </div>
     
    
    </div>
  );
}

export default App;
