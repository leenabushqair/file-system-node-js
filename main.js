const csv = require('csv-parser');
const fs = require('fs');
let users = []; //to store the result of the csv file here!

 function readPlain () {
	const data=fs.readFileSync("input.csv", "utf-8", function(err){console.log(err);});
	const userFields = ["id", "first_name", "last_name","email", "gender","ip_address","color","parentId"];
 	users = data.split('\n').slice(1).filter(Boolean).map(user=>{
		const userParts =user.split(',');
		const parts= userParts.map((part, index)=>({[userFields[index]]:part}));
		return Object.assign({},...parts);
	});	
}
	
function saveToFile (users) {	
	console.log(users.map((user) => user.first_name));
	const stringifiedUsers  = JSON.stringify(users.map((user) => user.first_name));
	fs.writeFile('output.json', stringifiedUsers , 'utf8', function(err){console.log(err);});
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
readPlain()
saveToFile(users);
readJsonFile();
