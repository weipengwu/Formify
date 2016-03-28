angular.module('formify.services', [])

.factory('Formlist', function(){
	var list = [{
		name: 'Consillium Onboard/Offboarding Form',
		url: '/form1',
		test: 'ion-information-circled'
	},{
		name: 'Business Card Request Form',
		url: '/form2',
		test: 'ion-information-circled'
	},{
		name: '2201 Parking Request Form',
		url: '/form3',
		test: 'ion-information-circled'
	},{
		name: 'Employee Badge Access Form',
		url: '/form4',
		test: 'ion-information-circled'
	},{
		name: 'Consillium Parking Request Form',
		url: '/form5',
		test: 'ion-information-circled'
	},{
		name: 'Host on Demand Account Access Form',
		url: '/form6',
		test: 'ion-information-circled'
	},{
		name: 'IT-Store Account Access Form',
		url: '/form7',
		test: 'ion-information-circled'
	},{
		name: 'Operational Readiness Submission Form',
		url: '/form8',
		test: 'ion-information-circled'
	},{
		name: 'Intralink Account Creation Form',
		url: '/form9',
		test: 'ion-information-circled'
	}];

	return {
		all: function(){
			return list;
		}
	}
})