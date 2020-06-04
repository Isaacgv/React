import express from 'express';

const app = express();

app.use(express.json())

//Rota: Endereço completo da requisição
//Recurso: Qual entidade estamos acessando do sistema

//GET: Buscar uma ou mais informaçoes do back-end
//POST: Criar uma nova informação no back-end
//PUT: Actualizar uma informação existente no back-end
//DELETE: Remover uma informação do back-end

//Request Param: Parâmetros que vem na própria rota que identificam um Recurso
//Query Param: Pârametros que vem na própia rota generalmente opcionais para filtros, paginañçao
//Request Body: Parâmetros para criaçao/actualizaçao de informaçoes

const users = [
		'Daniel',
		'Cleiton',
		'Carlos',
		'Luis'
];

app.get('/users', (request, response) => {
	const search = String(request.query.search);

	const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
	//console.log('List users');

	//response.send('Hello World');
	return response.json(filteredUsers);

});

app.get('/users/:id', (request, response) => {
	const id = Number(request.params.id);

	const user = users[id];

	return response.json(user);
});

app.post('/users', (request, response) => {
	const data = request.body;
	console.log(data);

	const user = {
		name :data.name,
		email : data.email,
	};
    return response.json(user);
});


app.listen(3333);