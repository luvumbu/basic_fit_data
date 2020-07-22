var head = new Vue({
  el: '#head',
  data: {    
    title:"Bokonzi"
  }
})

var header = new Vue({
  el: '#header',
  data: {
    
  }
})

var section = new Vue({
  el: '#section',
  data: {
    startdate:'',//ok
		birth_date:'',
		email:'',
		first_name:'',
		gender_s:'',
		home_club:'',
		home_club_id:'',
		iban_account_holder:'',
		labels_country:'',
		last_name:'',
		mailing_city:'',
		mailing_country:'',
		mailing_street:'',
		membership_name_g:'',
		membership_number_s:'',
		payment_plan_name_g:'',
		poste_code:'',
		updatedAt:''
  },
  methods:{
    test:function(){
			
			var el = this;
		  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

			const json = this.responseText;
      const obj = JSON.parse(json);
			console.log(obj);
	//console.log(obj.member.birth_date);
	  el.birth_date =obj.member.birth_date;
		el.email =obj.member.email;
		el.first_name =obj.member.first_name;
		el.gender_s =obj.member.gender_s;
		el.home_club =obj.member.home_club;
		el.home_club_id =obj.member.home_club_id;

		el.iban_account_holder =obj.member.iban_account_holder;
		el.labels_country =obj.member.labels_country;
		el.last_name =obj.member.last_name;
		el.mailing_city =obj.member.mailing_city;
		el.mailing_country =obj.member.mailing_country;

		el.mailing_street =obj.member.mailing_street;
		el.membership_name_g =obj.member.membership_name_g;
		el.membership_number_s =obj.member.membership_number_s;
		el.payment_plan_name_g =obj.member.payment_plan_name_g;
		el.poste_code =obj.member.poste_code;
		el.updatedAt =obj.member.updatedAt;

		


    el.startdate =obj.member.join_date_g;

    }
  };
  xhttp.open("GET", "my-basic-fit-data.json", true);
  xhttp.send();

	}
  }
})

var footer = new Vue({
  el: '#footer',
  data: {
    
  }
})
 


