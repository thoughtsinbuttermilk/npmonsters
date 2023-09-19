const post = async () => {
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    console.log('post js file', response)
};

document
  .querySelector('.post-card')
  .addEventListener('submit', post);