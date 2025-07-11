const propiedadesAlquiler = [
{
nombre: 'Apartamento en el centro de la ciudad',
src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib',
descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
ubicacion: '123 Main Street, Anytown, CA 91234',
habitaciones: 2,
costo: "2,000",
smoke: false,
pets: true,
baños: 2,
},
{
nombre: 'Apartamento luminoso con vista al mar',
src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
habitaciones: 3,
costo: "2.500",
smoke: true,
pets: true,
baños: 1,
},
{
nombre: 'Condominio moderno en zona residencial',
src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
ubicacion: '123 Main Street, Anytown, CA 91234',
habitaciones: 2,
costo: "2,200",
smoke: false,
pets: false,
baños: 2,
},
{
nombre: 'Condominio moderno en zona residencial',
src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
ubicacion: '123 Main Street, Anytown, CA 91234',
habitaciones: 2,
costo: "2,200",
smoke: true,
pets: false,
baños: 2,
}
]
  const alquilerSection = document.querySelector("#alquiler")
    
    for (let propiedadAlquiler of propiedadesAlquiler){
        
        let templateAlquiler = `
        <div class="col-md-3 mb-4">
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
              `;
              if (propiedadAlquiler.smoke){
                templateAlquiler += `
                <p class="text-success">
                  <i class="fas fa-smoking"></i> Permitido fumar
                </p>
                
                `;
              }
              else {
                templateAlquiler += `
                <p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>
                `;
              }
              if (propiedadAlquiler.pets){
                templateAlquiler += `
                <p class="text-success">
                  <i class="fas fa-paw"></i> Mascotas permitidas
                </p>
                `;
              }
              else {
                templateAlquiler += `
                <p class="text-danger">
                  <i class="fas fa-ban"></i> No se permiten mascotas
                </p>
                `;
              }
              templateAlquiler += `
                </div>
                </div>
                </div>
              `;
              alquilerSection.innerHTML += templateAlquiler;
}
