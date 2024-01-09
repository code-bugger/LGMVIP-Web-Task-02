import './App.css';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://reqres.in/api/users?page=1');
      const result = await response.json();
      // Simulate a delay to show the spinner
      await new Promise(resolve => setTimeout(resolve, 500));
      setUsers(result.data); // Assuming the user data is in the 'data' property
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Navbar">
      <ul>
        <li><a href="/">LetsGrowMore</a></li>
        <li><a href="#news">News</a></li>
        <button onClick={loadUsers}>Get Users</button>
      </ul>
      {loading && <div className="Loader"></div>}
      <div className="CardContainer">
        {!loading && users.map((user) => (
          <div className='Card' key={user.id}>
            <div class="Container">
              <img src={user.avatar} alt='...'></img>
              <h4>{user.first_name} {user.last_name}</h4>
              <p>{user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
