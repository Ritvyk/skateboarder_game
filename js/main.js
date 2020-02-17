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
    let container = document.getElementById("obstacle-container");
    container.appendChild(obstacle);
    function moveLeft() {
        obstacle.style.right = move + "px";
        move += 10;
    }
    setInterval(moveLeft, 100);
}


function startGame() {

    alert("Game Has Been Started !");
    function increaseScore()
    {
        var score=parseInt(document.getElementById("score").innerText)+1;
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
