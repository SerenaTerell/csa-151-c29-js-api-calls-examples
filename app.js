const ids = ['get', 'delete', 'post', 'put', 'error'];

ids.forEach(id => {
  const button = document.getElementById(id);
  button.addEventListener('click', () => {

    switch (button.id) {

      case 'get': // -----------------------
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(json => console.log(json));
        break;

      case 'delete': // -----------------------
        fetch(
          'https://jsonplaceholder.typicode.com/posts/1',
          {
              method: 'DELETE'
            }
          );
        break;

      case 'post': // -----------------------
        fetch(
          'https://jsonplaceholder.typicode.com/posts',
          {
            method: 'POST',
            body: JSON.stringify({
              title: 'foo',
              body: 'bar',
              userId: 1
            }),
            headers: {
              "Content-Type": "application/json; charset=UTF-8"
            }
          })
        .then(response => response.json())
        .then(json => console.log(json));
        break;

      case 'put': // -----------------------
        fetch(
          'https://jsonplaceholder.typicode.com/posts/1',
          {
            method: 'PUT',
            body: JSON.stringify({
              id: 1,
              title: 'foo',
              body: 'bar',
              userId: 1
            }),
            headers: {
              "Content-Type": "application/json; charset=UTF-8"
            }
          })
          .then(response => response.json())
          .then(json => console.log(json));
        break;

      case 'error': // -----------------------
        fetch('https://jsonplaceholder.typicode.com/posts/0')
          .then(response => {
            if (!response.ok) throw new Error('Operation not successful');
            return response.json();
          })
          .then(json => console.log(json))
          .catch(err => console.error(err));
        break;

      default:
        console.log('Button not found');
    }
  });
});
