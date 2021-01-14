data.sysUserID = $sp.getParameter("sys_id");
if (!data.sysUserID)
       data.sysUserID = gs.getUser().getID();
var sysUserGR = new GlideRecord("sys_user");

var hrProfileGR = new GlideRecord("sn_hr_core_job");
hrProfileGR.get("user", data.sysUserID); // Get me sn_hr_core_job with user value that matches sys_id of current user
data.hrProfileID = hrProfileGR.getUniqueValue(); // Get me sys_id of that record 

data.userExists = sysUserGR.get(data.sysUserID); // Get sys_user record
data.profileExists = hrProfileGR.get(data.hrProfileID); // Get GlideRecord record (sn_hr_job)

if (data.profileExists) {
	data.name = sysUserGR.getValue("name"); // Get User name
	var loggedInSysUserID = gs.getUser().getID();

	data.isLoggedInUsersProfile = loggedInSysUserID.equals(data.sysUserID); // Make sure current user is same
  
  var hrProfileForm = $sp.getForm("sn_hr_core_job", data.hrProfileID); // hrProfileForm is table record of matching sysID
	data.hrProfileView = hrProfileForm._view;
	data.hrProfileModel = hrProfileForm._fields;
	data.hrProfileModelList = [];
  
	for (var i = 0; i < data.hrProfileView.length; i++) {
		data.hrProfileModelList.push(data.hrProfileModel[data.hrProfileView[i].name]); // Adds fields to array?
	}
}


