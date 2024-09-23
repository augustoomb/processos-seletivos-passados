import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import styles from './App.module.css';
import Login from './pages/Login';
import DataFilter from './pages/DataFilter';
import TeamData from './pages/TeamData';
import store from './redux/store';

function App() {
  return (
    <Provider store={ store }>
      <main className={ styles.container }>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/datafilter" element={ <DataFilter /> } />
          <Route path="/teamdata" element={ <TeamData /> } />
        </Routes>
      </main>
    </Provider>
  );
}

export default App;
