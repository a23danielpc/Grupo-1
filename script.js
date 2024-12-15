function irAEnlace(enlace) {
  window.location.href = enlace;
}

function textoInteresante(id){
  let textoInteresante = document.getElementById('character_description')
  switch(id){
    case 0:{ //<b style=\"color: #00ffab;\"></b>
        textoInteresante.innerHTML = "Como <b style=\"color: #ffab00;\">PERFORADOR</b>, estarás equipado con un juego de <b style=\"color: #00ffab;\">TALADROS ELÉCTRICOS DE TITANIO</b>. Tu trabajo es despejar todos los túneles bloqueados y obstáculos en el camino de tu equipo, y en combate también eres una fuerza a tener en cuenta: tus ejercicios eliminan rápidamente a la mayoría de los enemigos de cerca, y para enfrentamientos a mayor distancia estás equipado con un <b style=\"color: #00ffab;\">LANZALLAMAS</b> de alta resistencia."
        break;
    }
    case 1:{
      textoInteresante.innerHTML = "Como <b style=\"color: #ffab00;\">INGENIERO</b>, llevas dos elementos esenciales para sobrevivir en las cuevas: el <b style=\"color: #00ffab;\">ARMA DE PLATAFORMA</b> dispara plataformas escalables a cualquier superficie y tus <b style=\"color: #00ffab;\">TORRETAS CENTINELA</b> automatizadas lanzan granizadas de fuego de apoyo, si logras configurarlas antes de que te maten. Puede que no seas el enano más resistente, pero tu <b style=\"color: #00ffab;\">ESCOPETA DE COMBATE</b> y tu devastador <b style=\"color: #00ffab;\">LANZADOR DE GRANADA</b> aún te convierten en un oponente formidable."
      break;
    }
    case 2:{
      textoInteresante.innerHTML = "Como <b style=\"color: #ffab00;\">ARTILLERO</b>, tu posición está al frente de cualquier batalla, eliminando alienígenas usando tu <b style=\"color: #00ffab;\">MINIGUN</b> de alto calibre y tu <b style=\"color: #00ffab;\">REVOLVER</b> de alta resistencia. También estás equipado con un <b style=\"color: #00ffab;\">LANZADOR DE TIROLINA</b> extremadamente útil, que permite a todo el equipo cruzar fácilmente casi cualquier abismo u obstáculo."
      break
    }
    case 3:{
      textoInteresante.innerHTML ="Como <b style=\"color: #ffab00;\">EXPLORADOR</b>, eres el único que lleva la poderosa <b style=\"color: #00ffab;\">PISTOLA DE BANDA</b> y todo el equipo depende de ti para obtener luz. Para explorar más adelante, también estás equipado con un <b style=\"color: #00ffab;\">GANCHO DE AGARRE</b>, que te permite llegar a casi cualquier lugar. Pero, aunque lleves un <b style=\"color: #00ffab;\">RIFLE DE ASALTO</b> y una <b style=\"color: #00ffab;\">ESCOPETA RECORTADA</b>, debes tener cuidado de no quedar aislado de tu equipo: las cuevas no agradan a los exploradores solitarios."
      break
    }
  }
}