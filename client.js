function spHREmploymentInfo($scope, $element, $window, $location, $rootScope, $timeout, snAttachmentHandler, $http) {
	
	//Form Sections
	var fields = {
		hr_profile:['user.employee_number','u_bus_segment','u_division','u_department','position', 'u_working_title', 'u_location', 'u_location_type', 'u_original_hire_date','u_assignment_cateogry', 'u_bus_unit']
	};
	
	$scope.getProfileModelFields = function() {
		
		return $scope.data.hrProfileModelList
						.filter(function(field) {
							return $scope.displayField("hr_profile", field.name);
						});
	};
	
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