import React, {Fragment} from 'react';
import Header from './components/Header';
import SearchFoodDishes from './components/SearchFoodDishes';
import Footer from './components/Footer';

// saque por mientras el de busqueda para que pueda ver por pantalla lo que llevamos
const App = () => (
    <Fragment>
      <Header />
      
      <Footer />
    </Fragment>
);

App.displayName = 'App';

export default App;
