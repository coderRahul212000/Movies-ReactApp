import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourite from './Components/Favourite';
import {BrowserRouter as Router,Switch,Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
       <Router>
          <Navbar/>
          <Switch>
            {/* {/* <Route path='/' component={Movies}/>  isko uthakr niche dalna hoga ye hai way number 1* /}
            <Route path='/favourites' component={Favourite}/>
            <Route path='/' component={Movies}/>   */}

            {/* way number 2  by using exact ab jb issai exact "/" milega tb hi ye chalega*/}
             
             <Route path="/" exact   render={(props)=>(
                 <> 
                    <Banner {...props}/>
                    <Movies {...props}/>
                 </>
             )} />
             <Route path="/favourites" component={Favourite}/>  
             <Route/>

          </Switch>
           {/* <Banner/> */}
            {/* <Movies/>  */}
          {/* <Favourite/> */}

       </Router>

  );
}

export default App;
