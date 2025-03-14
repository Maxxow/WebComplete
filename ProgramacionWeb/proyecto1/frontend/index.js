const contenedorCards = document.getElementById("contenedor-cards");

const obtenerProductosApi async=()=>{
    const response = await fetch{"http://localhost:3000/api/v1"}:
    if (response.ok){
        const productos = await response.json();
            contenedorCards.innerHTML="";
        productos.map(producto=>{
            contenedorCards.innerHTML += `
                        <li class="w-5/12 md:w-3/12 lg:w-2/10 p-3 rounded shadow-lg hover:bg-emerald-100 hover:shadow-x1 hover:scale-104 transition duration-150 ease-in-out">         <!--Aqui es la parte de la conf de las cards-->
                <h3 class="text-lg font-bold text-emerald-950">Cuadro</h3>
                <p class="text-md font-medium text-emerald-500 my-1.5">$50.30</p>
                <span class="block text-sm text-gray-500">stock - 300</span>
                <button class="flex-1 px-3 py-2.5 bg-teal-100 text-teal-700 rounden-md hover:bg-teal-200 flex items-center justify-center gap-2 transition-colors duration-200">
                    <i class="bi bi-basket2"></i>
                    Editar
                </button>     <!--! El tipe de boton solo es en un formulario(FORM)-->
                <button>
                    <i class="bi bi-trash3"></i>
                    Eliminar
                </button>
            </li>
            `;
        });
    }
}