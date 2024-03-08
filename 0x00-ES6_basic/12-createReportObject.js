export default function creatReportObject(employeesList) {
	return {
		allEmployees: {
			...employeesList,
		},
		getNumberOfDepartments(employeesList) {
			return Object.keys(employeesList).length;
		},
	};
}
