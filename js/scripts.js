function color(nameId){
	var img = document.getElementById(nameId);
  img.src = 'images/logos/'+nameId+'.svg'; 
  
}

function azul(nameId){
	var img = document.getElementById(nameId);
	img.src = 'images/logos/'+nameId+'_azul.svg'; 	
}

function showText(nameId){
	var text = document.getElementById(nameId);
	text.classList.remove('d-none');}


function hideText(nameId){
	var text = document.getElementById(nameId);
	text.classList.add('d-none');
}

function putNone(){
	document.getElementById('empresa_text').innerHTML = '';
}


 function muestraInfo(){
     
 }

function mostrarMapaCorporativo(){
    
    
    document.getElementById("mapaFrame").innerHTML = '<iframe class = "mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d559.3234635760344!2d-99.22231590482778!3d19.426885317785107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x115a7b305b3dbd0b%3A0xb80ca8f34694465c!2sCorporativo+4P%2FMX!5e0!3m2!1ses!2smx!4v1530553337865" frameborder="0" style="border:0" frameborder="0" allowfullscreen></iframe>';
}


function mostrarMapaPeninsula(){
    
    
    document.getElementById("mapaFrame").innerHTML = '<iframe  class = "mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.163398758706!2d-86.8211979658504!3d21.14589466417271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2bfd7c7b0907%3A0x6eee094d03b0fb5c!2sCorporativo+Malec%C3%B3n+Am%C3%A9ricas!5e0!3m2!1ses!2smx!4v1530803999517"  frameborder="0" style="border:0" allowfullscreen></iframe>';
}

function mostrarMapaNorte(){
    
    
    document.getElementById("mapaFrame").innerHTML = '<iframe  class = "mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.7276603979717!2d-100.35381840132412!3d25.647162764809746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bdde4100f2f9%3A0x40dca84315bf79b5!2sTorres+Equus+Isaa!5e0!3m2!1ses!2smx!4v1530804536174"frameborder="0" style="border:0" allowfullscreen></iframe>';
}


function mostrarDireccionCorporativo(){
  document.getElementById("direccion").innerHTML = '<span class="titulo2-4p"> CORPORATIVO 4P/MX </span> <p class="texto2-4p mt-4">Sierra Gorda 36 Piso 1<br>Lomas de Chapultepec <br>  C.P. 11000 Ciudad de México <br> Tel. (55) 33000301</p> <div class = "row">  <div class = "col-lg-4 texto-mapas text-right" style="cursor: pointer;" onclick = "mostrarMapaCorporativo(),mostrarDireccionCorporativo()"> <p >Corporativo</p> </div>  <div class = "col-sm-4 texto-mapas" style="cursor: pointer;" onclick = "mostrarMapaNorte(),mostrarDireccionNorte()"> <p >Norte</p> </div>  <div class = "col-lg-4 texto-mapas text-left" style="cursor: pointer;" onclick = "mostrarMapaPeninsula(),mostrarDireccionPeninsula()"><p >Península</p></div></div>'
}

function mostrarDireccionNorte(){
  document.getElementById("direccion").innerHTML = '<span class="titulo2-4p"> ZONA NORTE </span> <p class="texto2-4p mt-4">Ricardo Margain 335 Equus Torre 1<br> Piso 5  Oficina 541 Col. Valle del Campestre <br>66265 San Pedro Garza García  <br> Tel. 01 81 8000 5771</p> <div class = "row">  <div class = "col-lg-4 texto-mapas text-right" style="cursor: pointer;" onclick = "mostrarMapaCorporativo(),mostrarDireccionCorporativo()">      <p >Corporativo</p></div>  <div class = "col-sm-4 texto-mapas" style="cursor: pointer;" onclick = "mostrarMapaNorte(),mostrarDireccionNorte()">     <p >Norte</p> </div>  <div class = "col-lg-4 texto-mapas text-left" style="cursor: pointer;" onclick = "mostrarMapaPeninsula(),mostrarDireccionPeninsula()"><p >Península</p>  </div></div>'
}

function mostrarDireccionPeninsula(){
  document.getElementById("direccion").innerHTML = '<span class="titulo2-4p"> ZONA PENÍNSULA</span> <p class="texto2-4p mt-4"> Av. Bonampak Mz. 1, Lt.1 <br> SM 6 Corporativo <br> Malecón Américas 77500, Cancún <br> Tel. 998 8007 675</p> <div class = "row">  <div class = "col-lg-4 texto-mapas text-right" style="cursor: pointer;" onclick = "mostrarMapaCorporativo(),mostrarDireccionCorporativo()">    <p >Corporativo</p> </div>  <div class = "col-sm-4 texto-mapas" style="cursor: pointer;" onclick = "mostrarMapaNorte(),mostrarDireccionNorte()"> <p >Norte</p> </div>  <div class = "col-lg-4 texto-mapas text-left" style="cursor: pointer;" onclick = "mostrarMapaPeninsula(),mostrarDireccionPeninsula()"><p >Península</p>  </div></div>'
}



function cambiarOpciones(){
    
    var opcionSeleccionada = document.getElementById("motivo").value;
    
    switch(opcionSeleccionada){
        case "Cotizar":
            document.getElementById("seleccion").innerHTML = '<select class="custom-select" name="submotivo" >'
                +'<option value="" disabled selected>--Elige una opción--</option>'
                +'<option value="particular">Particular</option>'
                +'<option value="empresarial" >Empresarial</option>'
                +'<option value="asistencias" >Asistencias</option>'
                +'<option value="programas" >Programas</option>'
            +'</select>';
            document.getElementById("seleccion2").innerHTML = '<textarea style = "overflow:auto; resize:none" name="comentarios" rows="3" cols="29" placeholder="Escribe tus comentarios.."></textarea>';
            document.getElementById("seleccion2").style.display = "block";
            break;
        case "Soy cliente":
            document.getElementById("seleccion").innerHTML = '<select class="custom-select" name="submotivo" >'
                +'<option value="" disabled selected>--Elige una opción--</option>'
                +'<option value="irl">IRL</option>'
                +'<option value="blu" >BLU</option>'
                +'<option value="integra" >INTEGRA</option>'
                +'<option value="ss" >SEGUROS S</option>'
            +'</select>';
            document.getElementById("seleccion2").innerHTML = '<textarea style = "overflow:auto; resize:none" name="comentarios" rows="3" cols="29" placeholder="Escribe tus comentarios.."></textarea>';
            document.getElementById("seleccion2").style.display = "block";
            break;
            
        case "Quiero trabajar":
            
            document.getElementById("seleccion").innerHTML = '<textarea style = "overflow:auto; resize:none" name="comentarios" rows="3" cols="29" placeholder="Escribe tus comentarios.."></textarea>';
            document.getElementById("seleccion2").style.display = "block";
            document.getElementById("seleccion2").innerHTML = '<form name = "Adjuntar" id = "Adjuntar"  action="php/send.php" method = "POST" enctype = "multipart/form-data">'
                                                              
                                                              +'<input class = "control" type = "file" name = "cv" id = "cv" accept=".pdf" style="font-size: 13px;" placeholder="indica valor" required/>'
                                                              +'</form>';
             break;
            
        case "Comentarios y sugerencias":
            document.getElementById("seleccion").innerHTML = '<textarea style = "overflow:auto; resize:none" name="comentarios" rows="3" cols="29" placeholder="Escribe tus comentarios.."></textarea>';
            document.getElementById("seleccion2").style.display = "none";
            break;
            
        case "Prensa y comunicacion":
            document.getElementById("seleccion").innerHTML = '<textarea style = "overflow:auto; resize:none" name="comentarios" rows="3" cols="29" placeholder="Escribe tus comentarios.."></textarea>';
            document.getElementById("seleccion2").style.display = "none";
            break;
        case "Proveedores":
            break;
    }//fin del switch
    
    

    
}

(function() {

  // VARIABLES
  const timeline = document.querySelector(".timeline ol"),
    elH = document.querySelectorAll(".timeline li > div"),
    arrows = document.querySelectorAll(".timeline .arrows .arrow"),
    arrowPrev = document.querySelector(".timeline .arrows .arrow__prev"),
    arrowNext = document.querySelector(".timeline .arrows .arrow__next"),
    firstItem = document.querySelector(".timeline li:first-child"),
    lastItem = document.querySelector(".timeline li:last-child"),
    xScrolling = 280,
    disabledClass = "disabled";

  // START
  window.addEventListener("load", init);

  function init() {
    setEqualHeights(elH);
    animateTl(xScrolling, arrows, timeline);
    setSwipeFn(timeline, arrowPrev, arrowNext);
    setKeyboardFn(arrowPrev, arrowNext);
  }

  // SET EQUAL HEIGHTS
  function setEqualHeights(el) {
    let counter = 0;
    for (let i = 0; i < el.length; i++) {
      const singleHeight = el[i].offsetHeight;

      if (counter < singleHeight) {
        counter = singleHeight;
      }
    }

    for (let i = 0; i < el.length; i++) {
      el[i].style.height = `${counter}px`;
    }
  }

  // CHECK IF AN ELEMENT IS IN VIEWPORT
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // SET STATE OF PREV/NEXT ARROWS
  function setBtnState(el, flag = true) {
    if (flag) {
      el.classList.add(disabledClass);
    } else {
      if (el.classList.contains(disabledClass)) {
        el.classList.remove(disabledClass);
      }
      el.disabled = false;
    }
  }

  // ANIMATE TIMELINE
  function animateTl(scrolling, el, tl) {
    let counter = 0;
    for (let i = 0; i < el.length; i++) {
      el[i].addEventListener("click", function() {
        if (!arrowPrev.disabled) {
          arrowPrev.disabled = true;
        }
        if (!arrowNext.disabled) {
          arrowNext.disabled = true;
        }
        const sign = (this.classList.contains("arrow__prev")) ? "" : "-";
        if (counter === 0) {
          tl.style.transform = `translateX(-${scrolling}px)`;
        } else {
          const tlStyle = getComputedStyle(tl);
          // add more browser prefixes if needed here
          const tlTransform = tlStyle.getPropertyValue("-webkit-transform") || tlStyle.getPropertyValue("transform");
          const values = parseInt(tlTransform.split(",")[4]) + parseInt(`${sign}${scrolling}`);
          tl.style.transform = `translateX(${values}px)`;
        }

        setTimeout(() => {
          isElementInViewport(firstItem) ? setBtnState(arrowPrev) : setBtnState(arrowPrev, false);
          isElementInViewport(lastItem) ? setBtnState(arrowNext) : setBtnState(arrowNext, false);
        }, 1100);

        counter++;
      });
    }
  }

  // ADD SWIPE SUPPORT FOR TOUCH DEVICES
  function setSwipeFn(tl, prev, next) {
    const hammer = new Hammer(tl);
    hammer.on("swipeleft", () => next.click());
    hammer.on("swiperight", () => prev.click());
  }

  // ADD BASIC KEYBOARD FUNCTIONALITY
  function setKeyboardFn(prev, next) {
    document.addEventListener("keydown", (e) => {
      if ((e.which === 37) || (e.which === 39)) {
        const timelineOfTop = timeline.offsetTop;
        const y = window.pageYOffset;
        if (timelineOfTop !== y) {
          window.scrollTo(0, timelineOfTop);
        }
        if (e.which === 37) {
          prev.click();
        } else if (e.which === 39) {
          next.click();
        }
      }
    });
  }

})();






function changeText(text){

	if(text == 'irl'){
		var irl = "<section id='empresas' class='row p-0 mx-0 align-items-center justify-content-center' style='height: 90vh;'><div class='empresas-page row m-0 pt-3 pb-4 w-100 align-items-center justify-content-center text-center' style='height: 85%;'>"+
		"<div class='col-xl-4 text-right pr-5 py-4'> <img src='images/logos/irl_blanco.svg' width='200' class='img-fluid'>"+                        
        "</div> <div class='col-xl-6 py-4 pl-4'><span class='titulo3-4p'>BRÓKER DE SEGUROS ESPECIALIZADO EN SECTOR CORPORATIVO</span>"+
        "<p class='py-3 texto3-4p'>Empresa especializada en el análisis y colocación de riesgos con las mejores compañías de seguros, fianzas y "+
         "reaseguro en el mundo, ofreciendo un servicio integral de asesoría y atención personalizada. </p>"+
                            "<img src='images/png/lineas_negocio/vida_gm.png' width='60'id='irl' class='tool img-fluid' title='Pólizas de Vida y Gastos Médicos Mayores individuales, grupales y empresariales. Beneficios adicionales como seguro dental y de vista.'>"+
                            "<img src='images/png/lineas_negocio/danos.png' width='60' class='mx-2' id='irl' class='tool img-fluid' title='Casa habitación, edificios, maquinaria de contratistas, responsabilidad civil. '>"+
                            "<img src='images/png/lineas_negocio/financieras.png' width='60' id='irl' class='tool img-fluid' title='Fianzas, Errores y omisiones, D&O, IPO.'>"+
                            "<img src='images/png/lineas_negocio/flotillas.png' width='60' class='ml-2' id='irl' class='tool img-fluid' title='Particulares, empresariales, motocicletas, camiones, transporte privado, tractocamiones.'>"+
        "</div> <div class='col-xl-2 align-self-start pr-5'><button type='button' class='close' aria-label='Close' onclick='putNone();' >"+
        "<span aria-hidden='true'>&times;</span> </button> </div>  <div class='col-xl-12 text-right pr-5'> <a class='btn btn-empresas px-4' href='#' role='button'>IR AL SITIO</a>"+                                          
        "</div>     </div></section>";
        
        

    	var div = document.getElementById('empresa_text').innerHTML =irl;
    } else if (text == 'integra'){

		var integra = "<section id='empresas' class='row p-0 mx-0 align-items-center justify-content-center' style='height: 90vh;'><div class='empresas-page row m-0 pt-3 pb-4 w-100 align-items-center justify-content-center text-center' style='height: 85%;'>"+
                    "<div class='col-xl-4 text-right pr-5 py-4'><img src='images/logos/integra_blanco.svg' width='245' class='img-fluid'> "+                  
                    "</div><div class='col-xl-6 py-4 pl-4'><span class='titulo3-4p'>BRÓKER DE SEGUROS ESPECIALIZADO EN LÍNEAS<br> INDIVIDUALES Y PYMES</span>"+
                    "<p class='py-3 texto3-4p'>Compañía especializada en el análisis y colocación de riesgos de líneas personales y Pymes con las mejores compañías de seguros, fianzas, ofreciendo un servicio integral de asesoría y atención personalizada. </p>"+
            
					"<img src='images/png/lineas_negocio/vida_gm.png' width='60'id='integra' class='tool img-fluid' title='Pólizas de vida y gastos médicos familiares y para empresas pequeñas'><img src='images/png/lineas_negocio/danos.png' width='60' class='mx-2' id='integra' class='tool img-fluid' title='Casa habitación, oficinas Pymes'>"+
            
                    "<img src='images/png/lineas_negocio/financieras.png' width='60'id='integra' class='tool img-fluid' title='Vehículos particulares, transporte privado, motocicletas'><img src='images/png/lineas_negocio/flotillas.png' width='60' class='ml-2'id='integra' class='tool img-fluid' title='Fianzas'>"+  
            
                	"</div><div class='col-xl-2 align-self-start pr-5'><button type='button' class='close' aria-label='Close' onclick='putNone();'>"+
                	"<span aria-hidden='true'>&times;</span></button></div><div class='col-xl-12 text-right pr-5'><a class='btn btn-empresas px-4' href='#' role='button'>IR AL SITIO</a>"+                             
                	"</div></div></section>";

        var div = document.getElementById('empresa_text').innerHTML =integra;
    } else if (text == 'ss'){

    	var ss = "<section id='empresas' class='row p-0 mx-0 align-items-center justify-content-center' style='height: 90vh;'><div class='empresas-page row m-0 pt-3 pb-4 w-100 align-items-center justify-content-center text-center' style='height: 85%;'>"+
                 "<div class='col-xl-4 text-right pr-5 py-4'><img src='images/logos/ss_blanco.svg' width='200' class='img-fluid'>"+                       
                 "</div><div class='col-xl-6 py-4 pl-4'><span class='titulo3-4p'>BRÓKER DE SEGUROS ESPECIALIZADO EN SECTOR CORPORATIVO</span>"+
                 "<p class='py-3 texto3-4p'>Compañía especializada en el desarrollo de programas de afinidad para la generación de ingresos adicionales a través de la distribución de productos innovadores en canales masivos. </p>"+
                 "<img src='images/png/lineas_negocio/travel.png' width='60'id='ss' class='tool img-fluid' title='Servicios de protección al viajero, seguros y asistencias.'><img src='images/png/lineas_negocio/autos.png' width='60' class='mx-2'id='ss' class='tool img-fluid' title='Cotiza y contrata en línea. Tarifas especiales para financieras.'>"+
                 "<img src='images/png/lineas_negocio/retail.png' width='60'id='ss' class='tool img-fluid' title='Protección a bienes adquiridos, seguros y asistencias'><img src='images/png/lineas_negocio/financiras.png' width='60' class='ml-2'id='ss' class='tool img-fluid' title='Protección ligada a líneas de crédito y valores agregados.'>"+
                 "<img src='images/png/lineas_negocio/lealtad.png' width='60' class='ml-2'id='ss' class='tool img-fluid' title='Programas de recompensas y lealtad'> <img src='images/png/lineas_negocio/bicicletas.png' width='60' class='ml-2'id='ss' class='tool img-fluid' title='Seguro para bicicletas nuevas o usadas y seguro para ciclistas.'>"+
                 "</div><div class='col-xl-2 align-self-start pr-5'><button type='button' class='close' aria-label='Close' onclick='putNone();'>"+
                 "<span aria-hidden='true'>&times;</span></button></div> <div class='col-xl-12 text-right pr-5'><a class='btn btn-empresas px-4' href='#' role='button'>IR AL SITIO</a>"+
                 "</div> </div> </section>'";
                 var div = document.getElementById('empresa_text').innerHTML = ss;
    } else if(text == 'ba'){
    	var ba = "<section id='empresas' class='row p-0 mx-0 align-items-center justify-content-center' style='height: 90vh;'><div class='empresas-page row m-0 pt-3 pb-4 w-100 align-items-center justify-content-center text-center' style='height: 85%;'>"+
    			"<div class='col-xl-4 text-right pr-5 py-4'><img src='images/logos/ba_blanco.svg' width='200' class='img-fluid'></div><div class='col-xl-6 py-4 pl-4'><span class='titulo3-4p'>EMPRESA DE ASISTENCIA</span><p class='py-3 texto3-4p'>Compañía de asistencia especializada en atender y operar programas masivos de lealtad, beneficios y servicios. </p>"+
				"<img src='images/png/lineas_negocio/hogar.png' width='60'id='ba' class='tool img-fluid' title='Asistencia hogar'>"+
				"<img src='images/png/lineas_negocio/travel.png' width='60' class='mx-2'id='ba' class='tool img-fluid' title='Gestión de servicios de protección al viajero en todo el mundo'>"+
				"<img src='images/png/lineas_negocio/asesoria_legal.png' width='60'id='ba' class='tool img-fluid' title='Asistencia legal y en trámites'>"+
				"<img src='images/png/lineas_negocio/mascotas.png' width='60' class='ml-2'id='ba' class='tool img-fluid' title='Protección a tu mascota'> "+
				"<img src='images/png/lineas_negocio/VIAL.png' width='60' class='ml-2'id='ba' class='tool img-fluid' title='Asistencia vial'> "+
				"<img src='images/png/lineas_negocio/proteccion.png' width='60' class='ml-2'id='ba' class='tool img-fluid' title='Gestión de garantías extendidas y protección a gadgets'> "+
				"<img src='images/png/lineas_negocio/atencion_medica.png' width='60' class='ml-2'id='ba' class='tool img-fluid' title='Asistencias médicas, ambulancias, médicos en red y a domicilio'> "+
				"</div><div class='col-xl-2 align-self-start pr-5'>"+
				"<button type='button' class='close' aria-label='Close' onclick='putNone();'>"+
				"<span aria-hidden='true'>&times;</span></button></div><div class='col-xl-12 text-right pr-5'>"+
				"<a class='btn btn-empresas px-4' href='#' role='button'>IR AL SITIO</a></div></div></section>";

				var div = document.getElementById('empresa_text').innerHTML = ba;
    }
}



           