angular.module('formify.services', [])

.factory('Formlist', function(){
	var list = [{
		name: 'Consillium Onboard/Offboarding Form',
		url: '/form1',
		desc: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
	},{
		name: 'Business Card Request Form',
		url: '/form2',
		desc: 'Est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
	},{
		name: '2201 Parking Request Form',
		url: '/form3',
		desc: 'Duis non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
	},{
		name: 'Employee Badge Access Form',
		url: '/form4',
		desc: 'Uis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
	},{
		name: 'Consillium Parking Request Form',
		url: '/form5',
		desc: 'Is mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
	},{
		name: 'Host on Demand Account Access Form',
		url: '/form6',
		desc: 'Les mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
	},{
		name: 'IT-Store Account Access Form',
		url: '/form7',
		desc: 'Kmollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
	},{
		name: 'Operational Readiness Submission Form',
		url: '/form8',
		desc: 'Uuis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
	},{
		name: 'Intralink Account Creation Form',
		url: '/form9',
		desc: 'Ghis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
	}];

	return {
		all: function(){
			return list;
		}
	}
})