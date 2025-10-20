// ==== Función principal para mostrar contenido dinámico ====
const contenido = document.getElementById("contenido");

// Mapa de secciones (usamos Map)
const secciones = new Map([
  ["inicio", crearInicio],
  ["productos", crearProductos],
  ["contacto", crearContacto]
]);

// === Mostrar sección inicial ===
mostrarSeccion("inicio");

// === Event Listener para los botones del menú ===
document.querySelectorAll("nav button").forEach(boton => {
  boton.addEventListener("click", () => {
    mostrarSeccion(boton.dataset.seccion);
  });
});

// === Función que muestra la sección seleccionada ===
function mostrarSeccion(nombre) {
  contenido.innerHTML = ""; // Limpia el contenido previo
  const seccion = secciones.get(nombre);
  if (seccion) seccion();
  else contenido.innerHTML = "<p>Sección no encontrada</p>";
}

// ==== SECCIÓN INICIO ====
function crearInicio() {
  const div = document.createElement("div");
  div.className = "hero";

  const imagen = document.createElement("img");
  imagen.src = "perfil.PNG";
  imagen.alt = "Tienda Totto";

  const boton = document.createElement("div");
  boton.className = "cta";
  boton.textContent = "Encuentra la tienda Totto más cercana a ti";
  boton.addEventListener("click", () => {
    const direccionTotto = encodeURIComponent("Totto, Santo Domingo, República Dominicana");
    const urlMaps = `https://www.google.com/maps/place/Totto+%E2%80%A2+%C3%81gora/@18.4839883,-70.0848209,12z?query=${direccionTotto}`;
    window.open(urlMaps, "_blank");
  });

  div.appendChild(imagen);
  div.appendChild(boton);
  contenido.appendChild(div);
}

// ==== SECCIÓN PRODUCTOS ====
function crearProductos() {
  const productos = [
    { nombre: "Mochilas", img: "tienda.png" },
    { nombre: "Maletas", img: "maletas.png" },
    { nombre: "Mochilas Ejecutivas", img: "ejecutiva.png" },
    { nombre: "Canguros", img: "canguros.png" }
  ];

  const contenedor = document.createElement("div");
  contenedor.className = "productos";

  // Usamos un bucle for
  for (let i = 0; i < productos.length; i++) {
    const item = document.createElement("div");
    item.className = "producto";
    item.innerHTML = `
      <img src="${productos[i].img}" alt="${productos[i].nombre}">
      <h3>${productos[i].nombre}</h3>
      <p>Explora nuestra selección de ${productos[i].nombre.toLowerCase()}.</p>
    `;
    contenedor.appendChild(item);
  }

  contenido.appendChild(contenedor);
}

// ==== SECCIÓN CONTACTO ====
function crearContacto() {
  const div = document.createElement("div");
  div.innerHTML = `
    <h2>Contáctanos</h2>
    <p>Visita nuestras tiendas o comunícate con nosotros a través de redes sociales.</p>
  `;
  contenido.appendChild(div);
}
