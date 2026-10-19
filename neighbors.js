/* Hotels in the cities between and around Ontario and Pomona. Room counts from the listing cited on each card; positions placed by address, approximate. */
const NSRC={
 hgp:['HotelGuides, Pomona hotels','https://hotelguides.com/california/pomona-ca-hotels.html'],
 hgc:['HotelGuides, Claremont hotels','https://hotelguides.com/california/claremont-ca-hotels.html'],
 hgu:['HotelGuides, Upland hotels','https://hotelguides.com/california/upland-ca-hotels.html'],
 hgch:['HotelGuides, Chino hotels','https://hotelguides.com/california/chino-ca-hotels.html'],
 hpf:['HotelPlanner, hotels near Fairplex','https://www.hotelplanner.com/Hotels/44918-NEAR-LA-County-Fairplex'],
 hpp:['HotelPlanner, Pomona hotels','https://www.hotelplanner.com/Hotels/8478-in-Pomona-CA'],
 hpm:['HotelPlanner, Montclair hotels','https://www.hotelplanner.com/Hotels/53154-in-Montclair-CA.html'],
 mc:['Meetings & Conventions, Sheraton Fairplex listing','https://www.meetings-conventions.com/Meeting-Event-Venues/Pomona-CA/Convention-Hotel/Sheraton-Fairplex-Hotel-Conference-Ctr-p51087111']
};
const NH=[
 {c:'Pomona',t:'full',n:'Sheraton Fairplex Hotel & Conference Center',a:'601 W McKinley Ave, Pomona',r:244,lat:34.0856,lng:-117.7700,s:['mc'],note:'On the Fairplex grounds next to the LA28 cricket stadium; 61,904 sq ft of meeting space. Expect LA28 and broadcast blocks.'},
 {c:'Pomona',t:'full',n:'DoubleTree by Hilton Pomona',a:'3101 W Temple Ave, Pomona',r:131,lat:34.0587,lng:-117.8110,s:['hgp']},
 {c:'Pomona',t:'select',n:'Hilton Garden Inn Pomona',a:'2027 Rancho Valley Dr, Pomona',r:148,lat:34.0332,lng:-117.7818,s:['hgp']},
 {c:'Pomona',t:'select',n:'La Quinta Inn & Suites Pomona',a:'3200 W Temple Ave, Pomona',r:162,lat:34.0596,lng:-117.8124,s:['hgp']},
 {c:'Pomona',t:'select',n:'Kellogg West Conference Center & Hotel (Cal Poly Pomona)',a:'3801 W Temple Ave, Pomona',r:85,lat:34.0616,lng:-117.8175,s:['hpp']},
 {c:'Pomona',t:'select',n:'Comfort Inn Pomona',a:'1421 S Garey Ave, Pomona',r:51,lat:34.0412,lng:-117.7503,s:['hgp']},
 {c:'Pomona',t:'econ',n:'Motel 6 Pomona',a:'2470 S Garey Ave, Pomona',r:null,lat:34.0296,lng:-117.7505,s:['hpp']},
 {c:'Pomona',t:'econ',n:'Passport Inn Pomona',a:'130 E Holt Ave, Pomona',r:null,lat:34.0592,lng:-117.7488,s:['hpp']},
 {c:'Pomona',t:'econ',n:'American Inn & Suites Pomona',a:'310 E Foothill Blvd, Pomona',r:29,lat:34.1056,lng:-117.7462,s:['hpp']},
 {c:'Claremont',t:'full',n:'DoubleTree by Hilton Claremont',a:'555 W Foothill Blvd, Claremont',r:190,lat:34.1071,lng:-117.7232,s:['hgc']},
 {c:'Claremont',t:'econ',n:'Motel 6 Claremont',a:'840 S Indian Hill Blvd, Claremont',r:null,lat:34.0844,lng:-117.7188,s:['hpf']},
 {c:'Claremont',t:'econ',n:'Knights Inn Claremont',a:'721 S Indian Hill Blvd, Claremont',r:null,lat:34.0856,lng:-117.7193,s:['hpf']},
 {c:'Montclair',t:'econ',n:'Ontario Inn & Suites (Montclair)',a:'5361 Holt Blvd, Montclair',r:66,lat:34.0632,lng:-117.6962,s:['hpm'],note:'On the Holt Blvd corridor, on the West Valley Connector BRT alignment.'},
 {c:'Upland',t:'select',n:'SureStay Plus Hotel by Best Western Upland',a:'1191 E Foothill Blvd, Upland',r:110,lat:34.1066,lng:-117.6303,s:['hgu']},
 {c:'Upland',t:'econ',n:'Super 8 by Wyndham Upland',a:'1282 W 7th St, Upland',r:62,lat:34.0977,lng:-117.6692,s:['hpf']},
 {c:'Chino',t:'ext',n:'Extended Stay America Suites Chino',a:'4325 Corporate Center Ave, Chino',r:102,lat:34.0330,lng:-117.6830,s:['hgch']},
 {c:'Chino',t:'select',n:'Best Western Pine Tree Motel Chino',a:'12018 Central Ave, Chino',r:42,lat:34.0150,lng:-117.6895,s:['hgch']},
 {c:'Chino',t:'econ',n:'Motel 6 Chino',a:'12266 Central Ave, Chino',r:93,lat:34.0116,lng:-117.6895,s:['hpf']}
];
