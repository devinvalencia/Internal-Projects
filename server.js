data.sysUserID = $sp.getParameter("sys_id");
if (!data.sysUserID)
       data.sysUserID = gs.getUser().getID();
var sysUserGR = new GlideRecord("sys_user");

var hrProfileGR = new GlideRecord("sn_hr_core_profile");
hrProfileGR.get("user", data.sysUserID);
data.hrProfileID = hrProfileGR.getUniqueValue();

data.userExists = sysUserGR.get(data.sysUserID);
data.profileExists = hrProfileGR.get(data.hrProfileID);

if (data.profileExists) {
	data.name = sysUserGR.getValue("name");
	var loggedInSysUserID = gs.getUser().getID();

	data.isLoggedInUsersProfile = loggedInSysUserID.equals(data.sysUserID);
  
  var hrProfileForm = $sp.getForm("sn_hr_core_profile", data.hrProfileID);
	data.hrProfileView = hrProfileForm._view;
	data.hrProfileModel = hrProfileForm._fields;
	data.hrProfileModelList = [];
  
	for (var i = 0; i < data.hrProfileView.length; i++) {
        data.hrProfileModelList.push(data.hrProfileModel[data.hrProfileView[i].name]);
	}
}


