(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40fd6e83"],{"7bc1":function(t,e,i){},cbb4:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bmi"},[i("div",{staticClass:"form"},[i("p",[t._v(t._s(t.$t("info.todo")))])]),i("div",{staticClass:"button"},[i("div",[i("button",{staticClass:"myButton",attrs:{type:"submit"},on:{click:t.calculbmi}},[t._v(t._s(t.$t("profile.calculate")))])]),i("div",{staticClass:"bmi2"},[i("p",[t._v(t._s(t.$t("info.bmi"))+" = "+t._s(t.bmi2))])])]),i("div",{staticClass:"infocontainer"},[i("table",{staticClass:"info"},[i("tr",[i("td",[t._v(t._s(t.$t("info.Underweight")))]),i("td",[t._v(t._s(t.$t("info.small"))+" 18.5")])]),i("tr",[i("td",[t._v(t._s(t.$t("info.Normalweight")))]),i("td",[t._v("18.5 - 24.9")])]),i("tr",[i("td",[t._v(t._s(t.$t("info.Overweight")))]),i("td",[t._v("25 - 29.9")])]),i("tr",[i("td",[t._v(t._s(t.$t("info.Obesity")))]),i("td",[t._v(t._s(t.$t("info.great"))+" 29.9")])])])])])},o=[],n=(i("b680"),{data:function(){return{bmi:"--",bmi2:"--",size:localStorage.getItem("size")||0,weight:localStorage.getItem("weight")||0}},methods:{calculbmi:function(){0==this.size||0==this.weight?this.showAlert():(this.bmi=this.weight/(this.size*this.size),this.bmi2=parseFloat(this.bmi).toFixed(1))},showAlert:function(){var t="Ok",e="Окей",i="no values were found, please check your profile.",s="Значений не найдено, пожалуйста, посетите свой профиль.",o="Es wurden keine Werte gefunden, bitte schauen Sie sich Ihr Profil an.",n=localStorage.getItem("lang")||"en";if("en"==n){var a={size:"sm",okLabel:t};this.$dialogs.alert(i,a).then((function(t){console.log(t)}))}else if("de"==n){var l={size:"sm",okLabel:t};this.$dialogs.alert(o,l).then((function(t){console.log(t)}))}else{var c={size:"sm",okLabel:e};this.$dialogs.alert(s,c).then((function(t){console.log(t)}))}}}}),a=n,l=(i("e0be"),i("2877")),c=Object(l["a"])(a,s,o,!1,null,"42ea74de",null);e["default"]=c.exports},e0be:function(t,e,i){"use strict";i("7bc1")}}]);
//# sourceMappingURL=chunk-40fd6e83.e2718272.js.map