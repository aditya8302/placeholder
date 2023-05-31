import SignUp from './signup/signup';
import Login from './login/login';
import FoodBank from './user/foodbank';
import Restaurant from './user/restaurant';
import Donation from './donationForm/DonationForm';
// import Feed from './feed/feed';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from './feed/feed';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Feed />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/foodbank" element={<FoodBank />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/resturant" element={<Restaurant />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
