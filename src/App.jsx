import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import TourPackages from './pages/TourPackages';
import TourPackageDetail from './pages/TourPackageDetail';
import Wishlist from './pages/Wishlist';
import ItineraryPlanner from './pages/ItineraryPlanner';
import Checkout from './pages/Checkout';
import PaymentSuccess from './pages/PaymentSuccess';

// Admin Components
import AdminLayout from './components/layout/AdminLayout';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import Orders from './pages/admin/Orders';
import Promos from './pages/admin/Promos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="destinations/:id" element={<DestinationDetail />} />
          <Route path="packages" element={<TourPackages />} />
          <Route path="packages/:id" element={<TourPackageDetail />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="itinerary" element={<ItineraryPlanner />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="success" element={<PaymentSuccess />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="orders" element={<Orders />} />
          <Route path="promos" element={<Promos />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
