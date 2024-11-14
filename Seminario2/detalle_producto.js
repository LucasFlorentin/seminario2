/**//**//**//**//**//**/

// Obtener el parámetro "producto" de la URL
const urlParams = new URLSearchParams(window.location.search);
const producto = urlParams.get("producto");

// Definir los detalles de cada producto con múltiples imágenes y descripciones
const productosDetalles = {
    laptop: {
        title: "Catálogo de Notebooks",
        details: [
            { image: "imagenes/laptop1.jpg", description: "*Procesador: Intel Core I5-9300H de 2.4 GHz. *Memoria RAM: 8 GB DDR4. *Memoria de almacenamiento: SSD de 512 GB. *Gráficos: NVIDIA GeForce GTX 1650 4GB GDDR5. *Sistema operativo: Windows 10 Home " },
            { image: "imagenes/laptop2.jpg", description: "*Pantalla: IPS de 16.1 con resolución Full HD 1920 x 1080p. *Procesador: Intel Core i5-11400H Hexa-Core 2.70 GHz. *Memoria RAM: 8 GB DDR4. *Memoria de almacenamiento: SSD NVMe M.2 de 256 GB. *Gráficos: NVIDIA GeForce RTX 3050 de 4 GB GDDR6. *Sistema operativo: Windows 11 Home" },
            { image: "imagenes/laptop3.jpg", description: "*Pantalla: IPS de 15.6 Full HD de 1920 x 1080p a 144 Hz. *Procesador: Intel Core i5-10300H Quad-Core 2.5 GHz. *Memoria RAM: 8 GB DDR4. *Memoria de almacenamiento: SSD M.2 de 512 GB. *Gráficos: NVIDIA GeForce GTX 1650Ti de 4 GB GDDR6. *Sistema operativo: Windows 10 Home." }
        ]
    },
    monitor: {
        title: "Catálogo de Monitores",
        details: [
            { image: "imagenes/monitor1.jpg", description: "*Tipo de pantalla: IPS de 27. *Resolución: Full HD 1920 x 1080p. *Frecuencia de actualización: 240 Hz. *Tiempo de respuesta: 1 ms (GTG). *Ángulo de visión: 178°. *Tecnología: AMD FreeSync Premium. *Incluye: Cable HDMI y Display Port." },
            { image: "imagenes/monitor2.jpg", description: "*Tipo de pantalla: Curvo de 32. *Resolución: Full HD 1920 x 1080p. *Frecuencia de actualización: 165 Hz. *Tiempo de respuesta: 1 ms (MPRT). *Ángulo de visión: 178°. *Tecnología: AMD FreeSync Premium. *Curvatura: 1500R." },
            { image: "imagenes/monitor3.jpg", description: "*Tamaño de Pantalla 27. *Panel VA. *Forma Curva. *Resolución FULLD HD 1920*1080. *Tasa de Refresco 165HZ. *Conexiones 1XDPI/2XHDMI. *Iluminación RGB. *Base Metal. *Grado de Panel A+. *Incluye Cable DPI.  " }
        ]
    },
    teclado: {
        title: "Catálogo de Teclados",
        details: [
            { image: "imagenes/teclado1.jpg", description: "Teclas mecánicas de alta precisión, ideales para gaming." },
            { image: "imagenes/teclado2.jpg", description: "Teclas mecánicas de alta precisión, ideales para gaming." },
            { image: "imagenes/teclado3.jpg", description: "Iluminación RGB personalizable en cada tecla." }
        ]
    },
    raton: {
        title: "Catálogo de Mouses",
        details: [
            { image: "imagenes/raton1.jpg", description: "Mouse REDRAGON IMPACT ELITE M913 – Black" },
            { image: "imagenes/raton2.jpg", description: "*Botones programables: 11. *Sensor: HERO 16K de 16.000 DPI máximo. *Velocidad máxima: 400 ips. *Iluminación: Lightsync RGB. *Peso: Ajustable. *Conexión: USB." },
            { image: "imagenes/raton3.jpg", description: "*Logitech M720 Triathlon. *Mouse Inalámbrico. *Multi Dispositivo. *Bluetooth. *Receptor USB Unifying. *1000 dpi. *6 Botones Programables. *Batería 2 Años. *Compatible con Laptop. *Mac, iPadOS - Negro." }
        ]
    },
    bobina: {
        title: "Catálogo de Papel para oficina",
        details: [
            { image: "imagenes/bobinaTermica1.jpg", description: "Bobina 57 termica para impresora y calculadoras…" },
            { image: "imagenes/bobinaDoble.jpg", description: "Bobina de Papel Duplicado 75 x 55mm und" },
            { image: "imagenes/formularioContinuo.jpg", description: "Formulario Continuo 5.5´´ x 24cm -Troquelado - SL" },
            { image: "imagenes/papelA4.jpg", description: "*Tamaño: A4 210 x 297 mm. *Peso: 80 g/m², perfecto para trabajos de oficina y hogar. *Compatibilidad con la mayoría de impresoras y copiadoras. *Calidad superior. *Papel blanco brillante *Uso versátil." },
            { image: "imagenes/papelOficio.jpg", description: "*Tamaño Oficio. *50 hojas para impresión. * Gramaje: 75 g/m². * Formato: Oficio 2 (216 x 330 mm)" },
        ]
    }
};

// Mostrar el producto si está en la lista
if (productosDetalles[producto]) {
    const detalles = productosDetalles[producto];
    document.getElementById("productTitle").textContent = detalles.title;

    // Crear y agregar cada imagen con su descripción al contenedor
    const productContent = document.getElementById("productContent");
    detalles.details.forEach(detalle => {
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");

        const img = document.createElement("img");
        img.src = detalle.image;
        img.alt = detalles.title;
        
        const description = document.createElement("p");
        description.textContent = detalle.description;

        // Añadir un evento de clic para abrir la imagen en la modal
        img.addEventListener("click", () => {
            // Mostrar la ventana modal con la imagen y la descripción en lista
            const modal = document.getElementById("imageModal");
            const modalImage = document.getElementById("modalImage");
            const modalDescription = document.getElementById("modalDescription");

            modal.style.display = "flex"; // Mostrar la modal
            modalImage.src = detalle.image; // Establecer la imagen

            // Crear una lista de descripción a partir del texto
            const descriptionList = detalle.description.split("*").filter(item => item.trim() !== ""); // Dividir la descripción en puntos
            modalDescription.innerHTML = ""; // Limpiar cualquier contenido previo

            const ul = document.createElement("ul");
            descriptionList.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item.trim(); // Crear el elemento de lista y añadir el texto
                ul.appendChild(li);
            });

            modalDescription.appendChild(ul); // Añadir la lista a la modal
        });

        imageContainer.appendChild(img);
        imageContainer.appendChild(description);
        productContent.appendChild(imageContainer);
    });
} else {
    document.getElementById("productTitle").textContent = "Producto no encontrado";
    document.getElementById("productContent").textContent = "El producto solicitado no está disponible.";
}


// Lógica para cerrar la modal cuando se haga clic en el icono de cierre
const closeModal = document.querySelector(".close");
closeModal.addEventListener("click", () => {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Cerrar la modal
});
