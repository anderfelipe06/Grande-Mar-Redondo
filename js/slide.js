var atual=1;
var max=3;
var tempo=3000;

function automaticoSlide()
{
  document.getElementById("b1").style.visibility="hidden";
  document.getElementById("b2").style.visibility="hidden";
  document.getElementById("b3").style.visibility="hidden";
  document.getElementById("b" + atual).style.visibility="visible";
  atual=atual+1;

  if (atual > max)
  {
    atual=1;
  }
}

function proximoSlide()
{
  automaticoSlide();
}

function anteriorSlide()
{
  document.getElementById("b1").style.visibility="hidden";
  document.getElementById("b2").style.visibility="hidden";
  document.getElementById("b3").style.visibility="hidden";
  document.getElementById("b" + atual).style.visibility="visible";
  atual=atual-1;

  if (atual < 1)
  {
    atual=max;
  }
}



function exibirSlide()
{
	document.getElementById("b1").style.visibility="visible";
	document.getElementById("b2").style.visibility="hidden";
	document.getElementById("b3").style.visibility="hidden";
	tempoSlide=setInterval(automaticoSlide, tempo);
}

function pararSlide()
{
  clearInterval(tempoSlide);
}
