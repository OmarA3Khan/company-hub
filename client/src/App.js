import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/home.component';
import Authentication from './pages/authentication/auth.component';
import CompanyHub from './pages/companyHub/companyHub.component';
import Dashboard from './components/dashboard/dashboard.component';
import UserDirectory from './components/userDirectory/userDirectory.component';
import ProjectDirectory from './components/projectDirectory/projectDirectory.component';
import Communications from './components/communications/communications.component';
import Academy from './components/academy/academy.component';
import Profile from './components/profile/profile.component';

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
