/** @param {NS} ns */
export async function main(ns) {
	const target = ns.args[0]
	const threadsAvail = ns.args[1]
	ns.disableLog("getServerSecurityLevel")
	ns.disableLog("getServerMinSecurityLevel")
	ns.disableLog("getServerMoneyAvailable")
	ns.disableLog("getServerMaxMoney")
	let minSecurity = ns.getServerMinSecurityLevel(target)
	let maxMoney = ns.getServerMaxMoney(target)

	while (true) {
		ns.print(`${target} security: ` + ns.getServerSecurityLevel(target).toFixed(2) + "/" + minSecurity)
		ns.print(`${target} money: ` + ns.getServerMoneyAvailable(target).toFixed(2) + " / " + maxMoney)
		if (ns.getServerSecurityLevel(target) - minSecurity > (0.05 * threadsAvail)){
			await ns.weaken(target);
		}
		else if (ns.getServerMoneyAvailable(target) / maxMoney < 0.8) {
			await ns.grow(target);
		}
		else {
			await ns.hack(target);
		}
	}
}