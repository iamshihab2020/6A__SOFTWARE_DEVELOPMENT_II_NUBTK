<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
    <link rel="stylesheet" href="./style.css">
    <title>Music App</title>
</head>
<body>
<header>
    <div class="menu_side">
        <h1>Playlist</h1>
        <div class="playlist">
            <h4 class="active"><span></span><i class="bi bi-music-note-beamed"></i> Playlist</h4>
        </div>
        <div class="menu_song">
            <li class="songItem">
                <span>01</span>
                <img src="img/1.jpg" alt="Alan">
                <h5>
                    On My Way
                    <div class="subtitle">Alan Walker</div>
                </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="1"></i>
            </li>
            <li class="songItem">
                <span>02</span>
                <img src="img/1.jpg" alt="Alan">
                <h5>
                    On My Way
                    <div class="subtitle">Alan Walker</div>
                </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="2"></i>
            </li>
            <li class="songItem">
                <span>03</span>
                <img src="img/1.jpg" alt="Alan">
                <h5>
                    On My Way
                    <div class="subtitle">Alan Walker</div>
                </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="3"></i>
            </li>
            <li class="songItem">
                <span>04</span>
                <img src="img/1.jpg" alt="Alan">
                <h5>
                    On My Way
                    <div class="subtitle">Alan Walker</div>
                </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="4"></i>
            </li>
            <li class="songItem">
                <span>05</span>
                <img src="img/1.jpg" alt="Alan">
                <h5>
                    On My Way
                    <div class="subtitle">Alan Walker</div>
                </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="5"></i>
            </li>
            <li class="songItem">
                <span>06</span>
                <img src="img/1.jpg" alt="Alan">
                <h5>
                    On My Way
                    <div class="subtitle">Alan Walker</div>
                </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="6"></i>
            </li>
        </div>
    </div>
    <div class="song_side">
        <nav>
            <ul>
                <li>Discover <span></span></li>
                <!-- <li>MY LIBRARY</li>
                <li>RADIO</li> -->
            </ul>
            <!-- <div class="search">
                <i class="bi bi-search"></i>
                <input type="text" placeholder="Search Music...">
            </div> -->
            <div class="user">
                <!-- <img src="img/KDS CODER.png" alt="User" title="KDS CODER (Jahid Khan)"> -->
                <a href="logout.php" title="Logout"><i class="bi bi-door-closed-fill"></i></a>
            </div>
        </nav>
        <!-- <div class="content">
            <h1>Alen Walker-Fade</h1>
            <p>
                You were the shadow to my light Did you feel us Another start You fade 
                <br>
                Away afraid our aim is out of sight Wanna see us Alive
            </p>
            <div class="buttons">
                <button>PLAY</button>
                <button>FOLLOW</button>
            </div>
        </div> -->
        <div class="popular_song">
            <div class="h4">
                <h4>Popular Song</h4>
                <div class="btn_s">
                    <i id="left_scroll" class="bi bi-arrow-left-short"></i>
                    <i id="right_scroll" class="bi bi-arrow-right-short"></i>
                </div>
            </div>
            <div class="pop_song">
                <li class="songItem">
                    <div class="img_play">
                        <img src="img/1.jpg" alt="alan">
                        <i class="bi playListPlay bi-play-circle-fill" id="7"></i>
                    </div>
                    <h5>On My Way
                        <br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                </li>
                <li class="songItem">
                    <div class="img_play">
                        <img src="img/1.jpg" alt="alan">
                        <i class="bi playListPlay bi-play-circle-fill" id="8"></i>
                        <!-- change All id  -->
                    </div>
                    <h5>On My Way
                        <br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                </li>
                <li class="songItem">
                    <div class="img_play">
                        <img src="img/1.jpg" alt="alan">
                        <i class="bi playListPlay bi-play-circle-fill" id="9"></i>
                    </div>
                    <h5>On My Way
                        <br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                </li>
                
                <li class="songItem">
                    <div class="img_play">
                        <img src="img/1.jpg" alt="alan">
                        <i class="bi playListPlay bi-play-circle-fill" id="10"></i>
                    </div>
                    <h5>On My Way
                        <br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                </li>
                <li class="songItem">
                    <div class="img_play">
                        <img src="img/1.jpg" alt="alan">
                        <i class="bi playListPlay bi-play-circle-fill" id="11"></i>
                    </div>
                    <h5>On My Way
                        <br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                </li>
                <li class="songItem">
                    <div class="img_play">
                        <img src="img/1.jpg" alt="alan">
                        <i class="bi playListPlay bi-play-circle-fill" id="12"></i>
                    </div>
                    <h5>On My Way
                        <br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                </li>
                <li class="songItem">
                    <div class="img_play">
                        <img src="img/1.jpg" alt="alan">
                        <i class="bi playListPlay bi-play-circle-fill" id="13"></i>
                    </div>
                    <h5>On My Way
                        <br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                </li>
                <li class="songItem">
                    <div class="img_play">
                        <img src="img/1.jpg" alt="alan">
                        <i class="bi playListPlay bi-play-circle-fill" id="14"></i>
                    </div>
                    <h5>On My Way
                        <br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                </li>
                <li class="songItem">
                    <div class="img_play">
                        <img src="img/1.jpg" alt="alan">
                        <i class="bi playListPlay bi-play-circle-fill" id="15"></i>
                    </div>
                    <h5>On My Way
                        <br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                </li>
                
            </div>
        </div>
        
    </div>
    <div class="master_play">
        <div class="wave">
            <div class="wave1"></div>
            <div class="wave1"></div>
            <div class="wave1"></div>
        </div>
        <img src="img/26th.jpg" alt="Alan" id="poster_master_play">
        <h5 id="title">Pasori<br>
            <div class="subtitle">Ali Seth & Shae Gill</div>
        </h5>
        <div class="icon">
            <i class="bi shuffle bi-music-note-beamed" id="lo" title="Repeat">repeat</i>            
            <i class="bi bi-skip-start-fill" id="back"  title="Previous"></i>
            <i class="bi bi-play-fill" id="masterPlay"  title="Play"></i>
            <i class="bi bi-skip-end-fill" id="next"  title="Next"></i>
        </div>
        <span id="currentStart">0:00</span>
        <div class="bar">
            <input type="range" id="seek" min="0" value="0" max="100">
            <div class="bar2" id="bar2"></div>
            <div class="dot"></div>
        </div>
        <span id="currentEnd">0:00</span>
        <div class="vol">
            <i class="bi bi-volume-down-fill" id="vol_icon" title="Volume"></i>
            <input type="range" id="vol" min="0" value="30" max="100">
            <div class="vol_bar"></div>
            <div class="dot" id="vol_dot"></div>
        </div>
    </div>
</header>
    <script src="script.js"></script>
</body>
</html>