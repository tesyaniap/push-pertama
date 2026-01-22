// Fetch data dari API
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    // Hide loading
    document.querySelector('.loading').style.display = 'none';
    
    const userList = document.getElementById('user-list');
    
    users.forEach(user => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${user.name}</strong> - ${user.email}
        <br>
        <small>Phone: ${user.phone} | Website: ${user.website}</small>
        <br>
        <small>Address: ${user.address.city}, ${user.address.zipcode}</small>
      `;
      userList.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Error:', error);
    document.querySelector('.loading').textContent = 'Error loading data';
  });