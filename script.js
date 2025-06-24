

let stats = {
  hambre: 100,
  diversion: 100,
  limpieza: 100,
  energia: 100
};

function doAction(action) {
  const status = document.getElementById("status-text");
  
  switch(action) {
    case 'comer':
      stats.hambre = Math.min(stats.hambre + 20, 100);
      stats.diversion -= 5;
      stats.limpieza -= 5;
      status.textContent = "🍖 DOOD está comiendo";
       document.getElementById("dog-image").src = "comiendo.png"; // ← tu imagen aquí

  setTimeout(() => {
    document.getElementById("dog-image").src = "normal.png";
    status.textContent = "¿Qué quieres hacer ahora?";
  }, 3000);
  break;
      break;
    case 'jugar':
      stats.diversion = Math.min(stats.diversion + 20, 100);
      stats.energia -= 10;
      stats.hambre -= 5;
      status.textContent = "🎾 DOOD está jugando";
         document.getElementById("dog-image").src = "jugando.png"; // ← tu imagen aquí

  setTimeout(() => {
    document.getElementById("dog-image").src = "normal.png";
    status.textContent = "¿Qué quieres hacer ahora?";
  }, 3000);
  break;
      break;
    
    case 'bañar':
      stats.limpieza = Math.min(stats.limpieza + 30, 100);
      stats.energia -= 5;
      status.textContent = "🛁 DOOD se está bañando";
        document.getElementById("dog-image").src = "bañando.png"; // ← tu imagen aquí

  setTimeout(() => {
    document.getElementById("dog-image").src = "normal.png";
    status.textContent = "¿Qué quieres hacer ahora?";
  }, 3000);
  break;

      break;
    case 'dormir':
      stats.energia = Math.min(stats.energia + 40, 100);
      stats.hambre -= 10;
      status.textContent = "🛏 DOOD está durmiendo";
        document.getElementById("dog-image").src = "dormido.png"; // ← tu imagen aquí

  setTimeout(() => {
    document.getElementById("dog-image").src = "normal.png";
    status.textContent = "¿Qué quieres hacer ahora?";
  }, 3000);
  break;
      break;
  }

  updateStats();
}

function updateStats() {
  document.getElementById("hambre").textContent = stats.hambre + "%";
  document.getElementById("diversion").textContent = stats.diversion + "%";
  document.getElementById("limpieza").textContent = stats.limpieza + "%";
  document.getElementById("energia").textContent = stats.energia + "%";
}