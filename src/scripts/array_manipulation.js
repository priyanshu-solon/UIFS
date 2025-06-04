var movies = [
    "MISSION : IMPOSIBLE",
    "FINAL DESTINATION"
];

function LoadMovies(){
    document.getElementById("lstMovies").innerHTML = "";
    movies.map(function(movie){
         var option = document.createElement("option");
         option.text  = movie;
         option.value = movie;
         document.getElementById("lstMovies").appendChild(option);
    })
    document.getElementById("lblCount").innerHTML =  `Total Count of Movies : ${movies.length}`;
}

function AddClick(){
    var movieName = document.getElementById("txtMovie").value;
    if(movies.indexOf(movieName.toUpperCase())===-1) {
         movies.push(movieName.toUpperCase());
        alert(`${movieName} Added to list`);
        LoadMovies();
        document.getElementById("txtMovie").value  = "";
    } else {
        alert(`${movieName} Exists`);
    }
}

function SortAsc(){
    movies.sort();
    LoadMovies();
}
function SortDsc(){
    movies.sort();
    movies.reverse();
    LoadMovies();
}
function DeleteClick(){
    var selectedMovieName = document.getElementById("lstMovies").value;
    var selectedMovieIndex = movies.indexOf(selectedMovieName);
    var choice = confirm(`Delete ${selectedMovieName}\nAre you sure want to delete?`);
    if(choice===true){
        movies.splice(selectedMovieIndex, 1);
        LoadMovies();
    }
}
function ClearAll(){
    movies.length = 0;
    LoadMovies();
}
function EditClick(){
    var movieName = document.getElementById("lstMovies").value;
    document.getElementById("txtEditMovie").value = movieName;
}
function SaveClick(){
    var newMovieName = document.getElementById("txtEditMovie").value;
    var selectedMovieName = document.getElementById("lstMovies").value;
    var selectedMovieIndex = movies.indexOf(selectedMovieName);
    var newMovieNameUpper = newMovieName.toUpperCase();
    movies[selectedMovieIndex] = newMovieNameUpper;
    LoadMovies();
}