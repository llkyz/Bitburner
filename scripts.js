/** @param {NS} ns */
export async function main(ns) {
	let arrayServers = [
		{source: 'n00dles', target: 'n00dles'},
		{source: 'foodnstuff', target: 'foodnstuff'},
		{source: 'nectar-net', target: 'nectar-net'},
		{source: 'neo-net', target: 'neo-net'},
		{source: 'sigma-cosmetics', target: 'sigma-cosmetics'},
		{source: 'CSEC', target: 'nectar-net'},
		{source: 'zer0', target: 'zer0'},
		{source: 'max-hardware', target: 'max-hardware'},
		{source: 'joesguns', target: 'joesguns'},
		{source: 'hong-fang-tea', target: 'hong-fang-tea'},
		{source: 'harakiri-sushi', target: 'harakiri-sushi'},
		{source: 'phantasy', target: 'phantasy'},
		{source: 'iron-gym', target: 'iron-gym'},
		]
	for (const x of arrayServers) {
		//ns.tprint(`source: ${x.source}, target: ${x.target}`)
		let threadsAvail = Math.floor(ns.getServerMaxRam(x.source) / 2.4)
		ns.tprint(`Running hack.js on ${x.source}/${x.target}`)
		ns.exec("hack.js", x.source, threadsAvail, x.target, threadsAvail)
	}
	//ns.exec("hack.js", "n00dles", 1, "n00dles");
	//ns.run("n00dles.js");
	//ns.run("foodnstuff.js");
}

// Locked nets
//=============================
// sigma-cosmetics -> max-hardware -> phantasy [100/2 ports]
// sigma-cosmetics -> CSEC -> silver-helix [150/2 ports]
// sigma-cosmetics -> CSEC -> silver-helix -> johnson-ortho [289/2 ports]
// sigma-cosmetics -> CSEC -> silver-helix -> johnson-ortho -> rothman-uni [429/3 ports]
// sigma-cosmetics -> CSEC -> silver-helix -> johnson-ortho -> zb-institute [734/5 ports]
// sigma-cosmetics -> CSEC -> silver-helix -> johnson-ortho -> zb-institute -> rho-construction [480/3 ports]
// sigma-cosmetics -> CSEC -> silver-helix -> johnson-ortho -> zb-institute -> rho-construction -> snap-fitness [699/4ports]
// sigma-cosmetics -> CSEC -> omega-net [209/2 ports]
// sigma-cosmetics -> CSEC -> omega-net -> the-hub [284/2 ports]
// sigma-cosmetics -> CSEC -> omega-net -> computek [400/3 ports]
// sigma-cosmetics -> CSEC -> omega-net -> netlink [381/3 ports]
// sigma-cosmetics -> CSEC -> omega-net -> netlink -> I.I.I.I [364/3 ports]
// sigma-cosmetics -> CSEC -> omega-net -> netlink -> I.I.I.I -> alpha-ent [597/4 ports]
// sigma-cosmetics -> CSEC -> omega-net -> crush-fitness [270/2 ports]
// sigma-cosmetics -> CSEC -> omega-net -> crush-fitness -> catalyst [424/3 ports]
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h [205/2 ports]
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> summit-uni [436/3 ports]
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> summit-uni -> millenium-fitness [482/3 ports]
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore [554/4 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp [728/4 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp -> galactic-cyber [835/5 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp -> galactic-cyber -> deltaone [843/5 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp -> galactic-cyber -> deltaone -> univ-energy [894/4 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp -> galactic-cyber -> deltaone -> solaris [846/5 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp -> galactic-cyber -> deltaone -> solaris -> infocomm [885/5 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp -> galactic-cyber -> deltaone -> solaris -> infocomm -> titan-labs [822/5 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp -> galactic-cyber -> deltaone -> solaris -> infocomm -> titan-labs -> stormtech [955/5 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp -> galactic-cyber -> deltaone -> solaris -> infocomm -> titan-labs -> vitalife [786/5 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp -> galactic-cyber -> deltaone -> solaris -> infocomm -> titan-labs -> vitalife -> 4sigma [1109/5 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp -> galactic-cyber -> deltaone -> solaris -> infocomm -> titan-labs -> vitalife -> 4sigma -> clarkinc [1158/5 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp -> galactic-cyber -> deltaone -> solaris -> infocomm -> titan-labs -> vitalife -> 4sigma -> powerhouse-fitness [1064/5 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp -> galactic-cyber -> deltaone -> solaris -> infocomm -> titan-labs -> vitalife -> 4sigma -> powerhouse-fitness -> ecorp [1190/5 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp -> galactic-cyber -> deltaone -> solaris -> infocomm -> titan-labs -> vitalife -> kuai-gong [1107/5 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp -> galactic-cyber -> deltaone -> solaris -> infocomm -> titan-labs -> vitalife -> kuai-gong -> b-and-a [998/5 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp -> galactic-cyber -> deltaone -> solaris -> infocomm -> titan-labs -> vitalife -> kuai-gong -> blade [1121/5 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp -> galactic-cyber -> deltaone -> solaris -> infocomm -> titan-labs -> vitalife -> kuai-gong -> blade -> fulcrumassets [1572/5 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp -> galactic-cyber -> deltaone -> solaris -> infocomm -> titan-labs -> vitalife -> kuai-gong -> blade -> The-Cave [925/5 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp -> galactic-cyber -> deltaone -> solaris -> infocomm -> applied-energetics [791/4 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp -> galactic-cyber -> deltaone -> solaris -> infocomm -> applied-energetics -> helios [819/5 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp -> galactic-cyber -> deltaone -> zeus-med [845/5 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp -> galactic-cyber -> deltaone -> zeus-med -> zb-def [801/4 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp -> galactic-cyber -> deltaone -> zeus-med -> zb-def -> microdyne [871/5 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp -> galactic-cyber -> deltaone -> zeus-med -> zb-def -> run4theh111z [548/4 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp -> galactic-cyber -> deltaone -> zeus-med -> zb-def -> run4theh111z -> fulcrumtech [951/5 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp -> galactic-cyber -> deltaone -> zeus-med -> zb-def -> run4theh111z -> fulcrumtech -> omnitek [966/5 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp -> galactic-cyber -> deltaone -> zeus-med -> zb-def -> run4theh111z -> fulcrumtech -> omnitek -> nwo [1168/5 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp -> galactic-cyber -> deltaone -> zeus-med -> zb-def -> run4theh111z -> fulcrumtech -> omnitek -> nwo -> megacorp [1288/5 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp -> galactic-cyber -> deltaone -> zeus-med -> zb-def -> run4theh111z -> fulcrumtech -> . [518/4 ports] 
// sigma-cosmetics -> CSEC -> omega-net -> avmnite-02h -> syscore -> lexo-corp -> galactic-cyber -> deltaone -> zeus-med -> nova-med [802/4 ports]