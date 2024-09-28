var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
var download = document.getElementById('download');
var button = document.getElementById('button');
download.addEventListener('click', function () {
    alert("CV downloaded successfully");
});
