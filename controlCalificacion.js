// NUESTRA BASE DE DATOS EN MEMORIA (Simulación)
let usuarios = [
    { id: 1, nombre: "Ana Gómez", email: "ana@email.com" },
    { id: 2, nombre: "Carlos Ruiz", email: "carlos@email.com" }
];

// 1. CREATE (Crear un nuevo usuario)
function crearUsuario(nombre, email) {
    const nuevoUsuario = {
        id: usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1,
        nombre: nombre,
        email: email
    };
    usuarios.push(nuevoUsuario);
    console.log(`✅ Usuario creado: ${nombre}`);
    return nuevoUsuario;
}

// 2. READ (Leer/Mostrar usuarios)
function obtenerUsuarios() {
    console.log("--- Lista de Usuarios ---");
    if (usuarios.length === 0) {
        console.log("No hay usuarios registrados.");
    } else {
        console.table(usuarios); // Muestra los datos en una tabla limpia en la consola
    }
    return usuarios;
}

function obtenerUsuarioPorId(id) {
    const usuario = usuarios.find(u => u.id === id);
    if (!usuario) {
        console.warn(`⚠️ Usuario con ID ${id} no encontrado.`);
        return null;
    }
    return usuario;
}

// 3. UPDATE (Actualizar un usuario existente)
function actualizarUsuario(id, nuevosDatos) {
    const usuario = obtenerUsuarioPorId(id);
    
    if (usuario) {
        // Modifica solo las propiedades que se envíen en 'nuevosDatos'
        Object.assign(usuario, nuevosDatos);
        console.log(`🔄 Usuario con ID ${id} actualizado con éxito.`);
        return usuario;
    }
    return null;
}

// 4. DELETE (Eliminar un usuario)
function eliminarUsuario(id) {
    const indice = usuarios.findIndex(u => u.id === id);
    
    if (indice !== -1) {
        const usuarioEliminado = usuarios.splice(indice, 1);
        console.log(`❌ Usuario con ID ${id} eliminado.`);
        return usuarioEliminado[0];
    } {
        console.warn(`⚠️ No se pudo eliminar: ID ${id} no existe.`);
        return null;
    }
}

// ==========================================
// DEMOSTRACIÓN DE USO (Pruebas en consola)
// ==========================================

// Ver estado inicial
obtenerUsuarios();

// Crear usuarios
crearUsuario("Lucía Fernández", "lucia@email.com");
crearUsuario("Marcos López", "marcos@email.com");
obtenerUsuarios();

// Actualizar el email de Carlos (ID: 2)
actualizarUsuario(2, { email: "carlos_nuevo@email.com" });
obtenerUsuarios();

// Eliminar a Ana (ID: 1)
eliminarUsuario(1);
obtenerUsuarios();
