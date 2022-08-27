const music = new Audio('./audio/pasori.mp3');

//creating array

const songs = [

    //song - 1
    {
        id:'1',
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"img/1.jpg"
    },

    //song - 2
    {
        id:'2',
        songName:`Alan Walker-Fade <br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"img/2.jpg"
    },

    //song - 3
    {
        id:'3',
        songName:`Alo <br>
        <div class="subtitle">Tashan</div>`,
        poster:"img/3.jpg"
    },

    //song - 4
    {
        id:'4',
        songName:`Oniket Prantor <br>
        <div class="subtitle">Artcell</div>`,
        poster:"img/4.jpg"
    },

    //song - 5
    {
        id:'5',
        songName:`Ei Obelay <br>
        <div class="subtitle">Shironamhin</div>`,
        poster:"img/5.jpg"
    },

    //song - 6
    {
        id:'6',
        songName:`Electronic Music <br>
        <div class="subtitle">Electro</div>`,
        poster:"img/6.jpg"
    },

    //song - 7
    {
        id:'7',
        songName:`Agar Tum Sath Ho <br>
        <div class="subtitle">Tamashaa</div>`,
        poster:"img/7.jpg"
    },

    //song - 8
    {
        id:'8',
        songName:`Suna Hai <br>
        <div class="subtitle">Neha Kakker</div>`,
        poster:"img/8.jpg"
    },

    //song - 9
    {
        id:"9",
        songName: `Dilbar<br><div class="subtitle">Satayamev Joyte</div>`,
        poster: "img/9.jpg",
    },

    //song - 10
    {
        id:"10",
        songName: `Duniya <br><div class="subtitle">Luka Chuppi</div>`,
        poster: "img/10.jpg",
    },

    //song - 11
    {
        id:"11",
        songName: `Lagdi Lahore Di <br><div class="subtitle">Street Dancer 3D</div>`,
        poster: "img/11.jpg",
    },

    //song - 12
    {
        id:"12",
        songName: `Bolte Bolte <br><div class="subtitle">Imran Mahmudul</div>`,
        poster: "img/12.jpg",
    },

    //song - 13
    {
        id:"13",
        songName: `Baarishein <br><div class="subtitle">Atif Aslam</div>`,
        poster: "img/13.jpg",
    },

    //song - 14
    {
        id:"14",
        songName: `Vaaste <br><div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "img/14.jpg",
    },

    //song - 15
    {
        id:"15",
        songName: `Lut Gaye <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/15.jpg",
    },
];


Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster; //adding poster
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName; //adding song title
});

//play , pause & wave active deactivated

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play(); // play music 
        masterPlay.classList.remove('bi-play-fill'); // remove play icon
        masterPlay.classList.add('bi-pause-fill'); // add pause icon
        wave.classList.add('active2'); // activating wave animation
    } 
    else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');  // add play icon
        masterPlay.classList.remove('bi-pause-fill'); // remove play icon
        wave.classList.remove('active2'); // deactivating wave animation
    }
} );



//  function for all plays
const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    });
};

// background changing function
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    });
};

//changing masterPlay (the bar on left) poster title artist name and playing music
let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        
        // playing song
        music.src = `audio/${index}.mp3`;

        //changing poster
        poster_master_play.src =`img/${index}.jpg`;
        music.play();

        //changing tittle
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        });

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        });

        // adding and removing play pause button and activating waves when music plays
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        // changing the background of song played
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
        
    });

});




// progresses bar section

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`; //check style.css line 273
    dot.style.left = `${seekbar}%`; //check style.css line 284
});

seek.addEventListener('change', ()=>{
    console.log(music.currentTime = seek.value * music.duration/100); //changing current time when i click on bar
});


//  next music sec
const next_music = () =>{
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    index++;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    });

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    });
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    makeAllPlays();
    document.getElementsByClassName('playListPlay')[index-1].classList.remove('bi-play-circle-fill')
    document.getElementsByClassName('playListPlay')[index-1].classList.add('bi-pause-circle-fill')
};

//  repeat music sec
const repeat_music = () =>{
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    index;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    });

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    });
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    makeAllPlays();
    document.getElementsByClassName('playListPlay')[index-1].classList.remove('bi-play-circle-fill')
    document.getElementsByClassName('playListPlay')[index-1].classList.add('bi-pause-circle-fill')
};


// //  random music sec
// const random_music = () =>{
//     masterPlay.classList.add('bi-pause-fill');
//     wave.classList.add('active2');
//     if(index == song_title.length){
//         index == 0;
//     };
//     index = Math.floor((Math.random() * song_title.length)+1);
//     music.src = `audio/${index}.mp3`;
//     poster_master_play.src =`img/${index}.jpg`;
//     music.play();
//     let song_title = songs.filter((ele)=>{
//         return ele.id == index;
//     });

//     song_title.forEach(ele =>{
//         let {songName} = ele;
//         title.innerHTML = songName;
//     });
//     makeAllBackgrounds();
//     Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
//     makeAllPlays();
//     document.getElementsByClassName('playListPlay')[index-1].classList.remove('bi-play-circle-fill')
//     document.getElementsByClassName('playListPlay')[index-1].classList.add('bi-pause-circle-fill')
// };


// shuffle section
let shuffle = document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML; 
    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.innerHTML='repeat';
            break;

        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.innerHTML='next';
            break;

        // case "random":
        //     shuffle.classList.remove('bi-arrow-repeat');
        //     shuffle.classList.add('bi-music-note-beamed');
        //     shuffle.classList.remove('bi-shuffle');
        //     shuffle.innerHTML='next';
        //     break;
    }
});


music.addEventListener('ended', ()=>{
    let b = shuffle.innerHTML;

    switch (b) {
        case "repeat":
            repeat_music();
            break;
        case "next":
            next_music();
            break;
        // case "random":
        //    random_music();
        //     break;

    }

})



// volume section 
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
});


//  Next and Previous Side
let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays();

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    });

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    });
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
});

// scrolling
let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
});

let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
});
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
});
