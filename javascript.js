var p1=0 ;
var p2=0;
var n=1;
function roll()
{
   
    var z=Math.floor(Math.random()*10%6)+1;
    document.getElementById("add").value=z;
    if(n===1)
    {
        p1=p1+z;
        document.getElementById("player1").value=p1;
        n=2;

    }
    else if(n===2)
    {
        p2=p2+z;
        document.getElementById("player2").value=p2;
        n=1;
    }
    if(p1>=30)
    {
        document.getElementById("display").innerHTML="Player 1 is the Winner <p> &#127881;&#127882;</p>" ;
    }
    else if(p2>=30)
    {
        document.getElementById("display").innerHTML="Player 2 is the Winner  <p> &#127881;&#127882;</p> ";
    }

}