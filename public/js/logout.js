const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
    alert("You've successfully been logged out")
  } else {
    console.log(response);
    alert('Failed to Log Out');
  }
};

document.querySelector('#logout').addEventListener('click', logout);
