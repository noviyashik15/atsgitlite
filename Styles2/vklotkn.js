$("#vklbut").on("click", function () {
$("#viklbut").removeAttr("disabled");
$("#vklbut").attr("disabled", "disabled");
$("#zdes").css("background-color", "cean");
$("#zdes").css("display", "flex"); 
$("#zdes").css("align-items", "flex-start");  
$("#zdes").css("justify-content", "space-between");
   
var newButton01 = $('<input/>').attr({ type: "button", id: "iguasu1", class: "btn btn-primary", target: "_blank",
onclick:"location.href = 'https://noviyashik15.github.io/gitmusic1/index.html'", value: "Игуасу" });
var newButton02 = $('<input/>').attr({ type: "button", id: "angel1", class: "btn btn-primary", target: "_blank", 
onclick:"location.href = 'https://noviyashik50285.github.io/gitmusic2/index.html'", value: "Анхель" });
var newButton03 = $('<input/>').attr({ type: "button", id: "victory1", class: "btn btn-primary", target: "_blank", 
onclick:"location.href = 'https://noviyashik50285.github.io/gitmusic3/index.html'", value: "Виктория" });
var newButton04 = $('<input/>').attr({ type: "button", id: "niagara1", class: "btn btn-primary", target: "_blank", 
onclick:"location.href = 'https://noviyashik50285.github.io/gitmusic4/index.html'", value: "Ниагара" });
var newButton05 = $('<input/>').attr({ type: "button", id: "kanion1", class: "btn btn-primary", target: "_blank", 
onclick:"location.href = 'https://noviyashik50285.github.io/gitmusic5/index.html'", value: "Гранд-Каньон" });
var newButton06 = $('<input/>').attr({ type: "button", id: "yellow1", class: "btn btn-primary", target: "_blank",
onclick:"location.href = 'https://noviyashik50285.github.io/gitmusic6/index.html'", value: "Йеллоустоун" });

var newButton13 = $('<input/>').attr({ type: "button", id: "play7", class: "btn btn-primary", target: "_blank",
onclick:"location.href = 'https://noviyashik50285.github.io/gitmusic7/index.html'", value: "Плейер 7" });
var newButton11 = $('<input/>').attr({ type: "button", id: "halong", class: "btn btn-primary", target: "_blank",
onclick:"location.href = 'https://noviyashik50285.github.io/gitmusic8/index.html'", value: "Халонг" });
var newButton12 = $('<input/>').attr({ type: "button", id: "audio9", class: "btn btn-primary", target: "_blank",
onclick:"location.href = 'https://noviyashik15.github.io/gitmusic9/index.html'", value: "Ява" });
var newButton14 = $('<input/>').attr({ type: "button", id: "audio10", class: "btn btn-primary", target: "_blank",
onclick:"location.href = 'https://noviyashik15.github.io/gitmusic10/index.html'", value: "Арчес" });

$("#zdes").append(newButton01);
$("#zdes").append(newButton02);
$("#zdes").append(newButton03);
$("#zdes").append(newButton04);
$("#zdes").append(newButton05);
$("#zdes").append(newButton06);
$("#zdes").append(newButton13);
$("#zdes").append(newButton11);
$("#zdes").append(newButton12);
$("#zdes").append(newButton14);

});
