// Lista de usuarios permitidos con correos y contraseñas correspondientes
// const usuariosPermitidos = [
//     { email: "lucas@gmail.com", password: "lucas123" },
//     { email: "javier@gmail.com", password: "javier123" },
//     { email: "test@gmail.com", password: "test123" }
// ];

// // Evento de envío de formulario
// document.getElementById("loginForm").addEventListener("submit", function(event) {
//     event.preventDefault();

//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     // Función para verificar las credenciales
//     const usuarioValido = usuariosPermitidos.find(usuario => usuario.email === email && usuario.password === password);

//     if (usuarioValido) {
//         // Redirigir a la página de productos si las credenciales son correctas
//         window.location.href = "productos.html";
//     } else {
//         // Mostrar un mensaje de error si las credenciales no son válidas
//         alert("Correo electrónico o contraseña incorrectos. Intente nuevamente.");
//     }
// });

//  Lista de usuarios permitidos con correos y contraseñas correspondientes
 const usuariosPermitidos = [
     { email: "lucas@gmail.com", password: "lucas123" },
     { email: "javier@gmail.com", password: "javier123" },
     { email: "test@gmail.com", password: "test123" }
 ];

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    const usuarioValido = usuariosPermitidos.find(usuario => usuario.email === email && usuario.password === password);

    if (usuarioValido) {
        window.location.href = "productos.html";
    } else {
        if (!errorMessage) {
            const errorDiv = document.createElement("div");
            errorDiv.id = "error-message";
            errorDiv.textContent = "Correo electrónico o contraseña incorrectos. Intente nuevamente.";
            errorDiv.style.color = "red ";
            document.querySelector(".login-container").appendChild(errorDiv);
        } else {
            errorMessage.style.display = "block";
        }
    }
});