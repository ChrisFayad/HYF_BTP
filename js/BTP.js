// Navigation Bar
function myFunction() {
  var x = document.getElementById("mTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    document.getElementById("Mob-nav").setAttribute("aria-expanded","true");
  } else {
    x.className = "topnav";
    document.getElementById("Mob-nav").setAttribute("aria-expanded","false");
  }
}
// search bar
var searchClick = 0;

document.getElementById('default_option').addEventListener("click", function() {
  searchClick += 1;
  if (searchClick%2 == 0) {
    document.getElementById("list_option").style.display = "none";
  }
  else {
    document.getElementById("list_option").style.display = "block";
  }
});

var option = document.getElementById("list_option").getElementsByTagName("li");

option[0].addEventListener("click", function() {
  document.getElementById('default_option').innerHTML = "All";
  document.getElementById("list_option").style.display = "none";
});

option[1].addEventListener("click", function() {
  document.getElementById('default_option').innerHTML = "Anime";
  document.getElementById("list_option").style.display = "none";
});

option[2].addEventListener("click", function() {
  document.getElementById('default_option').innerHTML = "Series";
  document.getElementById("list_option").style.display = "none";
});

var go_btn = document.getElementById('go');
var input = document.getElementById('search_in');
var icon = document.getElementById('s_icon');

input.addEventListener("click", function() {
  icon.style.right = "0px";
  icon.style.left = "10px";
  input.style.marginLeft = "45px";
  if (go_btn.className === "btn") {
    go_btn.className +="show";
   }
});

go_btn.addEventListener("click", function() {
  go_btn.className = "btn";
  icon.style.left = "270px";
  input.style.marginLeft = "0";
  document.getElementById('search_in').value = "";
});
// like / dislike counter
var like_Count = document.getElementsByClassName("like-count");
var dislike_Count = document.getElementsByClassName("dislike-count");

function likeCount() {
  like_Count[slideIndex-1].value = parseInt(like_Count[slideIndex-1].value) + 1;
}

function dislikeCount() {
  dislike_Count[slideIndex-1].value = parseInt(dislike_Count[slideIndex-1].value) + 1;
}
// slideshow for series
var slideIndex = 1;
slider(slideIndex);

function more(n) {
  slider(slideIndex += n);
}

function slider(n) {
  var i;
  var series_Slide = document.getElementsByClassName("seriesList");
  if (n > series_Slide.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = series_Slide.length;
  }
  for (i=0; i < series_Slide.length; i++) {
    series_Slide[i].style.display = "none";
  }
  series_Slide[slideIndex-1].style.display = "block";
}
// stacked card
  var content = document.getElementsByClassName("content");
  var currentItem = document.getElementsByClassName('content active');
  var inactive = document.getElementsByClassName("inactive");

  var i = 0;
  var step = 10;
  var layer = inactive.length;

  document.getElementById('next-poster').addEventListener("click", function() {
    var lastItem = content[content.length-1];
    var contentFirst = content[0];
    console.log(contentFirst);
    content[i].classList.remove("active");

    i = i + 1;
    step += 10;
    layer -= 1;
    if (i < content.length) {
      var nextItem = content[i];

      currentItem = nextItem.classList.add("active");
      document.getElementById("step").style.width = step+"%";
      inactive[layer].style.height = "0";
      inactive[layer].style.marginLeft = "0px";
      inactive[layer].style.marginRight = "0px";
    }
    else if (i == content.length) {
      currentItem = contentFirst.classList.add("active");
      console.log(currentItem);
      step = 10;
      document.getElementById("step").style.width = step+"%";
      i = 0;
      layer = inactive.length;
      inactive[0].style.height = "8px";
      inactive[0].style.marginLeft = "90px";
      inactive[0].style.marginRight = "90px";
      inactive[1].style.height = "8px";
      inactive[1].style.marginLeft = "80px";
      inactive[1].style.marginRight = "80px";
      inactive[2].style.height = "8px";
      inactive[2].style.marginLeft = "70px";
      inactive[2].style.marginRight = "70px";
      inactive[3].style.height = "8px";
      inactive[3].style.marginLeft = "60px";
      inactive[3].style.marginRight = "60px";
      inactive[4].style.height = "8px";
      inactive[4].style.marginLeft = "50px";
      inactive[4].style.marginRight = "50px";
      inactive[5].style.height = "8px";
      inactive[5].style.marginLeft = "40px";
      inactive[5].style.marginRight = "40px";
      inactive[6].style.height = "8px";
      inactive[6].style.marginLeft = "30px";
      inactive[6].style.marginRight = "30px";
      inactive[7].style.height = "8px";
      inactive[7].style.marginLeft = "20px";
      inactive[7].style.marginRight = "20px";
      inactive[8].style.height = "8px";
      inactive[8].style.marginLeft = "10px";
      inactive[8].style.marginRight = "10px";
    }
  });
// gallery show
var gallery_page = 0;

function next_group() {
  gallery_page += 1;
  galleryShow();
}

function prev_group() {
  gallery_page -= 1;
  galleryShow();
}

var fig1 = document.getElementById("fig-1");
var fig2 = document.getElementById("fig-2");
var fig3 = document.getElementById("fig-3");
var fig4 = document.getElementById("fig-4");
var fig5 = document.getElementById("fig-5");

var rmLink = document.getElementsByClassName("rm-link");
var rmText = document.getElementsByClassName("more");

function galleryShow() {

  if (gallery_page > 3 || gallery_page < -3) {
    gallery_page = 0;
  }
  if (gallery_page == 1 || gallery_page == -3) {
    fig1.getElementsByTagName("img")[0].src = "images/Anime/Pinocchio.jpg";
    fig1.getElementsByTagName("img")[0].alt = "Pinocchio";
    fig1.getElementsByTagName("figcaption")[0].innerHTML = "A living puppet, with the help of a cricket as his conscience, must prove himself worthy to become a real boy.";
    fig2.getElementsByTagName("img")[0].src = "images/Anime/Pokemon.jpg";
    fig2.getElementsByTagName("img")[0].alt = "Pokemon";
    fig2.getElementsByTagName("figcaption")[0].innerHTML = "Ash Ketchum, his yellow pet Pikachu, and his human friends explore a world of powerful creatures.";
    fig3.getElementsByTagName("img")[0].src = "images/Anime/Popeye_The_Sailor.jpg";
    fig3.getElementsByTagName("img")[0].alt = "Popeye The Sailor";
    fig3.getElementsByTagName("figcaption")[0].innerHTML = "The continuing animated adventures of Olive Oyl, Wimpy, Swee'pea and Popeye.";
    fig4.getElementsByTagName("img")[0].src = "images/Anime/Remi.jpg";
    fig4.getElementsByTagName("img")[0].alt = "Remi";
    fig4.getElementsByTagName("figcaption")[0].innerHTML = "A compelling story in which orphaned Remi gets hired out to a traveling street entertainer Vitalis when her foster parents fall on hard times.";
    fig5.getElementsByTagName("img")[0].src = "images/Anime/Robin_Hood.jpg";
    fig5.getElementsByTagName("img")[0].alt = "Robin Hood";
    fig5.getElementsByTagName("figcaption")[0].innerHTML = "Several centuries ago in Nottingham County, a cruel and greedy baron by the name of Alwine ordered the"+'<br><span id="Robin_Hood-dots" class="rm-link">read more</span><span class="more">'+" destruction of the Huntingtons' castle - from the fire of which Robin and his cousins, Will, Winifred and Barbara, miraculously escaped."+'</span>';
    document.getElementById('Robin_Hood-dots').addEventListener("click", function() {
      rmLink[0].style.display = "none";
      rmText[0].style.display = "inline";
    });
  }
  else if (gallery_page == 2 || gallery_page == -2) {
      fig1.getElementsByTagName("img")[0].src = "images/Anime/Romeo.jpg";
      fig1.getElementsByTagName("img")[0].alt = "Romeo and the Black Brothers";
      fig1.getElementsByTagName("figcaption")[0].innerHTML = "the story about the boy Romeo, who was living with his family in a small village in Switzerland and then decide to"+'<br><span id="Romeo-dots" class="rm-link">read more</span><span class="more">'+" lease himself to his need for money after the crowman burn their farm for a period of six months, he goes to the Italian city of Milan and starts there to work in cleaning chimneys."+'</span>';
      document.getElementById('Romeo-dots').addEventListener("click", function() {
        rmLink[0].style.display = "none";
        rmText[0].style.display = "inline";
      });
      fig2.getElementsByTagName("img")[0].src = "images/Anime/Sally.jpg";
      fig2.getElementsByTagName("img")[0].alt = "Little Princess Sally";
      fig2.getElementsByTagName("figcaption")[0].innerHTML = "Sara Crewe arrives in London with her wealthy father to enter Miss Minchin's boarding school for young ladies."+'<br><span id="Sally-dots" class="rm-link">read more</span><span class="more">'+" Despite an unhappy incident which makes Miss Minchin vexed with her, she leads a contented life until one day, her birthday, the news of the sudden death of her father plunges her into poverty."+'</span>';
      document.getElementById('Sally-dots').addEventListener("click", function() {
        rmLink[1].style.display = "none";
        rmText[1].style.display = "inline";
      });
      fig3.getElementsByTagName("img")[0].src = "images/Anime/Sandybell.jpg";
      fig3.getElementsByTagName("img")[0].alt = "Hello! Sandy Bell";
      fig3.getElementsByTagName("figcaption")[0].innerHTML = "Hello! Sandybell is the story of a girl who lives in Scotland with her father. She spends her time playing with her faithful dog (Oliver) and her friends.";
      fig4.getElementsByTagName("img")[0].src = "images/Anime/Sasuke.jpg";
      fig4.getElementsByTagName("img")[0].alt = "Ninja, the Wonder Boy";
      fig4.getElementsByTagName("figcaption")[0].innerHTML = "Set in Feudal Japan each week the brave but buffoonish young trainee ninja Sasuke would fight to defend his"+'<br><span id="Sasuke-dots" class="rm-link">read more</span><span class="more">'+" region and friends from the evil intentions of Master Ninja Hanzo and the rival Iga Clan."+'</span>';
      document.getElementById('Sasuke-dots').addEventListener("click", function() {
        rmLink[2].style.display = "none";
        rmText[2].style.display = "inline";
      });
      fig5.getElementsByTagName("img")[0].src = "images/Anime/Slam_Dunk.jpg";
      fig5.getElementsByTagName("img")[0].alt = "Slam Dunk";
      fig5.getElementsByTagName("figcaption")[0].innerHTML = "About Sakuragi Hanamichi, a freshman of Shohoku High School who joins the basketball team because of the"+'<br><span id="Slam_Dunk-dots" class="rm-link">read more</span><span class="more">'+" girl he has a crush on, Haruko. Although he is newbie in this sport, he is no ordinary basketball player."+'</span>';
      document.getElementById('Slam_Dunk-dots').addEventListener("click", function() {
        rmLink[3].style.display = "none";
        rmText[3].style.display = "inline";
      });
  }
  else if (gallery_page == 3 || gallery_page == -1) {
      fig1.getElementsByTagName("img")[0].src = "images/Anime/Teenage_Mutant_Ninja_Turtles.jpg";
      fig1.getElementsByTagName("img")[0].alt = "Teenage Mutant Ninja Turtles";
      fig1.getElementsByTagName("figcaption")[0].innerHTML = "Four teenage mutant ninja turtles emerge from the shadows to protect New York City from a gang of criminal ninjas.";
      fig2.getElementsByTagName("img")[0].src = "images/Anime/The_Flintstones.jpg";
      fig2.getElementsByTagName("img")[0].alt = "The Flintstones";
      fig2.getElementsByTagName("figcaption")[0].innerHTML = "The misadventures of two modern-day Stone Age families, the Flintstones and the Rubbles.";
      fig3.getElementsByTagName("img")[0].src = "images/Anime/The_Magic_School_Bus.jpg";
      fig3.getElementsByTagName("img")[0].alt = "The Magic School Bus";
      fig3.getElementsByTagName("figcaption")[0].innerHTML = "An eccentric school-teacher takes her class on wondrous educational field trips with the help of a magical school bus.";
      fig4.getElementsByTagName("img")[0].src = "images/Anime/The_Racing_Brothers.jpg";
      fig4.getElementsByTagName("img")[0].alt = "The Racing Brothers";
      fig4.getElementsByTagName("figcaption")[0].innerHTML = "Two competitive brothers, Go and Retsu, meet a man named Dr. Tsuchiya who gives them two cars and tells them to"+'<br><span id="The_Racing_Brothers-dots" class="rm-link">read more</span><span class="more">'+" enter the Mini 4WD competition."+'</span>';
      document.getElementById('The_Racing_Brothers-dots').addEventListener("click", function() {
        rmLink[0].style.display = "none";
        rmText[0].style.display = "inline";
      });
      fig5.getElementsByTagName("img")[0].src = "images/Anime/Trapp_Family_Story.jpg";
      fig5.getElementsByTagName("img")[0].alt = "Trapp Family Story";
      fig5.getElementsByTagName("figcaption")[0].innerHTML = "It is the story of Maria, who leaves her life in a convent to take up the responsibility of taking care of Captain Trapp's children.";
  }
  else {
    fig1.getElementsByTagName("img")[0].src = "images/Anime/Grendizer.jpg";
    fig1.getElementsByTagName("img")[0].alt = "Grendizer";
    fig1.getElementsByTagName("figcaption")[0].innerHTML = "Escaping from Vega's evil forces, the young Prince of planet Fleed leaves his destroyed homeland aboard"+'<br><span id="Grendizer-dots" class="rm-link">read more</span><span class="more">'+" the UFO Robot Grendizer, a powerful war machine, and makes it to Earth."+'</span>';
    document.getElementById('Grendizer-dots').addEventListener("click", function() {
      rmLink[0].style.display = "none";
      rmText[0].style.display = "inline";
    });
    fig2.getElementsByTagName("img")[0].src = "images/Anime/Maruko.jpg";
    fig2.getElementsByTagName("img")[0].alt = "Little Miss Maruko";
    fig2.getElementsByTagName("figcaption")[0].innerHTML = "An animated series following the life of young Maruko Sakura, as she grows up with her parents, grandparents and elder sister.";
    fig3.getElementsByTagName("img")[0].src = "images/Anime/Monarch.jpg";
    fig3.getElementsByTagName("img")[0].alt = "Monarch:The Big Bear of Tallac";
    fig3.getElementsByTagName("figcaption")[0].innerHTML = "The story of a tiny Grizzly cub who grew to be the Monarch of the Plains – and the Prisoner of humanity's arrogance.";
    fig4.getElementsByTagName("img")[0].src = "images/Anime/Mowgli.jpg";
    fig4.getElementsByTagName("img")[0].alt = "Mowgli";
    fig4.getElementsByTagName("figcaption")[0].innerHTML = "The adventures of Mowgli, an orphan boy raised by wolves, and his friends in the jungles of India.";
    fig5.getElementsByTagName("img")[0].src = "images/Anime/Muka_Muka.jpg";
    fig5.getElementsByTagName("img")[0].alt = "Muka Muka Paradise";
    fig5.getElementsByTagName("figcaption")[0].innerHTML = "The story revolves around a young girl named Uiba Shikatani and her newly found pet dinosaur, which is named"+'<br><span id="Muka-dots" class="rm-link">read more</span><span class="more">'+" after the only words that come out of its mouth, Muka Muka."+'</span>';
    document.getElementById('Muka-dots').addEventListener("click", function() {
      rmLink[1].style.display = "none";
      rmText[1].style.display = "inline";
    });
  }
}
// read more
document.getElementById('Grendizer-dots').addEventListener("click", function() {
  rmLink[0].style.display = "none";
  rmText[0].style.display = "inline";
});
document.getElementById('Muka-dots').addEventListener("click", function() {
  rmLink[1].style.display = "none";
  rmText[1].style.display = "inline";
});

// introduction info
var clickCount = 0;

function expand_info() {
  var card = document.getElementsByClassName("card");
  clickCount += 1;

  if (clickCount%2 == 0) {
    card[1].style.width = "0px";
    card[1].style.padding = "0px";
    card[1].style.borderWidth = "0px";
    document.getElementById('more-info').style.display = "none";
    document.getElementById("more-btn").style.transform = "rotate(-90deg)";
    document.getElementById("more-btn").style.transition = "transform 1000ms";
  }
  else {
    card[1].style.width = "750px";
    card[1].style.padding = "20px";
    card[1].style.border = "2px solid #b9411e";
    document.getElementById('more-info').style.display = "inline-block";
    document.getElementById("more-btn").style.transform = "rotate(90deg)";
    document.getElementById("more-btn").style.transition = "transform 1000ms";
  }
}
