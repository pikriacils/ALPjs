const LineConnect = require('./connect');
let LINE = require('./main.js');

const auth = {
	authToken: 'ElsGkF4Al30VdZiQwPD4.dHJZNecxo/xYaCWBafkl5a.d4aZWVn5Z0n2N4KoiRz7xgPF4ybPvesnSXXukQWOdQY=',
	certificate: '4b4e19803a89beaa3f5dc3349a4f732075302f8d3ac684ec552083e439afd0b1',
}
// let client =  new LineConnect(auth);
let client =  new LineConnect();

client.startx().then(async (res) => {
	
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
	}
});
