const express = require("express");
const app = express();
const PORT = 3000;

const swaggerUI = require("swagger-ui-express");

app.use(express.json());

let usuarios = [
  { id: 1, nome: "João" },
  { id: 2, nome: "Maria" }
];

// Rota GET para obter todos os usuários
app.get("/api/usuario/all", (req, res) => {
  res.json(usuarios);
});

app.get("/api/usuario/getById/:id", (req, res) => {
    const { id } = req.params;
    console.log('---- id', id)
    const index = usuarios.findIndex(u => u.id == Number(id));

    console.log('---- index', index)
    if (index > -1) {
        res.json(usuarios[index]);
    } else {
        res.status(404).json({ message: "Usuário não encontrado" });    
    }
});

// Rota POST para adicionar um novo usuário
app.post("/api/usuario", (req, res) => {
  const novoUsuario = { id: usuarios.length + 1, ...req.body };
  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});

// Rota PUT para atualizar um usuário
app.put("/api/usuario/:id", (req, res) => {
  const { id } = req.params;
  const usuarioIndex = usuarios.findIndex(u => u.id == id);
  if (usuarioIndex > -1) {
    usuarios[usuarioIndex] = { id: Number(id), ...req.body };
    res.json(usuarios[usuarioIndex]);
  } else {
    res.status(404).json({ message: "Usuário não encontrado" });
  }
});

// Rota DELETE para remover um usuário
app.delete("/api/usuario/:id", (req, res) => {
  const { id } = req.params;
  const usuarioIndex = usuarios.findIndex(u => u.id == id);
  if (usuarioIndex > -1) {
    usuarios.splice(usuarioIndex, 1);

    console.log('---- usuarios apos delete', usuarios)  
    
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Usuário não encontrado" });
  }


  
});

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(require('./swagger.json')));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});