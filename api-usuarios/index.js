const express = require('express'); // importa el framework Express.
const cors = require('cors'); // importa para que podamos llamarlo desde otros servidores-puertos

const app = express(); // crea la aplicación web
const PORT = 3000; // establecemos el puerto donde escucha

// Middleware para JSON
app.use(express.json());
// permite peticiones desde otros orígenes (Angular)
app.use(cors()); 

// Datos
let usuarios = [
  { id: 1, nombre: "Ana", email: "ana@email.com" },
  { id: 2, nombre: "Luis", email: "luis@email.com" }
];

// GET /usuarios para obtener todos
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// GET /usuarios/:id le pasadamos un parametro para obtner uno si no existe da un error
app.get('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === id);

  if (!usuario) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  res.json(usuario);
});

// POST /usuarios crear un usuario
app.post('/usuarios', (req, res) => {
  const { nombre, email } = req.body;

  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre,
    email
  };

  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

// PUT /usuarios/:id - actualizar los datos del usuario
app.put('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === id);

  if (!usuario) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  usuario.nombre = req.body.nombre || usuario.nombre;
  usuario.email = req.body.email || usuario.email;

  res.json(usuario);
});

// DELETE /usuarios/:id eliminar usuario
app.delete('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  usuarios = usuarios.filter(u => u.id !== id);

  res.json({ mensaje: "Usuario eliminado" });
});

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`Servidor REST activo en http://localhost:${PORT}`);
});
