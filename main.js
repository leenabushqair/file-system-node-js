const csv = require('csv-parser');
const fs = require('fs');
const results = []; //to store the result of the csv file here!

function readPlain () {
	fs.createReadStream('input.csv')
	.pipe(csv({}))
	.on('data', (data) => results.push(data))
	.on('end', () => {
		console.log(results);
	}
	);
}

function saveToFile (usersArr) {
	var obj = {users: usersArr};		
	var json = JSON.stringify(obj);
	fs.writeFile('output.json', json, 'utf8', function(err){console.log(err);});
}
  
function readJsonFile() {
	fs.readFile('output.json', 'utf-8', (err, data) => {
		if (err) {
			throw err;
		}
		const user = JSON.parse(data.toString());
		console.log(user);
	});
}

let usersArr = ['user1', 'user2', 'user3'];
readPlain();
saveToFile(usersArr);
readJsonFile();