import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppHeader from "../appHeader/AppHeader";
import MainPage from '../pages/MainPage';
import ComicsPage from '../pages/ComicsPage';
// import Page404 from '../pages/404';



const App = () => {


   
   return (
      <Router>
         <div className="app">
            <AppHeader/>
            <main>
               <Routes>
                  <Route exact path="/" element={<MainPage/>}/>
                  <Route exact path="comics" element={<ComicsPage/>}/>
               </Routes>
             
            </main>
         </div>
      
      </Router>
   )
}

export default App;