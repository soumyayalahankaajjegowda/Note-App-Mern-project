import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return ( 
  < >
    <Router>
      <Head />
      <Routes>
         <Route path={"/add"} element={<AddForm/>}/>
      </Routes>
    </Router>
  </>
  );
}

export default App;
