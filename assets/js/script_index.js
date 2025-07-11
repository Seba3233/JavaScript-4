

const navBar = document.querySelector("#navBar")
navBar.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="../index.html">Inmobiliaria ADL
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="../index.html">Home</a>
              </li> -->
            <li class="nav-item">
              <a class="nav-link" href="../propiedades_venta.html">En venta
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../propiedades_alquiler.html">Alquiler
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main class="container-fluid main-section">
      <h1 class="text-white">Encuentra tu nueva propiedad
      </h1>
    </main>
    `
const ventaIndexSection = document.querySelector("#ventaIndex")
    
    for (let propiedadVenta of propiedadesVenta.slice(0,3) ){
        
        let templateVentaIndex = `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${propiedadVenta.src}" class="card-img-top" alt="Imagen del departamento"/>
            <div class="card-body">
              <h5 class="card-title">${propiedadVenta.nombre}
              </h5>
              <p class="card-text">${propiedadVenta.descripcion}
              </p>
              <p>
              <i class="fas fa-map-marker-alt"></i> ${propiedadVenta.ubicacion}
              </p>
              <p>
              <i class="fas fa-bed"></i> ${propiedadVenta.habitaciones} |
              <i class="fas fa-bath"></i> ${propiedadVenta.baños}
              </p>
              <p><i class="fas fa-dollar-sign"></i> ${propiedadVenta.costo}
              </p>
              `;
              if (propiedadVenta.smoke){
                templateVentaIndex += `
                <p class="text-success">
                  <i class="fas fa-smoking"></i> Permitido fumar
                </p>
                
                `;
              }
              else {
                templateVentaIndex += `
                <p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>
                `;
              }
              if (propiedadVenta.pets){
                templateVentaIndex += `
                <p class="text-success">
                  <i class="fas fa-paw"></i> Mascotas permitidas
                </p>
                `;
              }
              else {
                templateVentaIndex += `
                <p class="text-danger">
                  <i class="fas fa-ban"></i> No se permiten mascotas
                </p>
                `;
              }
              templateVentaIndex += `
                </div>
                </div>
                </div>
              `;
              ventaIndexSection.innerHTML += templateVentaIndex;
            }
  const alquilerIndexSection = document.querySelector("#alquilerIndex")
    
    for (let propiedadAlquiler of propiedadesAlquiler.slice(0,3) ){
        
        let templateAlquilerIndex = `
        <div class="col-md-4 mb-4">
        <div class="card">
        <img src="${propiedadAlquiler.src}" class="card-img-top" alt="Imagen del departamento"/>
        <div class="card-body">
        <h5 class="card-title">${propiedadAlquiler.nombre}
        </h5>
        <p class="card-text">${propiedadAlquiler.descripcion}
        </p>
        <p>
        <i class="fas fa-map-marker-alt"></i> ${propiedadAlquiler.ubicacion}
              </p>
              <p>
              <i class="fas fa-bed"></i> ${propiedadAlquiler.habitaciones} |
              <i class="fas fa-bath"></i> ${propiedadAlquiler.baños}
              </p>
              <p><i class="fas fa-dollar-sign"></i> ${propiedadAlquiler.costo}
              </p>
              `;
              if (propiedadAlquiler.smoke){
                templateAlquilerIndex += `
                <p class="text-success">
                  <i class="fas fa-smoking"></i> Permitido fumar
                </p>
                
                `;
              }
              else {
                templateAlquilerIndex += `
                <p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>
                `;
              }
              if (propiedadAlquiler.pets){
                templateAlquilerIndex += `
                <p class="text-success">
                  <i class="fas fa-paw"></i> Mascotas permitidas
                </p>
                `;
              }
              else {
                templateAlquilerIndex += `
                <p class="text-danger">
                  <i class="fas fa-ban"></i> No se permiten mascotas
                </p>
                `;
              }
              templateAlquilerIndex += `
                </div>
                </div>
                </div>
              `;
              alquilerIndexSection.innerHTML += templateAlquilerIndex;
            }
