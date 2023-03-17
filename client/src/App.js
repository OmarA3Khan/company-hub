import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/home.component';
import Authentication from './pages/authentication/auth.component';
import CompanyHub from './pages/companyHub/companyHub.component';
import Dashboard from './components/hub/dashboard/dashboard.component';
import UserDirectory from './components/hub/userDirectory/userDirectory.component';
import ProjectDirectory from './components/hub/projectDirectory/projectDirectory.component';
import Communications from './components/hub/communications/communications.component';
import Academy from './components/hub/academy/academy.component';
import Profile from './components/hub/profile/profile.component';

const App = () => {

  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='hub' element={<CompanyHub />}>
        {/* <Route path='test' element={<TestComponent />} /> */}
        <Route index element={ <Dashboard /> } />
        <Route path='user-directory' element={<UserDirectory />} />
        <Route path='project-directory' element={<ProjectDirectory />} />
        <Route path='communications' element={<Communications />} />
        <Route path='academy' element={<Academy />} />
        <Route path='profile' element={<Profile />} />
      </Route>
      <Route path='auth' element={<Authentication />} />
    </Routes>
    
  );
};

export default App;
