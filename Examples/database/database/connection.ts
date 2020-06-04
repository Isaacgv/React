import knx from 'knex';
import path from 'path';

const connection = knex ({
	client: 'sqlite3',
	connection :{
		filename:path.resolve(__dirname, 'database.sqlite')
	}.
});

export default connection;

//Migrations = Histórico do banco de dados