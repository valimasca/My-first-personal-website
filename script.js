$(document).ready(function () {
    $(".cardSocialMedia").hover(function () {
        $(this).css("font-size", "60px");
    });
});



function loadRepos() {
    let repo = new XMLHttpRequest();
    repo.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let repObj = JSON.parse(this.responseText);
            document.getElementById("name0").innerHTML = repObj[0].name;
            document.getElementById("name1").innerHTML = repObj[1].name;
            document.getElementById("name2").innerHTML = repObj[2].name;
        }
    };
    repo.open("GET", "https://api.github.com/users/valimasca/repos", true);
    repo.send();
}
