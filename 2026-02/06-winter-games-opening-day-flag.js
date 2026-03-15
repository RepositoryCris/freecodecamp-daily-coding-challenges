/*2026 Winter Games Day 1: Opening Day
Today marks the start of the 2026 Winter Games. The next 17 days will bring you coding challenges inspired by them.

For the first one, you are given a two-letter country code and need to return the flag emoji for that country.

Use this list:*/

const countries = [
  { country: "Albania", code: "AL", flag: "🇦🇱" },
  { country: "Andorra", code: "AD", flag: "🇦🇩" },
  { country: "Argentina", code: "AR", flag: "🇦🇷" },
  { country: "Armenia", code: "AM", flag: "🇦🇲" },
  { country: "Australia", code: "AU", flag: "🇦🇺" },
  { country: "Austria", code: "AT", flag: "🇦🇹" },
  { country: "Azerbaijan", code: "AZ", flag: "🇦🇿" },
  { country: "Belgium", code: "BE", flag: "🇧🇪" },
  { country: "Benin", code: "BJ", flag: "🇧🇯" },
  { country: "Bolivia", code: "BO", flag: "🇧🇴" },
  { country: "Bosnia and Herzegovina", code: "BA", flag: "🇧🇦" },
  { country: "Brazil", code: "BR", flag: "🇧🇷" },
  { country: "Bulgaria", code: "BG", flag: "🇧🇬" },
  { country: "Canada", code: "CA", flag: "🇨🇦" },
  { country: "Chile", code: "CL", flag: "🇨🇱" },
  { country: "China", code: "CN", flag: "🇨🇳" },
  { country: "Colombia", code: "CO", flag: "🇨🇴" },
  { country: "Croatia", code: "HR", flag: "🇭🇷" },
  { country: "Cyprus", code: "CY", flag: "🇨🇾" },
  { country: "Czech Republic", code: "CZ", flag: "🇨🇿" },
  { country: "Denmark", code: "DK", flag: "🇩🇰" },
  { country: "Ecuador", code: "EC", flag: "🇪🇨" },
  { country: "Eritrea", code: "ER", flag: "🇪🇷" },
  { country: "Estonia", code: "EE", flag: "🇪🇪" },
  { country: "Finland", code: "FI", flag: "🇫🇮" },
  { country: "France", code: "FR", flag: "🇫🇷" },
  { country: "Georgia", code: "GE", flag: "🇬🇪" },
  { country: "Germany", code: "DE", flag: "🇩🇪" },
  { country: "Great Britain", code: "GB", flag: "🇬🇧" },
  { country: "Greece", code: "GR", flag: "🇬🇷" },
  { country: "Guinea-Bissau", code: "GW", flag: "🇬🇼" },
  { country: "Haiti", code: "HT", flag: "🇭🇹" },
  { country: "Hong Kong", code: "HK", flag: "🇭🇰" },
  { country: "Hungary", code: "HU", flag: "🇭🇺" },
  { country: "Iceland", code: "IS", flag: "🇮🇸" },
  { country: "India", code: "IN", flag: "🇮🇳" },
  { country: "Iran", code: "IR", flag: "🇮🇷" },
  { country: "Ireland", code: "IE", flag: "🇮🇪" },
  { country: "Israel", code: "IL", flag: "🇮🇱" },
  { country: "Italy", code: "IT", flag: "🇮🇹" },
  { country: "Jamaica", code: "JM", flag: "🇯🇲" },
  { country: "Japan", code: "JP", flag: "🇯🇵" },
  { country: "Kazakhstan", code: "KZ", flag: "🇰🇿" },
  { country: "Kenya", code: "KE", flag: "🇰🇪" },
  { country: "Kosovo", code: "XK", flag: "🇽🇰" },
  { country: "Kyrgyzstan", code: "KG", flag: "🇰🇬" },
  { country: "Latvia", code: "LV", flag: "🇱🇻" },
  { country: "Lebanon", code: "LB", flag: "🇱🇧" },
  { country: "Liechtenstein", code: "LI", flag: "🇱🇮" },
  { country: "Lithuania", code: "LT", flag: "🇱🇹" },
  { country: "Luxembourg", code: "LU", flag: "🇱🇺" },
  { country: "Madagascar", code: "MG", flag: "🇲🇬" },
  { country: "Malaysia", code: "MY", flag: "🇲🇾" },
  { country: "Malta", code: "MT", flag: "🇲🇹" },
  { country: "Mexico", code: "MX", flag: "🇲🇽" },
  { country: "Moldova", code: "MD", flag: "🇲🇩" },
  { country: "Monaco", code: "MC", flag: "🇲🇨" },
  { country: "Mongolia", code: "MN", flag: "🇲🇳" },
  { country: "Montenegro", code: "ME", flag: "🇲🇪" },
  { country: "Morocco", code: "MA", flag: "🇲🇦" },
  { country: "Netherlands", code: "NL", flag: "🇳🇱" },
  { country: "New Zealand", code: "NZ", flag: "🇳🇿" },
  { country: "Nigeria", code: "NG", flag: "🇳🇬" },
  { country: "North Macedonia", code: "MK", flag: "🇲🇰" },
  { country: "Norway", code: "NO", flag: "🇳🇴" },
  { country: "Pakistan", code: "PK", flag: "🇵🇰" },
  { country: "Philippines", code: "PH", flag: "🇵🇭" },
  { country: "Poland", code: "PL", flag: "🇵🇱" },
  { country: "Portugal", code: "PT", flag: "🇵🇹" },
  { country: "Puerto Rico", code: "PR", flag: "🇵🇷" },
  { country: "Romania", code: "RO", flag: "🇷🇴" },
  { country: "San Marino", code: "SM", flag: "🇸🇲" },
  { country: "Saudi Arabia", code: "SA", flag: "🇸🇦" },
  { country: "Serbia", code: "RS", flag: "🇷🇸" },
  { country: "Singapore", code: "SG", flag: "🇸🇬" },
  { country: "Slovakia", code: "SK", flag: "🇸🇰" },
  { country: "Slovenia", code: "SI", flag: "🇸🇮" },
  { country: "South Africa", code: "ZA", flag: "🇿🇦" },
  { country: "South Korea", code: "KR", flag: "🇰🇷" },
  { country: "Spain", code: "ES", flag: "🇪🇸" },
  { country: "Sweden", code: "SE", flag: "🇸🇪" },
  { country: "Switzerland", code: "CH", flag: "🇨🇭" },
  { country: "Thailand", code: "TH", flag: "🇹🇭" },
  { country: "Trinidad & Tobago", code: "TT", flag: "🇹🇹" },
  { country: "Turkey", code: "TR", flag: "🇹🇷" },
  { country: "Ukraine", code: "UA", flag: "🇺🇦" },
  { country: "United Arab Emirates", code: "AE", flag: "🇦🇪" },
  { country: "United States", code: "US", flag: "🇺🇸" },
  { country: "Uruguay", code: "UY", flag: "🇺🇾" },
  { country: "Uzbekistan", code: "UZ", flag: "🇺🇿" },
  { country: "Venezuela", code: "VE", flag: "🇻🇪" },
];

function getFlag(code) {
  let country = {};
  country = countries.find((country) => country.code === code);
  return country.flag;
}

// Test all country codes
console.log(getFlag("AL")); // 🇦🇱
console.log(getFlag("AD")); // 🇦🇩
console.log(getFlag("AR")); // 🇦🇷
console.log(getFlag("AM")); // 🇦🇲
console.log(getFlag("AU")); // 🇦🇺
console.log(getFlag("AT")); // 🇦🇹
console.log(getFlag("AZ")); // 🇦🇿
console.log(getFlag("BE")); // 🇧🇪
console.log(getFlag("BJ")); // 🇧🇯
console.log(getFlag("BO")); // 🇧🇴
console.log(getFlag("BA")); // 🇧🇦
console.log(getFlag("BR")); // 🇧🇷
console.log(getFlag("BG")); // 🇧🇬
console.log(getFlag("CA")); // 🇨🇦
console.log(getFlag("CL")); // 🇨🇱
console.log(getFlag("CN")); // 🇨🇳
console.log(getFlag("CO")); // 🇨🇴
console.log(getFlag("HR")); // 🇭🇷
console.log(getFlag("CY")); // 🇨🇾
console.log(getFlag("CZ")); // 🇨🇿
console.log(getFlag("DK")); // 🇩🇰
console.log(getFlag("EC")); // 🇪🇨
console.log(getFlag("ER")); // 🇪🇷
console.log(getFlag("EE")); // 🇪🇪
console.log(getFlag("FI")); // 🇫🇮
console.log(getFlag("FR")); // 🇫🇷
console.log(getFlag("GE")); // 🇬🇪
console.log(getFlag("DE")); // 🇩🇪
console.log(getFlag("GB")); // 🇬🇧
console.log(getFlag("GR")); // 🇬🇷
console.log(getFlag("GW")); // 🇬🇼
console.log(getFlag("HT")); // 🇭🇹
console.log(getFlag("HK")); // 🇭🇰
console.log(getFlag("HU")); // 🇭🇺
console.log(getFlag("IS")); // 🇮🇸
console.log(getFlag("IN")); // 🇮🇳
console.log(getFlag("IR")); // 🇮🇷
console.log(getFlag("IE")); // 🇮🇪
console.log(getFlag("IL")); // 🇮🇱
console.log(getFlag("IT")); // 🇮🇹
console.log(getFlag("JM")); // 🇯🇲
console.log(getFlag("JP")); // 🇯🇵
console.log(getFlag("KZ")); // 🇰🇿
console.log(getFlag("KE")); // 🇰🇪
console.log(getFlag("XK")); // 🇽🇰
console.log(getFlag("KG")); // 🇰🇬
console.log(getFlag("LV")); // 🇱🇻
console.log(getFlag("LB")); // 🇱🇧
console.log(getFlag("LI")); // 🇱🇮
console.log(getFlag("LT")); // 🇱🇹
console.log(getFlag("LU")); // 🇱🇺
console.log(getFlag("MG")); // 🇲🇬
console.log(getFlag("MY")); // 🇲🇾
console.log(getFlag("MT")); // 🇲🇹
console.log(getFlag("MX")); // 🇲🇽
console.log(getFlag("MD")); // 🇲🇩
console.log(getFlag("MC")); // 🇲🇨
console.log(getFlag("MN")); // 🇲🇳
console.log(getFlag("ME")); // 🇲🇪
console.log(getFlag("MA")); // 🇲🇦
console.log(getFlag("NL")); // 🇳🇱
console.log(getFlag("NZ")); // 🇳🇿
console.log(getFlag("NG")); // 🇳🇬
console.log(getFlag("MK")); // 🇲🇰
console.log(getFlag("NO")); // 🇳🇴
console.log(getFlag("PK")); // 🇵🇰
console.log(getFlag("PH")); // 🇵🇭
console.log(getFlag("PL")); // 🇵🇱
console.log(getFlag("PT")); // 🇵🇹
console.log(getFlag("PR")); // 🇵🇷
console.log(getFlag("RO")); // 🇷🇴
console.log(getFlag("SM")); // 🇸🇲
console.log(getFlag("SA")); // 🇸🇦
console.log(getFlag("RS")); // 🇷🇸
console.log(getFlag("SG")); // 🇸🇬
console.log(getFlag("SK")); // 🇸🇰
console.log(getFlag("SI")); // 🇸🇮
console.log(getFlag("ZA")); // 🇿🇦
console.log(getFlag("KR")); // 🇰🇷
console.log(getFlag("ES")); // 🇪🇸
console.log(getFlag("SE")); // 🇸🇪
console.log(getFlag("CH")); // 🇨🇭
console.log(getFlag("TH")); // 🇹🇭
console.log(getFlag("TT")); // 🇹🇹
console.log(getFlag("TR")); // 🇹🇷
console.log(getFlag("UA")); // 🇺🇦
console.log(getFlag("AE")); // 🇦🇪
console.log(getFlag("US")); // 🇺🇸
console.log(getFlag("UY")); // 🇺🇾
console.log(getFlag("UZ")); // 🇺🇿
console.log(getFlag("VE")); // 🇻🇪
