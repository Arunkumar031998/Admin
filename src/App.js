import logo from './logo.svg';
import './App.css';
import Container from './components/Container';
import { Provider } from 'react-redux'
import store from './redux/store'
import TopicCotainer from './components/TopicCotainer';
import { Route, Routes } from 'react-router-dom'
import AddArticle from './components/AddArticle';
import ArticleData from './components/ArticleData';
import AddSteps from './components/AddSteps';
import UpdateTopic from './components/UpdateTopic';
import UpdateArticle from './components/UpdateArticle';
import UpdateSteps from './components/UpdateSteps';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <TopicCotainer/>
       <Routes>
       <Route  exact path="/addarticle/:id" element={<AddArticle/>}/>
       <Route  exact path="/addsteps/:id/:aid" element={<AddSteps/>}/>
       <Route  exact path="/updatetopic/:id" element={<UpdateTopic/>}/>
       <Route  exact path="/updatearticle/:id/:aid" element={<UpdateArticle/>}/>
       <Route  exact path="/updatearticle/:id/:aid/:sid" element={<UpdateSteps/>}/>
       </Routes>
    </div>
    </Provider>
  );
}

export default App;
