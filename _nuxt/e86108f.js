(window.webpackJsonp=window.webpackJsonp||[]).push([[61,19,20,21,23,26,32],{508:function(t,e,r){"use strict";r.r(e);var n={name:"LayoutHeroSimple"},l=r(7),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hero-simple"},[r("div",{staticClass:"hero-simple-wrapper"},[r("h1",[t._t("title")],2),t._v(" "),t.$slots.text?r("div",{staticClass:"div-hero-simple"},[t._t("text")],2):t._e()])])}),[],!1,null,"3903ef98",null);e.default=component.exports},511:function(t,e,r){"use strict";var n=r(17),l=r(57),o=r(58),c=r(183),d=r(126),f=r(26),_=r(101).f,v=r(102).f,h=r(28).f,m=r(512).trim,x="Number",y=n.Number,w=y,C=y.prototype,k=o(r(127)(C))==x,R="trim"in String.prototype,B=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var r,n,l,o=(e=R?e.trim():m(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,l=49;break;case 79:case 111:n=8,l=55;break;default:return+e}for(var code,c=e.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>l)return NaN;return parseInt(c,n)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof y&&(k?f((function(){C.valueOf.call(r)})):o(r)!=x)?c(new w(B(e)),r,y):B(e)};for(var $,E=r(24)?_(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;E.length>N;N++)l(w,$=E[N])&&!l(y,$)&&h(y,$,v(w,$));y.prototype=C,C.constructor=y,r(34)(n,x,y)}},512:function(t,e,r){var n=r(12),l=r(72),o=r(26),c=r(513),d="["+c+"]",f=RegExp("^"+d+d+"*"),_=RegExp(d+d+"*$"),v=function(t,e,r){var l={},d=o((function(){return!!c[t]()||"​"!="​"[t]()})),f=l[t]=d?e(h):c[t];r&&(l[r]=f),n(n.P+n.F*d,"String",l)},h=v.trim=function(t,e){return t=String(l(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(_,"")),t};t.exports=v},513:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},514:function(t,e,r){"use strict";r.r(e);r(511);var n={name:"SvgPatternRect",props:{width:{type:Number,default:404},height:{type:Number,default:784}},computed:{viewBox:function(){return"0 0 "+this.width+" "+this.height}}},l=r(7),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{fill:"none",width:t.width,height:t.height,viewBox:t.viewBox}},[r("defs",[r("pattern",{attrs:{id:"f210dbf6-a58d-4871-961e-36d5016a0f49",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"}},[r("rect",{staticClass:"text-gray-200",attrs:{x:"0",y:"0",width:"4",height:"4",fill:"currentColor"}})])]),t._v(" "),r("rect",{attrs:{width:t.width,height:t.height,fill:"url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"}})])}),[],!1,null,"4766f43b",null);e.default=component.exports},518:function(t,e,r){"use strict";r.r(e);var n={name:"LayoutBgA",props:{theme:{type:String,default:"RL"}}},l=r(7),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative overflow-hidden"},[r("div",{staticClass:"hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"},[r("div",{staticClass:"relative h-full max-w-screen-xl mx-auto"},["RL"===t.theme?[r("svg-pattern-rect",{staticClass:"absolute bottom-0 left-full transform -translate-y-40 -translate-x-1/4 lg:-translate-x-1/2",attrs:{width:394,height:786}}),t._v(" "),r("svg-pattern-rect",{staticClass:"absolute top-0 right-full transform translate-y-40 translate-x-1/4 lg:translate-x-1/2",attrs:{width:394,height:786}})]:"RLR"===t.theme?[r("svg-pattern-rect",{staticClass:"absolute top-12 left-full transform -translate-x-1/4 lg:-translate-x-1/2",attrs:{width:394,height:394}}),t._v(" "),r("svg-pattern-rect",{staticClass:"absolute top-1/2 right-full transform -translate-y-1/2 translate-x-1/4 lg:translate-x-1/2",attrs:{width:394,height:394}}),t._v(" "),r("svg-pattern-rect",{staticClass:"absolute bottom-12 left-full transform -translate-x-1/4 -translate-x-1/4 lg:-translate-x-1/2",attrs:{width:394,height:394}})]:"CORNER"===t.theme?[r("svg-pattern-rect",{staticClass:"absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4\n                                          lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4",attrs:{width:394,height:786}})]:"LEFT"===t.theme?[r("svg-pattern-rect",{staticClass:"absolute top-0 right-1/2 transform -translate-x-1/2 -translate-y-8",attrs:{width:640,height:2048}})]:"RIGHT"===t.theme?[r("svg-pattern-rect",{staticClass:"absolute top-0 left-1/2 transform translate-x-1/2 -translate-y-8",attrs:{width:640,height:2048}})]:t._e()],2)]),t._v(" "),r("div",{staticClass:"relative"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SvgPatternRect:r(514).default})},527:function(t,e,r){var content=r(544);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("75e1d4e0",content,!0,{sourceMap:!1})},543:function(t,e,r){"use strict";r(527)},544:function(t,e,r){var n=r(22)((function(i){return i[1]}));n.push([t.i,'li[data-v-2ce5b1da]{\n  font-family:Hack, monospace, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  padding-top:1rem;\n  padding-bottom:1rem;\n}\nli .eth-account-avatar[data-v-2ce5b1da]{\n    --tw-bg-opacity:1;\n    background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n    border-radius:9999px;\n    border-width:1px;\n    height:1.75rem;\n    width:1.75rem\n}\na[data-v-2ce5b1da]:hover{\n    --tw-text-opacity:1;\n    color:rgba(22, 30, 46, var(--tw-text-opacity))\n}',""]),t.exports=n},567:function(t,e,r){"use strict";r.r(e);var n=r(537),l={name:"EarlyBirdReferralLink",components:{VueQr:r.n(n).a},computed:{vokenAddressReady:function(){return this.$store.state.voken.account.vokenInt>"0"},referralLink:function(){return this.vokenAddressReady?"https://get.voken.io/?r="+this.$store.state.voken.account.vokenAddress:""}},methods:{copyReferralLink:function(){this.$refs["referral-link"].select(),document.execCommand("copy")?this.$toast.success("Copied"):this.$toast.error("Copy Failed")}}},o=r(7),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("layout-bg-a",{staticClass:"py-16 lg:py-24"},[r("div",{staticClass:"resp-wide"},[r("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},[r("div",{staticClass:"max-w-4xl mx-auto text-center"},[r("h2",{staticClass:"text-3xl font-extrabold text-gray-900 sm:text-4xl"},[t._v("\n          "+t._s(t.$t("earlyBird.referral.Referral_Link"))+"\n        ")])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.vokenAddressReady,expression:"vokenAddressReady"}],staticClass:"resp-mt mx-auto max-w-md flex items-center justify-center"},[r("div",{staticClass:"w-1/2"},[r("vue-qr",{staticClass:"border-cool-gray-300 border",attrs:{text:t.referralLink,size:640,margin:32,colorDark:"#27303f"}})],1)]),t._v(" "),r("div",{staticClass:"resp-mt mx-auto max-w-3xl"},[r("label",{attrs:{for:"referral-link"}}),t._v(" "),r("input",{ref:"referral-link",staticClass:"input-indigo w-full py-3 px-4 font-mono text-sm md:text-base",attrs:{type:"text",id:"referral-link",placeholder:"Please set your Voken address",readonly:""},domProps:{value:t.referralLink},on:{click:t.copyReferralLink}}),t._v(" "),t.vokenAddressReady?r("div",{staticClass:"mt-8 max-w-sm mx-auto"},[r("button",{staticClass:"w-full btn btn-pink justify-center py-2 text-lg text-center break-normal",on:{click:t.copyReferralLink}},[t._v("\n          "+t._s(t.$t("earlyBird.referral.Copy"))+"\n        ")])]):r("div",{staticClass:"mt-8 max-w-md mx-auto"},[r("nuxt-link",{staticClass:"w-full btn btn-pink justify-center py-2 text-lg text-center break-normal",attrs:{to:t.localePath("/wallet/bind")}},[t._v("\n          "+t._s(t.$t("nav.Wallet_Bind"))+"\n        ")])],1)])])])}),[],!1,null,"42df133c",null);e.default=component.exports;installComponents(component,{LayoutBgA:r(518).default})},568:function(t,e,r){"use strict";r.r(e);r(511);var n={name:"EarlyBirdReferralRules",computed:{referred:function(){return Number(this.$store.state.ether.web3().utils.fromWei(this.$store.state.vokenEarlyBirdSale.account.referred,"ether"))}}},l=r(7),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"py-16 lg:py-24"},[r("div",{staticClass:"resp-wide"},[r("div",{staticClass:"refer space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-4 lg:gap-8"},[r("div",{staticClass:"col-span-2 prose sm:prose-md lg:prose-lg xl:prose-xl max-w-none"},[r("h3",[t._v("\n          "+t._s(t.$t("earlyBird.referral.Referral_Rewards__22percent"))+"\n        ")]),t._v(" "),r("p",[t._v("\n          "+t._s(t.$t("The_"))),r("a",{attrs:{target:"_blank",href:t.$t("link.VokenTB_Early_Bird_Sale_Contract.href")}},[t._v(t._s(t.$t("link.VokenTB_Early_Bird_Sale_Contract.text")))]),t._v("\n          "+t._s(t.$t("earlyBird.referral.has_a_10_levels__"))+"\n        ")]),t._v(" "),r("p",[t._v("\n          "+t._s(t.$t("earlyBird.referral.Tell_your_friends_and__"))+"\n        ")]),t._v(" "),r("ul",[r("li",[t._v("\n            "+t._s(t.$t("earlyBird.referral.The_reward_ETH__"))+"\n            "),r("a",{attrs:{target:"_blank",href:t.$t("link.VokenTB_Early_Bird_Sale_Contract.href")}},[t._v("\n              "+t._s(t.$t("link.VokenTB_Early_Bird_Sale_Contract.text"))+"\n            ")])]),t._v(" "),r("li",[t._v("\n            "+t._s(t.$t("earlyBird.referral.The_referral_relationships__"))+"\n            "),r("a",{attrs:{target:"_blank",href:t.$t("link.VokenTB_Main_Contract.href")}},[t._v("\n              "+t._s(t.$t("link.VokenTB_Main_Contract.text"))+"\n            ")]),t._v("\n            "+t._s(t.$t("earlyBird.referral.on_the_Ethereum__"))+"\n          ")]),t._v(" "),r("li",[t._v("\n            "+t._s(t.$t("earlyBird.referral.Everyone_who_join_the"))+"\n            "),r("nuxt-link",{attrs:{to:t.localePath("/voken/early-bird")}},[t._v("\n              "+t._s(t.$t("voken.Early_Bird_Sale"))+"\n            ")]),t._v("\n            "+t._s(t.$t("earlyBird.referral.and_the"))+"\n            "),r("nuxt-link",{attrs:{to:t.localePath("/voken/public-sale")}},[t._v("\n              "+t._s(t.$t("voken.Public_Sale"))+"\n            ")]),t._v("\n            "+t._s(t.$t("earlyBird.referral.by_using_your__"))+"\n          ")],1)]),t._v(" "),r("p",[t._v("\n          "+t._s(t.$t("earlyBird.referral.You_will_get_rewarded__"))+"\n        ")])]),t._v(" "),r("div",{staticClass:"pt-0 px-4 md:pt-2 md:px-0 feed-simple-with-icons"},[r("ul",{staticClass:"-mb-8"},[r("li",[r("div",{staticClass:"feed"},[r("span",{staticClass:"line",attrs:{"aria-hidden":"true"}}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"icon"},[r("fa",{staticClass:"text-green-500",attrs:{icon:["fas","handshake"]}})],1),t._v(" "),r("div",{staticClass:"text"},[r("div",[t._v("\n                    "+t._s(t.$t("earlyBird.referral.From_direct_referrals__"))+" #0\n                  ")]),t._v(" "),r("div",[t._v("\n                    10%\n                  ")])])])])]),t._v(" "),r("li",[r("div",{staticClass:"feed"},[r("span",{staticClass:"line",attrs:{"aria-hidden":"true"}}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"icon"},[r("fa",{staticClass:"text-green-500",attrs:{icon:["fas","user-friends"]}})],1),t._v(" "),r("div",{staticClass:"text"},[r("div",[t._v("\n                    "+t._s(t.$t("earlyBird.referral.From_indirect_referrals__"))+" #1\n                  ")]),t._v(" "),r("div",[t._v("\n                    3%\n                  ")])])])])]),t._v(" "),r("li",[r("div",{staticClass:"feed"},[r("span",{staticClass:"line",attrs:{"aria-hidden":"true"}}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"icon"},[r("fa",{staticClass:"text-green-500",attrs:{icon:["fas","user-friends"]}})],1),t._v(" "),r("div",{staticClass:"text"},[r("div",[t._v("\n                    "+t._s(t.$t("earlyBird.referral.From_indirect_referrals__"))+" #2\n                  ")]),t._v(" "),r("div",[t._v("\n                    2%\n                  ")])])])])]),t._v(" "),t._l([3,4,5,6,7,8,9],(function(e){return r("li",{key:e},[r("div",{staticClass:"feed"},[r("span",{directives:[{name:"show",rawName:"v-show",value:e<9,expression:"level < 9"}],staticClass:"line",attrs:{"aria-hidden":"true"}}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"icon"},[t.referred<e?r("fa",{staticClass:"text-gray-300",attrs:{icon:["fas","user-friends"]}}):r("fa",{staticClass:"text-green-500",attrs:{icon:["fas","user-friends"]}})],1),t._v(" "),r("div",{staticClass:"text"},[r("div",[r("p",[t._v("\n                      "+t._s(t.$t("earlyBird.referral.From_indirect_referrals__"))+" #"+t._s(e)+"\n                    ")]),t._v(" "),t.referred<e?r("p",{staticClass:"mt-1 text-green-500"},[t._v("\n                      "+t._s(t.$t("earlyBird.referral.Refer"))+"\n                      "+t._s(e)+" ETH\n                      "+t._s(t.$t("earlyBird.referral.to_unlock"))+"\n                    ")]):r("p",{staticClass:"mt-1 text-orange-500"},[t._v("\n                      "+t._s(t.$t("earlyBird.referral.Unlocked"))+"\n                    ")])]),t._v(" "),r("div",[t._v("\n                    1%\n                  ")])])])])])}))],2)])])])])}),[],!1,null,"f039be1e",null);e.default=component.exports},569:function(t,e,r){"use strict";r.r(e);var n=r(1),l=(r(15),r(181)),o=r(0),c=r(185),d={name:"EarlyBirdReferralRewards",components:{VueAvatar:l.a},data:function(){return{fnEtherscan:c.a,rewards:[]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getRewards();case 2:case"end":return e.stop()}}),e)})))()},methods:{getRewards:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.state.vokenEarlyBirdSale.contract().getPastEvents("Reward",{filter:{referrer:t.$store.state.ether.account},fromBlock:0,toBlock:"latest"}).then(t.onRewards).catch(t.onRewardsError);case 2:case"end":return e.stop()}}),e)})))()},onRewards:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.length>0){for(n=[],i=0;i<t.length;i++)n.push({blockNumber:o.a.ns2Str(t[i].blockNumber,0),transactionHash:t[i].transactionHash,account:t[i].returnValues.account,level:t[i].returnValues.level,ether:e.$store.state.ether.web3().utils.fromWei(t[i].returnValues.weiReward,"ether")});e.rewards=n}case 1:case"end":return r.stop()}}),r)})))()},onRewardsError:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.error("::: C[EarlyBirdReferralRewards] onRewardsError:",t);case 1:case"end":return e.stop()}}),e)})))()}}},f=(r(543),r(7)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"py-16 lg:py-24"},[r("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},[r("div",{staticClass:"max-w-4xl mx-auto text-center"},[r("h2",{staticClass:"text-3xl font-extrabold text-gray-900 sm:text-4xl"},[t._v("\n        "+t._s(t.$t("earlyBird.rules.Referral_Rewards"))+"\n      ")])])]),t._v(" "),r("div",{staticClass:"resp-mt mx-auto max-w-2xl px-2"},[t.rewards.length>0?r("ul",{staticClass:"divide-y divide-gray-200"},t._l(t.rewards,(function(e){return r("li",[r("div",{staticClass:"flex space-x-3"},[r("vue-avatar",{staticClass:"eth-account-avatar",attrs:{value:e.account}}),t._v(" "),r("div",{staticClass:"flex-1 space-y-1"},[r("div",{staticClass:"flex items-center justify-between"},[r("h3",{staticClass:"text-base font-bold"},[t._v("\n                "+t._s(e.ether)+" ETH\n              ")]),t._v(" "),r("p",{staticClass:"text-sm text-gray-500"},[r("a",{attrs:{target:"_blank",href:t.fnEtherscan.tx(e.transactionHash)}},[t._v("\n                  #"+t._s(e.blockNumber)+"\n                ")])])]),t._v(" "),r("p",{staticClass:"text-xs md:text-sm text-gray-500 break-all"},[t._v("\n              "+t._s(t.$t("earlyBird.referral.Depth"))+" #"+t._s(e.level)+" - "+t._s(e.account)+"\n            ")])])],1)])})),0):r("div",{staticClass:"text-center text-gray-500"},[t._v("\n      No Referrals Yet\n    ")])])])}),[],!1,null,"2ce5b1da",null);e.default=component.exports},633:function(t,e,r){"use strict";r.r(e);var n={name:"early-bird-referral",middleware:["web3","voken","vokenEarlyBirdSale"],layout:"white"},l=r(7),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("layout-hero-simple",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n      "+t._s(t.$t("earlyBird.referral.Referral_System"))+"\n    ")]},proxy:!0},{key:"text",fn:function(){return[t._v("\n      "+t._s(t.$t("earlyBird.referral.Earn_ETH_up_to_22percent__"))+"\n    ")]},proxy:!0}])}),t._v(" "),r("early-bird-referral-link",{staticClass:"bg-indigo-50"}),t._v(" "),r("early-bird-referral-rules"),t._v(" "),r("early-bird-referral-rewards",{staticClass:"bg-indigo-50"})],1)}),[],!1,null,"6453954b",null);e.default=component.exports;installComponents(component,{LayoutHeroSimple:r(508).default,EarlyBirdReferralLink:r(567).default,EarlyBirdReferralRules:r(568).default,EarlyBirdReferralRewards:r(569).default})}}]);