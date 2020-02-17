var finalScore=0;
function startObstacles() {
    var colors = ["orange", "pink", "green", "violet", "brown", "white"];
    const rc = parseInt(Math.random() * 5);
    var colorName = colors[rc];
    var height = (Math.random() * 20) + 15;
    var move = 10;
    var obstacle = document.createElement("div");
    obstacle.style.height = height;
    obstacle.className = "obstacle";
    obstacle.style.backgroundColor = colorName;
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
            // if(currentPlayerPostion.y>obstac)
            console.log(currentPlayerPostion.y+30);
            console.log(obstacle.clientHeight);
            console.log("obstacle Y:"+obstaclePosition.y);
            if(currentPlayerPostion.y+30 > obstaclePosition.y)
            {
                alert("Oops! Game Over Your Final Score : "+finalScore);
                window.location.reload();
                clearInterval(moveLeft);
            }
        }
            
    }
    setInterval(moveLeft, 100);
}


function startGame() {

    alert("Game Has Been Started !");
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
    $("#player-model").animate({ bottom: "80px" }, "fast");
    // $("#player-model").animate({ left: "10px" }, "fast");
    $("#player-model").animate({ bottom: "0px" }, "slow");
    console.log("touched");
}
