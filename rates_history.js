/* Monthly nightly-rate snapshots for Ontario hotels: lowest and highest typical nightly price seen across room types for 2 guests, taxes and fees included, from Kayak or Hotels.com searches on the date shown. A scheduled task appends one entry per month; the quarterly and seasonal averages on each hotel card are computed from these. Keys are the hotel names used in the H array. */
const RATES_HIST=[
 {
  "m": "2026-10",
  "d": "2026-10-18",
  "src": "Kayak and Hotels.com",
  "rates": {
   "Comfort Inn Pomona": {"lo": 93, "hi": 93, "src": "Hotels.com, Oct 19, 2026, stay about Nov 16"},
   "Comfort Inn Fontana": {"lo": 95, "hi": 95, "src": "Hotels.com, Oct 19, 2026, stay about Nov 16"},
   "Hilton Garden Inn San Bernardino": {"lo": 98, "hi": 98, "src": "Hotels.com, Oct 19, 2026, stay about Nov 16"},
   "Hampton Inn & Suites San Bernardino": {"lo": 98, "hi": 98, "src": "Hotels.com, Oct 19, 2026, stay about Nov 16"},
   "La Quinta Inn & Suites San Bernardino": {"lo": 92, "hi": 92, "src": "Hotels.com, Oct 19, 2026, stay about Nov 16"},
   "Best Western San Bernardino Hotel": {"lo": 104, "hi": 104, "src": "Hotels.com, Oct 19, 2026, stay about Nov 16"},
   "Staybridge Suites San Bernardino": {"lo": 145, "hi": 145, "src": "Hotels.com, Oct 19, 2026, stay about Nov 16"},
   "Hampton Inn & Suites Riverside/Corona East": {"lo": 98, "hi": 98, "src": "Hotels.com, Oct 19, 2026, stay about Nov 16"},
   "Raincross Hotel Riverside": {"lo": 119, "hi": 119, "src": "Hotels.com, Oct 19, 2026, stay about Nov 16"},
   "Dynasty Suites Riverside": {"lo": 96, "hi": 96, "src": "Hotels.com, Oct 19, 2026, stay about Nov 16"},
   "Best Western Corona Hotel & Suites": {"lo": 82, "hi": 82, "src": "Hotels.com, Oct 19, 2026, stay about Nov 16"},
   "Ayres Hotel East Corona": {"lo": 129, "hi": 129, "src": "Hotels.com, Oct 19, 2026, stay about Nov 16"},
   "Everhome Suites Corona": {"lo": 99, "hi": 144, "src": "Hotels.com, Oct 19, 2026, stay about Nov 16"},
   "Holiday Inn Express & Suites Ontario - Chino Hills": {"lo": 106, "hi": 106, "src": "Hotels.com, Oct 19, 2026, stay about Nov 16"},
   "Citrus Suites Redlands Loma Linda": {"lo": 95, "hi": 95, "src": "Hotels.com, Oct 19, 2026, stay about Nov 16"},
   "Extended Stay America Suites Redlands": {"lo": 86, "hi": 86, "src": "Hotels.com, Oct 19, 2026, stay about Nov 16"},
   "Home2 Suites by Hilton Redlands": {"lo": 108, "hi": 108, "src": "Hotels.com, Oct 19, 2026, stay about Nov 16"},
   "Holiday Inn Express San Bernardino - Colton": {"lo": 103, "hi": 103, "src": "Hotels.com, Oct 19, 2026, stay about Nov 16"},
   "Holiday Inn Express & Suites San Dimas": {"lo": 107, "hi": 107, "src": "Hotels.com, Oct 19, 2026, stay about Nov 16"},
   "DoubleTree by Hilton Ontario Airport": {
    "lo": 82,
    "hi": 220
   },
   "Delta Hotels by Marriott Ontario Airport": {
    "lo": 123,
    "hi": 257
   },
   "Ontario Airport Hotel & Conference Center": {
    "lo": 84,
    "hi": 194
   },
   "Holiday Inn Ontario Airport": {
    "lo": 102,
    "hi": 198
   },
   "Embassy Suites by Hilton Ontario Airport": {
    "lo": 139,
    "hi": 306
   },
   "Azure Hotel & Suites Ontario Airport": {
    "lo": 87,
    "hi": 135
   },
   "Sheraton Ontario Airport Hotel": {
    "lo": 146,
    "hi": 274
   },
   "Hotel d'Lins Ontario Airport": {
    "lo": 88,
    "hi": 130
   },
   "Best Western Plus Ontario Airport & Convention Center": {
    "lo": 54,
    "hi": 165
   },
   "La Quinta Inn & Suites Ontario Airport": {
    "lo": 79,
    "hi": 113
   },
   "Hyatt Place Ontario / Rancho Cucamonga": {
    "lo": 111,
    "hi": 206
   },
   "SpringHill Suites Ontario Airport": {
    "lo": 120,
    "hi": 194
   },
   "Holiday Inn Express & Suites Ontario Airport": {
    "lo": 106,
    "hi": 235
   },
   "Comfort Suites Ontario Airport Convention Center": {
    "lo": 85,
    "hi": 163
   },
   "Hampton Inn & Suites Ontario": {
    "lo": 107,
    "hi": 232
   },
   "Hampton Inn Ontario Airport": {
    "lo": 139,
    "hi": 139
   },
   "Residence Inn by Marriott Ontario Airport": {
    "lo": 90,
    "hi": 177
   },
   "Element by Marriott Ontario": {
    "lo": 139,
    "hi": 271
   },
   "Extended Stay America Ontario Airport": {
    "lo": 74,
    "hi": 138
   },
   "Everhome Suites Ontario Airport": {
    "lo": 97,
    "hi": 148
   },
   "Extended Studio Hotel Ontario (TownePlace Suites)": {
    "lo": 84,
    "hi": 206
   },
   "Home2 Suites by Hilton Ontario Airport": {
    "lo": 130,
    "hi": 130
   },
   "Ayres Suites Ontario Mills Mall": {
    "lo": 129,
    "hi": 257
   },
   "Ontario Airport Inn": {
    "lo": 78,
    "hi": 106
   },
   "Quality Inn Ontario Airport Convention Center": {
    "lo": 81,
    "hi": 163
   },
   "Country Inn & Suites by Radisson, Ontario Mills": {
    "lo": 84,
    "hi": 134
   },
   "SureStay Hotel by Best Western Ontario Airport": {
    "lo": 76,
    "hi": 127
   },
   "Best Western Ontario Mills Mall": {
    "lo": 95,
    "hi": 213
   },
   "Rodeway Inn Ontario Mills Mall": {
    "lo": 59,
    "hi": 139
   },
   "Comfort Inn & Suites Near Ontario Airport": {
    "lo": 74,
    "hi": 134
   },
   "Motel 6 Ontario Convention Center-Airport": {
    "lo": 60,
    "hi": 77
   },
   "Baymont by Wyndham Ontario": {
    "lo": 65,
    "hi": 122
   },
   "Ramada by Wyndham Ontario Airport": {
    "lo": 55,
    "hi": 98
   },
   "Motel 6 Ontario Airport": {
    "lo": 73,
    "hi": 92
   },
   "Express Inn & Suites Ontario": {
    "lo": 58,
    "hi": 121
   },
   "Hotel Hacienda at Ontario Ranch": {
    "lo": 73,
    "hi": 117
   },
   "Days Inn by Wyndham Ontario Airport": {
    "lo": 65,
    "hi": 104
   },
   "Mayfair Inn Ontario Airport": {
    "lo": 83,
    "hi": 124
   },
   "Hotel Seville Ontario Airport/Chino": {
    "lo": 60,
    "hi": 125
   }
  }
 }
];
