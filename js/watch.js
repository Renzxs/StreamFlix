let popularMovies = [
    {
        id: 1,
        name: "Transformer",
        img: "https://th.bing.com/th/id/R.a3b4944b23600cd77f6e265b520bdcc1?rik=aDMjyTNAfjlang&riu=http%3a%2f%2f1.bp.blogspot.com%2f-xMOyTBq3soo%2fT8YZ0Os-FnI%2fAAAAAAAAAJI%2f6O1omqV1_1U%2fs1600%2f59.jpg&ehk=BVwViAMgZYOYllEfpW6se%2bBe203aTG3C9g5%2bMjtLIn0%3d&risl=&pid=ImgRaw&r=0",
        url: "https://sflix.to/watch-movie/free-transformers-rise-of-the-beasts-hd-91042.9651472",
        rating: 4.5
    },
    {
        id: 2,
        name: "John Wick 4",
        img: "https://img.gurugamer.com/resize/1200x-/2020/07/03/john-wick-1-e22c.jpg",
        url: "https://sflix.to/watch-movie/free-john-wick-chapter-4-hd-90163.9466804",
        rating: 4.5
    },
    {
        id: 3,
        name: "Insidious",
        img: "https://www.daily-sun.com/assets/news_images/2023/07/10/Insidious.jpg",
        url: "https://sflix.to/watch-movie/free-insidious-the-red-door-hd-98131.9723604",
        rating: 4.5
    },
    {
        id: 4,
        name: "SPIDER-MAN: Across the Spider-Verse",
        img: "https://i0.wp.com/www.musclegeek.co/wp-content/uploads/2018/12/5636/intothespiderverse-1280-1543265684421_1280w.jpg?fit=1200%2C675&ssl=1",
        url: "https://sflix.to/watch-movie/free-spider-man-into-the-spider-verse-sequel-hd-66674.9653188",
        rating: 4.5
    },
    {
        id: 5,
        name: "The Flash (2023)",
        img: "https://simkl.in/fanart/11/11483902e81f040cf0_medium.jpg",
        url: "https://sflix.to/watch-movie/free-the-flash-hd-97519.9659065",
        rating: 4.5
    },
    {
        id: 6,
        name: "Guardians of the Galaxy",
        img: "https://www.murphysmultiverse.com/wp-content/uploads/2021/01/asdfljalsdf.jpg",
        url: "https://sflix.to/watch-movie/free-guardians-of-the-galaxy-vol-3-hd-12459.9600640",
        rating: 4.5
    },
];

let latestMovies = [
    {
        id: 1,
        name: "Shazam! Fury of the Gods",
        img: "https://th.bing.com/th/id/OIP.vM5fSwxVV4nQmkFncE-vNwHaEK?pid=ImgDet&rs=1",
        url: "https://sflix.to/watch-movie/free-shazam-fury-of-the-gods-hd-91642.9445318",
        rating: 4.5
    },
    {
        id: 2,
        name: "Fast X",
        img: "https://www.famousbirthdays.com/group_images/medium/fast-x-movie.jpg",
        url: "https://sflix.to/watch-movie/free-fast-and-furious-10-hd-8846.9651934",
        rating: 4.5
    },
    {
        id: 3,
        name: "Chupa",
        img: "https://media2.sacurrent.com/sacurrent/imager/u/original/31269220/chupa-native-00-53-53-21r2.jpg",
        url: "https://sflix.to/watch-movie/free-chupa-hd-95020.9519154",
        rating: 4.5
    },
    {
        id: 4,
        name: "Missing",
        img: "https://images.moviesanywhere.com/movie-hero/256cb1451b2f555a6338b6be814f6987.jpeg?r=16x9&w=2560",
        url: "https://sflix.to/watch-movie/free-missing-hd-93853.9416242",
        rating: 4.5
    }
];


let othersMovies = [
    {
        id: 1,
        name: "Fast X",
        img: "https://www.famousbirthdays.com/group_images/medium/fast-x-movie.jpg",
        url: "https://sflix.to/watch-movie/free-fast-and-furious-10-hd-8846.9651934",
        rating: 4.5
    },
    {
        id: 2,
        name: "SPIDER-MAN: Across the Spider-Verse",
        img: "https://i0.wp.com/www.musclegeek.co/wp-content/uploads/2018/12/5636/intothespiderverse-1280-1543265684421_1280w.jpg?fit=1200%2C675&ssl=1",
        url: "https://sflix.to/watch-movie/free-spider-man-into-the-spider-verse-sequel-hd-66674.9653188",
        rating: 4.5
    },
    {
        id: 3,
        name: "Transformer",
        img: "https://th.bing.com/th/id/R.a3b4944b23600cd77f6e265b520bdcc1?rik=aDMjyTNAfjlang&riu=http%3a%2f%2f1.bp.blogspot.com%2f-xMOyTBq3soo%2fT8YZ0Os-FnI%2fAAAAAAAAAJI%2f6O1omqV1_1U%2fs1600%2f59.jpg&ehk=BVwViAMgZYOYllEfpW6se%2bBe203aTG3C9g5%2bMjtLIn0%3d&risl=&pid=ImgRaw&r=0",
        url: "https://sflix.to/watch-movie/free-transformers-rise-of-the-beasts-hd-91042.9651472",
        rating: 4.5
    },
    {
        id: 4,
        name: "John Wick 4",
        img: "https://img.gurugamer.com/resize/1200x-/2020/07/03/john-wick-1-e22c.jpg",
        url: "https://sflix.to/watch-movie/free-john-wick-chapter-4-hd-90163.9466804",
        rating: 4.5
    },
    {
        id: 5,
        name: "Shazam! Fury of the Gods",
        img: "https://th.bing.com/th/id/OIP.vM5fSwxVV4nQmkFncE-vNwHaEK?pid=ImgDet&rs=1",
        url: "https://sflix.to/watch-movie/free-shazam-fury-of-the-gods-hd-91642.9445318",
        rating: 4.5
    },
];



const popular = document.getElementById("popular");
const latest = document.getElementById("latest");
const others = document.getElementById("others");

let pmovies = ""; // Popular Movies
let lmovies = ""; // Latest Movies
let omovies = ""; // Others Movies

function renderMovies(movietype, data, doc) {

    for(let i = 0; i < data.length; i++) {
        movietype += `
        <div class="movie">
            <img src="${data[i].img}">
            <div class="info">
                <div>
                    <p class="title">${data[i].name}</p>
                    <br>
                    <i class="fa fa-star"></i> ${data[i].rating}
                </div> 
                <a class="watch" href="${data[i].url}">WATCH NOW</a>
            </div>
        </div>
        `
    }
    doc.innerHTML = movietype;
}

renderMovies(pmovies, popularMovies, popular);
renderMovies(lmovies, latestMovies, latest);
renderMovies(omovies, othersMovies, others);