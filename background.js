var gr = new GlideRecord('sn_hr_core_projects');
gr.get("u_user","5786db48db35641056c7c1391396194e");

for (var key in gr) {
gs.info(gr[key]);
}


// Print all GR props (or just check xml you dummy)
sysUserID = gs.getUser().getID();
var gr = new GlideRecord("sn_hr_core_projects");
if (gr.get("u_user", sysUserID)) {
for (var prop in gr) {
gs.print(prop + ":" + gr[prop]);
    }
}

gs.info(gs.getUser().getID());

var gr = new GlideRecord("sn_hr_core_projects");
if (gr.get("5786db48db35641056c7c1391396194e")) {
for (var prop in gr) {
gs.print(prop + ":" + gr[prop]);
    }
}

u_user:f1ccf6781347a60043d1d7566144b0da
