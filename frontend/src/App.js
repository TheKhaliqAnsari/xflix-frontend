// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import LandingPage from './components/LandingPage';
import VideoPage from './components/VideoPage';
import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

export const config = {API_URL: `https://5decb229-1601-49ce-b144-353bcf14db63.mock.pstmn.io`};

function App() {
  return (
    <BrowserRouter>
   <Switch>
    <Route exact path="/">
      <LandingPage />
    </Route>
    <Route path="/video/:id">
      <LandingPage onVideoPage />
    </Route>
  </Switch>
  </BrowserRouter>
  );
}

export default App;

