var finalScore=0;
if(localStorage.getItem("skate_scores")!=null)
{
    var scores=JSON.parse(localStorage.getItem("skate_scores"));
    document.getElementById("high_scores").innerText=scores.high_scores;
}
function startObstacles() {
    
    // var colors = ["orange", "pink", "green", "violet", "brown", "white"];
    // const rc = parseInt(Math.random() * 5);
    // var colorName = colors[rc];
    var height = (Math.random() * 20) + 15;
    var move = 10;
    var obstacle = document.createElement("img");
    obstacle.src="./img/brickwall.jpg";
    obstacle.style.height = height;
    obstacle.className = "obstacle";
    // obstacle.style.backgroundColor = colorName;
    var container = document.getElementById("obstacle-container");
    // console.log(container.children);
    container.appendChild(obstacle);
    function getPlayerPosition()
    {
        var playerPosition=document.getElementById("player-model-img").getBoundingClientRect();
        var cord={
            "x":playerPosition.x,
            "y":playerPosition.y
        }
        return cord;
    }
    function storeScore(score)
    {
        var obj={
            "high_scores":score
        }
        if(localStorage.getItem("skate_scores")!=null)
        {
            var data = JSON.parse(localStorage.getItem("skate_scores"));
            if(data.high_scores<score)
            {
                localStorage.setItem("skate_scores", JSON.stringify(obj));
            }
        }
        else{
            localStorage.setItem("skate_scores", JSON.stringify(obj));
        }
        // data.push(obj);
    }
    function moveLeft() {
        obstacle.style.right = move + "px";
        move += 10;
        // if(move>window.screen.width)
        // {
        //     container.removeChild(obstacle);
        // }
        var obstaclePosition=obstacle.getBoundingClientRect();
        var currentPlayerPostion=getPlayerPosition();
        if(obstaclePosition.x<currentPlayerPostion.x+20 && obstaclePosition.x>currentPlayerPostion.x )
        {
            // again checking if the player is at the postion or not !!
            if(currentPlayerPostion.y+30 > obstaclePosition.y)
            {
                document.getElementById("game_over_music").play();
                storeScore(finalScore);
                alert("Oops! Game Over Your Final Score : "+finalScore);
                window.location.reload();
                clearInterval(moveLeft);
            }
        }
            
    }
    setInterval(moveLeft, 100);
}

function levelUp(){
    var currentLevel=parseInt(document.getElementById("level").innerText);
    document.getElementById("level").innerText=currentLevel+1;
    startObstacles();
}
function startGame() {

   
    alert("Game Has Been Started !");
    var back_music=document.getElementById("back_music");
    back_music.volume=0.1;
    back_music.play();
    //background music...
   
    
    function increaseScore()
    {
        var score=parseInt(document.getElementById("score").innerText)+1;
        finalScore=score;
        document.getElementById("score").innerText=score;
    }
    
    function run() {
        startObstacles();
    }
    setInterval(run, 2500);
    setInterval(increaseScore,1000);

}
document.body.onkeyup = function (e) {
    if (e.keyCode == 32) {
        document.getElementById("jump_music").play();
        $("#player-model").animate({ bottom: "80px" }, "fast");
        // $("#player-model").animate({ left: "10px" }, "fast");
        $("#player-model").animate({ bottom: "0px" }, "slow");
 
    }
    if(e.keyCode===83)
    {
        document.getElementById("player-model-img").src="./character/down.png";
    }
    if(e.keyCode=== 87)
    {
        document.getElementById("player-model-img").src="./character/standing.png";
    }
}
document.body.ontouchstart=function()
{
    document.getElementById("jump_music").play();
    $("#player-model").animate({ bottom: "80px" }, "fast");
    // $("#player-model").animate({ left: "10px" }, "fast");
    $("#player-model").animate({ bottom: "0px" }, "slow");
    // console.log("touched");
}
