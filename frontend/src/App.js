import './App.css';
import { Route, Routes } from 'react-router-dom';

// Admin routes
import AddSlots from './AdminPages/AddSlots';
import AdminHome from './AdminPages/AdminHome';
import AdminDashboard from './AdminPages/AdminDashboard';
import NewRequests from './AdminPages/NewRequests';
import AvailableSlots from './AdminPages/AvailabelSlots';
import BookedSlots from './AdminPages/BookedSlots';
import AllData from './AdminPages/AllData';

function App() {


  return (
    <div>
      <Routes>

        {/* *********** Admin Routes ***************/}
        <Route exact path='/'
          element={<AdminHome />}
        />
        <Route exact path='/admindashboard'
          element={<AdminDashboard />}
        />
        <Route exact path='/newRequests'
          element={<NewRequests />}
        />
        <Route exact path='/addNewSlots'
          element={<AddSlots />}
        />
        <Route exact path='/availableSlots'
          element={<AvailableSlots />}
        />
        <Route exact path='/bookedSlots'
          element={<BookedSlots />}
        />
        <Route exact path='/allData'
          element={<AllData />}
        />

      </Routes>
    </div>
  );
}

export default App;
