import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import NavBar from './NavBar/NavBar';
import LandingPage from './LandingPage/LandingPage';
import NewReview from './NewReview/NewReview';
import ReviewDetail from './ReviewDetail/ReviewDetail';
import Footer from './Footer/Footer'
import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <NavBar />
      <div style={{ minHeight: 'calc(100vh - 120px)' }}>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/newReview' component={NewReview} />
          <Route exact path='/reviewDetail' component={ReviewDetail} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;