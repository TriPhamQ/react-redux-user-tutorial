import React from 'react';
import UsersList from '../containers/users-list';
import UserDetail from '../containers/user-details';

const App = () => (
  <div>
    <h2>User List</h2>
    <UsersList />
    <hr/>
    <h2>User Details</h2>
    <UserDetail />
  </div>
);

export default App;