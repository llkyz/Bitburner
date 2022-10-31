/** @param {NS} ns */
export async function main(ns) {
	let arrayServers = [
		{layer1: 'n00dles', layer2: 'n00dles'},
		{layer1: 'foodnstuff', layer2: 'foodnstuff'}
		]
	for (const x of arrayServers) {
		ns.tprint(`Layer1: ${x.layer1}, Layer2: ${x.layer2}`)
	}
}