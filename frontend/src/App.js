
import './App.css';
import DrawerFeeds from './Components/DrawerFeeds';
import Navbar from './Components/Navbar';
import RequiredAuth from './Hoc/RequiredAuth';
import SingleFeed from './Pages/SingleFeed';
import Allroutes from './Routes/Allroutes';

function App() {
  return (
    <div className="App">
      {/* <h1>Instagram Clone</h1> */}
      <Navbar/>
      <Allroutes/>
   {/* <DrawerFeeds/> */}
    </div>
  );
}

export default App;
