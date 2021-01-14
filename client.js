function spHREmploymentInfo($scope, $element, $window, $location, $rootScope, $timeout, snAttachmentHandler, $http) {
	
	//Form Sections
	var fields = {
		hr_profile:['position','business_title','start_date','end_date','u_business_segment','u_division','department']
	}
	
	$scope.getProfileModelFields = function() {
		
		return $scope.data.hrProfileModelList.filter(function(field) {
			 return $scope.displayField("hr_profile", field.name);
			}
		);

	};

	// Why are they in the order that they are in?!
	// Why dateTime not showing?
	
	
	$scope.dataNotEmpty = function() {
		return $scope.getProfileModelFields().length > 0;
	};
	
	$scope.contactsExists = function() {
		return $scope.data.contactsExists;
	};
	
	var models = {
		hr_profile: $scope.data.hrProfileModel
	};
	
	$scope.displayField = function(tableName, field, isHeader) {
		if (!isHeader && fields[tableName].indexOf(field) == -1 ) return false;
		
		if (models[tableName][field] && models[tableName][field].type === "boolean") return false;
		
		if ($scope.data.isLoggedInUsersProfile) {
			if (models[tableName][field] && models[tableName][field].readonly)
				return models[tableName][field].displayValue;
			else
				return models[tableName][field];
		} else {
			return models[tableName][field] && models[tableName][field].displayValue;
		}
	};
}