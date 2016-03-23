angular.module('formify.services', [])

.factory('Formlist', function(){
	var list = [{
		name: 'Consillium Onboard/Offboarding Form',
		url: '/form1'
	},{
		name: 'Business Card Request Form',
		url: '/form2'
	},{
		name: '2201 Parking Request Form',
		url: '/form3'
	},{
		name: 'Employee Badge Access Form',
		url: '/form4'
	},{
		name: 'Consillium Parking Request Form',
		url: '/form5'
	},{
		name: 'Host on Demand Account Access Form',
		url: '/form6'
	},{
		name: 'IT-Store Account Access Form',
		url: '/form7'
	},{
		name: 'Operational Readiness Submission Form',
		url: '/form8'
	},{
		name: 'Intralink Account Creation Form',
		url: '/form9'
	}];

	return {
		all: function(){
			return list;
		}
	}
})