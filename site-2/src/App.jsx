import { logDOM } from '@testing-library/react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import RoundIndicator, { IndicatorStyle } from './components/RoundIndicator';
import UserCard from './components/UserCard';
import Card from './components/Card';

const map = (array, callback) => {
  const mapped = [];
  for (const element of array) {
    mapped.push(callback(element));
  }
  return mapped;
};

const App = () => {
  const users = [
    {id: 0, name: "Andrey Nazarenko", isOnline: false, onlineStatus: "Last seen 3h ago"},
    {id: 1, name: "Andrey Nazarenko", isOnline: true, onlineStatus: "Last seen 6h ago"},
    {id: 2, name: "Andrey Nazarenko", isOnline: false, onlineStatus: "Last seen 1h ago"},
    {id: 3, name: "Andrey Nazarenko", isOnline: true, onlineStatus: "Last seen 2h ago"},
  ];

  const usersMapped = users.map(user =>
    <UserCard key={user.id} name={user.name}
      isOnline={user.isOnline}
      onlineStatus={user.onlineStatus} />);

  return (
    <div className="wrapper">
      <Card avatarPosition="top" />
    </div>
  );
};

export default App;
