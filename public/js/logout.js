const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/login');
    // alert("You've successfully been logged out")
  } else {
    alert('Failed to Log Out');
  }
};

document.querySelector('#logout').addEventListener('click', logout);
