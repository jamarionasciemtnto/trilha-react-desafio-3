import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Feed } from './pages/feed';
import { CreateAccount } from './pages/sing-up'
import { Home } from './pages/home'
import { Login } from './pages/login'
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Router>
     <GlobalStyle />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sing-up" element={<CreateAccount />} />
        <Route path="/feed" element={<Feed />} />
     </Routes >
    </Router>
  );
}

export default App;
