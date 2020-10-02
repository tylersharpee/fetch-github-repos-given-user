const BASE_URL = 'https://api.github.com';
function handleSubmit() {
  $('.search').on('click', event => {
    let user = $('#user-search').val();
    $('#user-search').html('');
    $('.results').html('');
    fetch(`${BASE_URL}/users/${user}/repos`)
      .then(response => {return response.json();})
      .then(repos => {
        repos.forEach(repo=>
        {$('.results').append(`
          <h2>${repo.name}</h2>
          <p><a href=${repo.url} target='_blank'>Link to Repo</a></p>
        `);});
      });
  });
}
function main() {
  handleSubmit();
}
$(main);