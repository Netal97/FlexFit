(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e6bbe26a"],{"68c1":function(t,e,i){},"76ed":function(t,e,i){"use strict";i("68c1")},c3e7:function(t,e,i){t.exports=i.p+"img/profile.fdc2fe7f.png"},c66d:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Profil")],1)},a=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"profilcontainer"},[t._m(0),i("div",{staticClass:"intro"},[i("p",[t._v(t._s(t.$t("profile.intro")))])]),i("div",{staticClass:"parameter"},[i("table",{staticClass:"profi"},[i("tr",[i("td",[i("label",{staticClass:"a1",attrs:{for:"weight"}},[t._v(t._s(t.$t("profile.weight"))+":")])]),i("td",[i("div",{staticClass:"a2"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.weight,expression:"weight"}],attrs:{type:"text",id:"weight",placeholder:"69",required:"required"},domProps:{value:t.weight},on:{input:function(e){e.target.composing||(t.weight=e.target.value)}}})])]),i("td",[i("span",{staticClass:"a3"},[t._v(t._s(t.$t("profile.kg")))])])]),i("tr",[i("td",[i("label",{staticClass:"a1",attrs:{for:"size"}},[t._v(t._s(t.$t("profile.size"))+":")])]),i("td",[i("div",{staticClass:"a2"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.size,expression:"size"}],attrs:{type:"text",id:"size",placeholder:"1.69",required:"required"},domProps:{value:t.size},on:{input:function(e){e.target.composing||(t.size=e.target.value)}}})])]),i("td",[i("span",{staticClass:"a3"},[t._v(t._s(t.$t("profile.m")))])])])]),i("br"),i("div",{staticClass:"button"},[i("button",{attrs:{type:"submit"},on:{click:t.saveData}},[t._v(t._s(t.$t("profile.save")))])])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"foto"},[s("img",{attrs:{src:i("c3e7"),alt:"profile",width:"350"}})])}],l={data:function(){return{size:"",weight:"",size2:"",weight2:""}},methods:{saveData:function(){this.size2=this.size,this.weight2=this.weight,this.$localStorage.set("size",this.size2),this.$localStorage.set("weight",this.weight2),this.size="",this.weight="",this.showAlert()},showAlert:function(){var t="Ok",e="Окей",i="Your data is saved!",s="Ваши данные сохранены!",a="Ihre Daten sind gespeichert!",o=localStorage.getItem("lang")||"en";if("en"==o){var r={size:"sm",okLabel:t};this.$dialogs.alert(i,r).then((function(t){console.log(t)}))}else if("de"==o){var l={size:"sm",okLabel:t};this.$dialogs.alert(a,l).then((function(t){console.log(t)}))}else{var n={size:"sm",okLabel:e};this.$dialogs.alert(s,n).then((function(t){console.log(t)}))}}}},n=l,c=(i("76ed"),i("2877")),d=Object(c["a"])(n,o,r,!1,null,"18f688ef",null),u=d.exports,h={components:{Profil:u}},f=h,p=Object(c["a"])(f,s,a,!1,null,"533c9a92",null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-e6bbe26a.6a6b7036.js.map