$(document).ready(function () {
	irArriba();
  }); //Hacia arriba
  function irArriba() {
	$(".ir-arriba").click(function () {
	  $("body,html").animate({ scrollTop: "0px" }, 1000);
	});
	$(window).scroll(function () {
	  if ($(this).scrollTop() > 0) {
		$(".ir-arriba").slideDown(600);
	  } else {
		$(".ir-arriba").slideUp(600);
	  }
	});
	$(".ir-abajo").click(function () {
	  $("body,html").animate({ scrollTop: "1000px" }, 1000);
	});
  }






  function ocultarContacto() {
	var x = document.getElementById("formularioContacto");
	var y = document.getElementById("mensajeEnviado");
	//ocultar form
	x.style.display = "none";
	y.style.display= "block";
		//mostrar mensaje
		document.getElementById("mensajeEnviado").innerHTML = "¡Mensaje enviado!. Estaremos en contacto.";
	}