(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-305a0287"],{"09e0":function(t,e,n){},"2b56":function(t,e,n){"use strict";n("09e0")},7277:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("WidgetsDropdown"),n("CRow",{staticClass:"clapans"},[n("CCol",{attrs:{md:"12"}},[n("CCard",[n("CCardHeader",[n("div",{staticClass:"d-flex aligin-items-center justify-content-between"},[n("span",[t._v("Клапаны")]),n("CButton",{attrs:{color:"success"},on:{click:function(e){t.warningModal=!t.warningModal}}},[t._v(" Добавить ")])],1)]),n("CCardBody",[n("div",{staticClass:"d-flex aligin-items-center justify-content-between"},[t.isSelect?n("CSelect",{staticClass:"col-4",attrs:{horizontal:"",label:"Действие на выбор",value:t.action_switcher,options:["Не выбрано","Включить отмеченные","Отключить отмеченные"]},on:{"update:value":function(e){t.action_switcher=e},change:function(e){return t.actionSwitcher()}}}):t._e(),n("CSelect",{staticClass:"col-4",attrs:{horizontal:"",label:"Город",options:["Алматы","Астана"],value:t.action_switcher_city},on:{"update:value":function(e){t.action_switcher_city=e},change:function(e){return t.actionSwitcherCity()}}})],1),n("CDataTable",{staticClass:"mb-0 table-outline",attrs:{hover:"",items:t.tableItems,fields:t.tableFields,"head-color":"light","column-filter":"","table-filter":"",sorter:"",tableFilter:{label:"Поиск",placeholder:"Введите слово для поиска"}},scopedSlots:t._u([{key:"select-filter",fn:function(e){e.item;return[n("CInputCheckbox",{attrs:{value:t.all_select,custom:"",inline:""},on:{"update:value":function(e){t.all_select=e},change:function(e){return t.allSelect()}}})]}},{key:"select",fn:function(e){var a=e.item,s=e.index;return n("td",{},[n("input",{directives:[{name:"model",rawName:"v-model",value:a.select,expression:"item.select"}],attrs:{type:"checkbox",custom:"",inline:""},domProps:{checked:Array.isArray(a.select)?t._i(a.select,null)>-1:a.select},on:{change:[function(e){var n=a.select,s=e.target,l=!!s.checked;if(Array.isArray(n)){var i=null,o=t._i(n,i);s.checked?o<0&&t.$set(a,"select",n.concat([i])):o>-1&&t.$set(a,"select",n.slice(0,o).concat(n.slice(o+1)))}else t.$set(a,"select",l)},function(e){return t.actionSelectChange(s)}]}})])}},{key:"city",fn:function(e){var a=e.item;return n("td",{},[t._v(" "+t._s(a.city)+" ")])}},{key:"district",fn:function(e){var a=e.item;return n("td",{},[t._v(" "+t._s(a.district)+" ")])}},{key:"street",fn:function(e){var a=e.item;return n("td",{},[t._v(" "+t._s(a.street)+" ")])}},{key:"building",fn:function(e){var a=e.item;return n("td",{},[t._v(" "+t._s(a.typeofbuilding)+" ")])}},{key:"numHouse",fn:function(e){var a=e.item;return n("td",{},[t._v(" "+t._s(a.buildingnum)+" ")])}},{key:"numDoor",fn:function(e){var a=e.item;return n("td",{},[t._v(" "+t._s(a.entrancenum)+" ")])}},{key:"numMine",fn:function(e){var a=e.item;return n("td",{},[t._v(" "+t._s(a.shaftnum)+" ")])}},{key:"stage",fn:function(e){var a=e.item;return n("td",{},[t._v(" "+t._s(a.floor)+" ")])}},{key:"numOffice",fn:function(e){var a=e.item;return n("td",{},[t._v(" "+t._s(a.aptoroffice)+" ")])}},{key:"id",fn:function(e){var a=e.item;return n("td",{},[t._v(" "+t._s(a.valveID)+" ")])}},{key:"status",fn:function(e){var a=e.item;return n("td",{},[0==a.status?n("CBadge",{attrs:{color:"danger"}},[t._v(" выключен ")]):1==a.status?n("CBadge",{attrs:{color:"success"}},[t._v("включен")]):2==a.status?n("CBadge",{attrs:{color:"warning"}},[t._v("нет данных")]):t._e(),n("br"),n("CSwitch",{staticClass:"mt-1",attrs:{color:"primary",checked:1==a.status,value:a.status},on:{"update:checked":[function(e){return t.$set(a,"status==1",e)},function(e){return t.actionStatusChange(a)}]}})],1)}},{key:"settings",fn:function(e){var a=e.item;return n("td",{},[n("span",{staticClass:"d-flex align-items-center",staticStyle:{"white-space":"nowrap",cursor:"pointer"},on:{click:function(e){t.warningModal=!t.warningModal}}},[n("CIcon",{staticClass:"mr-1",attrs:{name:"cilSettings"}}),t._v(" Настройки ")],1),n("span",{staticClass:"d-flex align-items-center",staticStyle:{"white-space":"nowrap",cursor:"pointer"},on:{click:function(e){return t.$router.push({path:"/dashboard/"+a.valveID})}}},[n("CIcon",{staticClass:"mr-1",attrs:{name:"cilSettings"}}),t._v(" История ")],1)])}}])})],1)],1)],1)],1),n("CModal",{attrs:{title:"Настройки",show:t.warningModal},on:{"update:show":function(e){t.warningModal=e}}},[n("CCard",[n("CCardBody",[n("CForm",{on:{submit:function(e){return t.submitForm()}}},[n("CSelect",{attrs:{horizontal:"",label:"Город",value:t.setting.city,options:t.cities},on:{"update:value":function(e){return t.$set(t.setting,"city",e)}}}),n("CInput",{attrs:{type:"text",label:"Свой вариант",horizontal:""},model:{value:t.setting.city,callback:function(e){t.$set(t.setting,"city",e)},expression:"setting.city"}}),n("CSelect",{attrs:{horizontal:"",label:"Улица",value:t.setting.street,options:t.streets},on:{"update:value":function(e){return t.$set(t.setting,"street",e)}}}),n("CInput",{attrs:{type:"text",label:"Свой вариант",horizontal:""},model:{value:t.setting.street,callback:function(e){t.$set(t.setting,"street",e)},expression:"setting.street"}}),n("CSelect",{attrs:{horizontal:"",label:"Дом",value:t.setting.house,options:t.houses},on:{"update:value":function(e){return t.$set(t.setting,"house",e)}}}),n("CInput",{attrs:{type:"text",label:"Свой вариант",horizontal:""},model:{value:t.setting.house,callback:function(e){t.$set(t.setting,"house",e)},expression:"setting.house"}}),n("CSelect",{attrs:{horizontal:"",label:"Подъезд",value:t.setting.entrancenum,options:t.entrances},on:{"update:value":function(e){return t.$set(t.setting,"entrancenum",e)}}}),n("CInput",{attrs:{type:"text",label:"Свой вариант",horizontal:""},model:{value:t.setting.entrancenum,callback:function(e){t.$set(t.setting,"entrancenum",e)},expression:"setting.entrancenum"}}),n("CSelect",{attrs:{horizontal:"",label:"Шахта",value:t.setting.shaftnum,options:t.shaftnums},on:{"update:value":function(e){return t.$set(t.setting,"shaftnum",e)}}}),n("CInput",{attrs:{type:"text",label:"Свой вариант",horizontal:""},model:{value:t.setting.shaftnum,callback:function(e){t.$set(t.setting,"shaftnum",e)},expression:"setting.shaftnum"}}),n("CSelect",{attrs:{horizontal:"",label:"Этаж",value:t.setting.floor,options:t.floors},on:{"update:value":function(e){return t.$set(t.setting,"floor",e)}}}),n("CInput",{attrs:{type:"text",label:"Свой вариант",horizontal:""},model:{value:t.setting.floor,callback:function(e){t.$set(t.setting,"floor",e)},expression:"setting.floor"}}),n("CSelect",{attrs:{horizontal:"",label:"Квартира",value:t.setting.aptoroffice,options:t.aptoroffices},on:{"update:value":function(e){return t.$set(t.setting,"aptoroffice",e)}}}),n("CInput",{attrs:{type:"text",label:"Свой вариант",horizontal:""},model:{value:t.setting.aptoroffice,callback:function(e){t.$set(t.setting,"aptoroffice",e)},expression:"setting.aptoroffice"}}),n("CSelect",{attrs:{horizontal:"",label:"Юр./физ. лицо",value:t.setting.iscompany,options:t.types},on:{"update:value":function(e){return t.$set(t.setting,"iscompany",e)}}}),n("CInput",{attrs:{type:"text",label:"ФИО",horizontal:""},model:{value:t.setting.ownername,callback:function(e){t.$set(t.setting,"ownername",e)},expression:"setting.ownername"}}),n("CInput",{attrs:{type:"text",label:"Контакты",horizontal:""},model:{value:t.setting.ownercontacts,callback:function(e){t.$set(t.setting,"ownercontacts",e)},expression:"setting.ownercontacts"}}),n("CInput",{attrs:{type:"text",label:"ИИН/БИН",horizontal:""},model:{value:t.setting.ownerID,callback:function(e){t.$set(t.setting,"ownerID",e)},expression:"setting.ownerID"}}),n("CInput",{attrs:{type:"text",label:"Район",horizontal:""},model:{value:t.setting.district,callback:function(e){t.$set(t.setting,"district",e)},expression:"setting.district"}}),n("CInput",{attrs:{type:"text",label:"Тип здания",horizontal:""},model:{value:t.setting.typeofbuilding,callback:function(e){t.$set(t.setting,"typeofbuilding",e)},expression:"setting.typeofbuilding"}}),n("CInput",{attrs:{type:"text",label:"Номер здания",horizontal:""},model:{value:t.setting.buildingnum,callback:function(e){t.$set(t.setting,"buildingnum",e)},expression:"setting.buildingnum"}}),n("CInput",{attrs:{type:"text",label:"Название здания",horizontal:""},model:{value:t.setting.buildingname,callback:function(e){t.$set(t.setting,"buildingname",e)},expression:"setting.buildingname"}}),n("CInput",{attrs:{type:"text",label:"ID Мастера",horizontal:""},model:{value:t.setting.masterID,callback:function(e){t.$set(t.setting,"masterID",e)},expression:"setting.masterID"}}),n("CInput",{attrs:{type:"text",label:"ID Мастер Хаба",horizontal:""},model:{value:t.setting.masterhubID,callback:function(e){t.$set(t.setting,"masterhubID",e)},expression:"setting.masterhubID"}}),n("CInput",{attrs:{type:"text",label:"Номер договора",horizontal:""},model:{value:t.setting.ownercontacts,callback:function(e){t.$set(t.setting,"ownercontacts",e)},expression:"setting.ownercontacts"}}),n("CSelect",{attrs:{horizontal:"",label:"Тип оплаты",value:t.setting.payment,options:t.payments},on:{"update:value":function(e){return t.$set(t.setting,"payment",e)}}}),n("CButton",{attrs:{color:"success",type:"submit"}},[t._v(" Изменить ")])],1)],1)],1)],1),n("div",{staticClass:"alert_block"},[t.warning?n("CAlert",{attrs:{color:"warning",closeButton:""}},[t._v(" "+t._s(t.alert_message)+" ")]):t._e(),t.success?n("CAlert",{attrs:{color:"primary",closeButton:""}},[t._v(" "+t._s(t.alert_message)+" ")]):t._e()],1)],1)},s=[],l=n("4375"),i=n("f236"),o=n("ed3a"),r=n("4328"),c=n("bc3a"),u={name:"Dashboard",components:{MainChartExample:l["a"],WidgetsDropdown:i["a"],WidgetsBrand:o["a"]},data:function(){return{all_select:!1,warning:!1,success:!1,alert_message:"",warningModal:!1,isSelect:!1,action_switcher:"",action_switcher_city:"",id:"",tableItems:[],tableFields:[{key:"select",label:"Выбор",sorter:!1,filter:!1},{key:"status",label:"Статус клапана",filter:!1},{key:"city",label:"Город "},{key:"district",label:"Район ",_classes:"text-center"},{key:"street",label:"Улица "},{key:"typeofbuilding",label:"Вид здания"},{key:"buildingnum",label:"Номер дома "},{key:"entrancenum",label:"Номер подъезда "},{key:"shaftnum",label:"Номер шахты "},{key:"floor",label:"Этаж"},{key:"aptoroffice",label:"Кв/офис"},{key:"valveID",label:"ID клапана"},{key:"settings",label:"Действия",sorter:!1,filter:!1}],setting:{},cities:[{value:"Павлодар",label:"Павлодар"},{value:"Астана",label:"Астана"}],districts:[{value:"Сарыаркинский",label:"Сарыаркинский"},{value:"Есиль",label:"Есиль"}],streets:[{value:"Сарыаркинский",label:"Сарыаркинский"},{value:"Есиль",label:"Есиль"}],buildings:[{value:"Сарыаркинский",label:"Сарыаркинский"},{value:"Есиль",label:"Есиль"}],houses:[{value:1,label:"1"},{value:2,label:"2"}],entrances:[{value:1,label:"1"},{value:2,label:"2"}],aptoroffices:[{value:1,label:"1"},{value:2,label:"2"}],shaftnums:[{value:1,label:"1"},{value:2,label:"2"}],floors:[{value:1,label:"1"},{value:2,label:"2"}],types:[{value:1,label:"Физ лицо"},{value:2,label:"Юр лицо"}],payments:[{value:1,label:"1"},{value:2,label:"2"}]}},mounted:function(){this.getResults(0)},methods:{allSelect:function(){var t=this;t.isSelect=!0;for(var e=0;e<t.tableItems.length;e++)0==t.all_select?(this.tableItems[e].select=!0,this.tableItems[e].street=this.tableItems[e].street+" "):(this.tableItems[e].select=!1,this.tableItems[e].street=this.tableItems[e].street+" ");t.all_select=1!=t.all_select},submitForm:function(){event.preventDefault();var t=this;c.defaults.headers.common["Authorization"]="Bearer "+window.auth.token,c({method:"post",url:"/addvalve/",data:r.stringify(this.setting)}).then((function(e){e.data;t.warningModal=!1,t.success=!0,t.alert_message="Успешно добавлено",t.setting={},setTimeout((function(){t.success=!1}),3e3)})).catch((function(e){t.warning=!0,t.alert_message=e.response.data.detail,setTimeout((function(){t.warning=!1}),3e3)}))},actionSelectChange:function(t){var e=this;e.isSelect=!0,0==e.tableItems[t].select?(e.tableItems[t].select=!0,e.tableItems[t].street=this.tableItems[t].street+" "):(e.tableItems[t].select=!1,e.tableItems[t].street=this.tableItems[t].street+" ")},actionSwitcher:function(){for(var t=this,e=0;e<t.tableItems.length;e++)1==t.tableItems[e].select&&("Включить отмеченные"==this.action_switcher?(c.defaults.headers.common["Authorization"]="Bearer "+window.auth.token,c({method:"post",url:"/turnon/",data:r.stringify({device_id:t.tableItems[e].valveID})}).then((function(e){var n=e.data;t.success=!0,t.alert_message=n.responce,setTimeout((function(){t.success=!1}),3e3)})).catch((function(t){}))):"Отключить отмеченные"==this.action_switcher&&(c.defaults.headers.common["Authorization"]="Bearer "+window.auth.token,c({method:"post",url:"/turnoff/",data:r.stringify({device_id:t.tableItems[e].valveID})}).then((function(e){var n=e.data;t.success=!0,t.alert_message=n.responce,setTimeout((function(){t.success=!1}),3e3)})).catch((function(t){}))))},actionSwitcherCity:function(){"Астана"==this.action_switcher_city?this.getResults(1):this.getResults(0)},actionStatusChange:function(t){var e=this;c.defaults.headers.common["Authorization"]="Bearer "+window.auth.token,c({method:"post",url:"/turnon/",data:r.stringify({device_id:t.valveID})}).then((function(t){var n=t.data;e.success=!0,e.alert_message=n.responce,setTimeout((function(){e.success=!1}),3e3)})).catch((function(t){}))},getResults:function(t){var e=this;c.defaults.headers.common["Authorization"]="Bearer "+window.auth.token,c.get("/getvalvesbycity/"+t).then((function(t){e.tableItems=t.data;for(var n=0;n<e.tableItems.length;n++)e.tableItems[n].select=!1})).catch((function(t){401==t.response.status&&window.auth.logout()}))},color:function(t){var e;return t<=25?e="info":t>25&&t<=50?e="success":t>50&&t<=75?e="warning":t>75&&t<=100&&(e="danger"),e}}},f=u,d=(n("2b56"),n("2877")),m=Object(d["a"])(f,a,s,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-305a0287.98cb2dcb.js.map