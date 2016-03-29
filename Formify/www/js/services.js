angular.module('formify.services', [])

.factory('Formlist', function(){
	var list = [{
		name: 'Consillium Onboard/Offboarding Form',
		url: '/form1',
		infoIcon: 'ion-ios-information-outline'
	},{
		name: 'Business Card Request Form',
		url: '/form2',
		infoIcon: 'ion-ios-information-outline'
	},{
		name: '2201 Parking Request Form',
		url: '/form3',
		infoIcon: 'ion-ios-information-outline'
	},{
		name: 'Employee Badge Access Form',
		url: '/form4',
		infoIcon: 'ion-ios-information-outline'
	},{
		name: 'Consillium Parking Request Form',
		url: '/form5',
		infoIcon: 'ion-ios-information-outline'
	},{
		name: 'Host on Demand Account Access Form',
		url: '/form6',
		infoIcon: 'ion-ios-information-outline'
	},{
		name: 'IT-Store Account Access Form',
		url: '/form7',
		infoIcon: 'ion-ios-information-outline'
	},{
		name: 'Operational Readiness Submission Form',
		url: '/form8',
		infoIcon: 'ion-ios-information-outline'
	},{
		name: 'Intralink Account Creation Form',
		url: '/form9',
		infoIcon: 'ion-ios-information-outline'
	}];

	return {
		all: function(){
			return list;
		}
	}
})