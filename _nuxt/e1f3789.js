(window.webpackJsonp=window.webpackJsonp||[]).push([[58,31],{510:function(e,t,n){"use strict";n.r(t);var r={name:"NumberObj",props:["valueObj"]},d=n(7),component=Object(d.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v("\n  "+e._s(e.valueObj.d)),n("span",{directives:[{name:"show",rawName:"v-show",value:e.valueObj.f,expression:"valueObj.f"}],staticClass:"number-f"},[e._v("."+e._s(e.valueObj.f))])])}),[],!1,null,null,null);t.default=component.exports},621:function(e,t,n){"use strict";n.r(t);var r=n(73),d=n(21),v={name:"overview-index",middleware:["web3","voken","vokenEarlyBirdSale"],computed:{fnEthereum:function(){return r.a},DAPP:function(){return d.a},ether:function(){return this.$store.state.ether},voken:function(){return this.$store.state.voken},earlyBirdSale:function(){return this.$store.state.vokenEarlyBirdSale},ebAccount:function(){return this.$store.state.vokenEarlyBirdSale.account}}},l=n(7),component=Object(l.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"resp-wide pb-20"},[n("div",{staticClass:"max-w-2xl mx-auto my-8 sm:my-16 sm:px-6 lg:px-8 lg:max-w-7xl"},[n("div",{staticClass:"bg-white shadow overflow-hidden sm:rounded-lg"},[n("div",{staticClass:"div-striped-list-header space-x-2"},[e._m(0),e._v(" "),n("div",{staticClass:"text-2xl text-gray-500"},[n("fa",{attrs:{icon:["fab","ethereum"]}})],1)]),e._v(" "),n("div",{staticClass:"border-t border-gray-200 px-4 py-5 sm:p-0"},[n("dl",{staticClass:"sm:divide-y sm:divide-gray-200"},[n("div",{staticClass:"div-striped-list-card"},[n("dt",[e._v("\n              Chain ID (Name)\n            ")]),e._v(" "),n("dd",[e._v("\n              "+e._s(e.ether.chainId)+" ("+e._s(e.fnEthereum.chainId2NetworkName(e.ether.chainId))+")\n            ")])]),e._v(" "),e.ether.blockNumber?n("div",{staticClass:"div-striped-list-card"},[n("dt",[e._v("\n              Block Height\n            ")]),e._v(" "),n("dd",[e._v("\n              "+e._s(e.ether.blockNumberStr)+"\n            ")])]):e._e(),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.ether.productionMode,expression:"!ether.productionMode"}],staticClass:"div-striped-list-card"},[n("dt",[e._v("\n              ETH Balance\n            ")]),e._v(" "),n("dd",[n("fa",{staticClass:"text-indigo-600",attrs:{icon:["fab","ethereum"]}}),e._v("\n              "+e._s(e.ether.balanceStr)+" ETH\n            ")],1)]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.ether.productionMode&&e.ether.usdPrice>"0",expression:"ether.productionMode && ether.usdPrice > '0'"}],staticClass:"div-striped-list-card"},[n("dt",[e._v("\n              Latest ETH Price\n            ")]),e._v(" "),n("dd",[n("fa",{staticClass:"text-indigo-600",attrs:{icon:["fas","dollar-sign"]}}),e._v(" "),n("number-obj",{attrs:{"value-obj":e.ether.usdPriceObj}}),e._v("\n              USD (DAI, on UniSwap)\n            ")],1)]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.ether.gasPrice>"0",expression:"ether.gasPrice > '0'"}],staticClass:"div-striped-list-card"},[n("dt",[e._v("\n              GAS Price (.avg)\n            ")]),e._v(" "),n("dd",[n("number-obj",{attrs:{"value-obj":e.ether.gasPriceObj}}),e._v("\n              GWei\n            ")],1)])])])])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.ether.productionMode,expression:"ether.productionMode"}],staticClass:"max-w-2xl mx-auto my-8 sm:my-16 sm:px-6 lg:px-8 lg:max-w-7xl"},[n("div",{staticClass:"bg-white shadow overflow-hidden sm:rounded-lg"},[n("div",{staticClass:"div-striped-list-header space-x-2"},[e._m(1),e._v(" "),n("div",{staticClass:"font-mono text-sm",class:{"text-gray-400":e.voken.blockNumber!==e.ether.blockNumber}},[e._v("\n          #"+e._s(e.voken.blockNumberStr)+"\n        ")])]),e._v(" "),n("div",{staticClass:"border-t border-gray-200 px-4 py-5 sm:p-0"},[n("dl",{staticClass:"sm:divide-y sm:divide-gray-200"},[e._m(2),e._v(" "),n("div",{staticClass:"div-striped-list-card"},[n("dt",[e._v("\n              Latest Price\n            ")]),e._v(" "),n("dd",[n("fa",{staticClass:"text-indigo-600",attrs:{icon:["fas","dollar-sign"]}}),e._v(" "),n("number-obj",{attrs:{"value-obj":e.voken.usdPriceObj}}),e._v("\n              USD (DAI, on UniSwap)\n            ")],1)]),e._v(" "),n("div",{staticClass:"div-striped-list-card"},[n("dt",[e._v("\n              Total Supply\n            ")]),e._v(" "),n("dd",[n("div",[n("number-obj",{attrs:{"value-obj":e.voken.capObj}})],1),e._v(" "),n("div",[n("number-obj",{attrs:{"value-obj":e.voken.totalSupplyObj}}),e._v(" for now\n              ")],1)])]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.voken.burningPermilleMin,expression:"voken.burningPermilleMin"}],staticClass:"div-striped-list-card"},[n("dt",[e._v("\n              Transfer with burning\n            ")]),e._v(" "),n("dd",[e._v("\n              "+e._s(e.voken.burningPermilleMinStr)+"% - "+e._s(e.voken.burningPermilleMaxStr)+"%\n            ")])]),e._v(" "),n("div",{staticClass:"div-striped-list-card"},[n("dt",[e._v("\n              Contract Address\n            ")]),e._v(" "),n("dd",[e._v("\n              "+e._s(e.DAPP.CONTRACT_ADDRESS_VOKEN_TB)+"\n            ")])])])])])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.ether.productionMode,expression:"ether.productionMode"}],staticClass:"max-w-2xl mx-auto my-8 sm:my-16 sm:px-6 lg:px-8 lg:max-w-7xl"},[n("div",{staticClass:"bg-white shadow overflow-hidden sm:rounded-lg"},[n("div",{staticClass:"div-striped-list-header space-x-2"},[n("div",[n("h3",[e._v("\n            ETH & VokenTB Wallet\n          ")]),e._v(" "),n("p",[e._v("\n            "+e._s(e.ether.account)+"\n          ")])]),e._v(" "),n("div",{staticClass:"text-3xl text-gray-500"},[n("fa",{directives:[{name:"show",rawName:"v-show",value:e.voken.account.isBank,expression:"voken.account.isBank"}],attrs:{icon:["fas","compact-disc"]}}),e._v(" "),n("fa",{directives:[{name:"show",rawName:"v-show",value:!e.voken.account.isBank,expression:"!voken.account.isBank"}],attrs:{icon:["fas","user-circle"]}})],1)]),e._v(" "),n("div",{staticClass:"border-t border-gray-200 px-4 py-5 sm:p-0"},[n("dl",{staticClass:"sm:divide-y sm:divide-gray-200"},[n("div",{staticClass:"div-striped-list-card"},[n("dt",[e._v("\n              ETH Balance\n            ")]),e._v(" "),n("dd",[n("fa",{staticClass:"text-indigo-600",attrs:{icon:["fab","ethereum"]}}),e._v("\n              "+e._s(e.ether.balanceStr)+" ETH\n            ")],1)]),e._v(" "),n("div",{staticClass:"div-striped-list-card"},[n("dt",[e._v("\n              VokenTB Balance\n            ")]),e._v(" "),n("dd",[n("div",[n("number-obj",{attrs:{"value-obj":e.voken.account.balanceObj}}),e._v("\n                VokenTB\n                "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.voken.account.balance>"0",expression:"voken.account.balance > '0'"}]},[e.voken.account.balance===e.voken.account.vesting?n("span",{staticClass:"text-gray-400"},[e._v("\n                    (vesting)\n                  ")]):e.voken.account.balance===e.voken.account.available?n("span",{staticClass:"text-gray-400"},[e._v("\n                    (all available)\n                  ")]):n("span",[e._v("\n                    :: "),n("number-obj",{attrs:{"value-obj":e.voken.account.availableObj}}),e._v(" available\n                  ")],1)])],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.ebAccount.summed>"0",expression:"ebAccount.summed > '0'"}],staticClass:"mt-1 ml-2 text-xs text-gray-400"},[e._v("\n                Include "),n("number-obj",{attrs:{"value-obj":e.ebAccount.summedObj}}),e._v("\n                VokenTB via Early-Bird Sale\n              ")],1)])]),e._v(" "),n("div",{staticClass:"div-striped-list-card"},[n("dt",[e._v("\n              Voken Wallet Address\n            ")]),e._v(" "),n("dd",[e.voken.account.vokenInt>"0"?n("div",[n("div",[e._v("\n                  "+e._s(e.voken.account.vokenAddress)+"\n                ")]),e._v(" "),n("div",{staticClass:"mt-1 text-blue-700"},[e._v("\n                  For Voken Blockchain, both beta and prod\n                ")])]):n("div",[n("nuxt-link",{staticClass:"btn btn-pink py-1 px-3 text-sm text-center break-normal",attrs:{to:e.localePath("/wallet/bind")}},[e._v("\n                  "+e._s(e.$t("nav.Wallet_Bind"))+"\n                ")])],1)])])])])])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.ether.productionMode,expression:"ether.productionMode"}],staticClass:"max-w-2xl mx-auto my-8 sm:my-16 sm:px-6 lg:px-8 lg:max-w-7xl"},[n("div",{staticClass:"bg-white shadow overflow-hidden sm:rounded-lg"},[n("div",{staticClass:"div-striped-list-header space-x-2"},[e._m(5),e._v(" "),n("div",{staticClass:"font-mono text-sm",class:{"text-gray-400":e.earlyBirdSale.blockNumber!==e.ether.blockNumber}},[e._v("\n          #"+e._s(e.earlyBirdSale.blockNumberStr)+"\n        ")])]),e._v(" "),n("div",{staticClass:"border-t border-gray-200 px-4 py-5 sm:p-0"},[n("dl",{staticClass:"sm:divide-y sm:divide-gray-200"},[n("div",{staticClass:"div-striped-list-card"},[n("dt",[e._v("\n              Sale Price\n            ")]),e._v(" "),n("dd",[n("fa",{staticClass:"text-indigo-600",attrs:{icon:["fas","dollar-sign"]}}),e._v(" "),n("number-obj",{attrs:{"value-obj":e.earlyBirdSale.usdPriceObj}}),e._v("\n              USD (DAI)\n            ")],1)]),e._v(" "),n("div",{staticClass:"div-striped-list-card"},[n("dt",[e._v("\n              Minimum ~ Maximum\n            ")]),e._v(" "),n("dd",[e._v("\n              "+e._s(e.earlyBirdSale.weiMinStr)+" ~ "+e._s(e.earlyBirdSale.weiMaxStr)+" ETH\n            ")])]),e._v(" "),n("div",{staticClass:"div-striped-list-card"},[n("dt",[e._v("\n              Sold\n            ")]),e._v(" "),n("dd",[e._v("\n              "+e._s(e.earlyBirdSale.progressPercentStr)+"% ::\n              "),n("number-obj",{attrs:{"value-obj":e.earlyBirdSale.summedObj}}),e._v("\n              VokenTB\n              ")],1)]),e._v(" "),n("div",{staticClass:"div-striped-list-card"},[n("dt",[e._v("\n              Contract Address\n            ")]),e._v(" "),n("dd",[e._v("\n              "+e._s(e.DAPP.CONTRACT_ADDRESS_EARLY_BIRD)+"\n            ")])])])])])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("\n            ETH (Ethereum) Blockchain\n          ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("\n            VokenTB\n          ")]),e._v(" "),n("p",[e._v("\n            On Ethereum blockchain\n          ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"div-striped-list-card"},[n("dt",[e._v("\n              Token Symbol (Name)\n            ")]),e._v(" "),n("dd",[e._v("\n              VokenTB (Voken TeraByte)\n            ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"div-striped-list-card"},[n("dt",[e._v("\n              Distribution for Early-Bird\n            ")]),e._v(" "),n("dd",[e._v("\n              5% of the Total Supply: 10.5 Million\n            ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"div-striped-list-card"},[n("dt",[e._v("\n              Distribution for Public-Sale\n            ")]),e._v(" "),n("dd",[e._v("\n              40% of the Total Supply: 84 Million, NOT STARTED\n            ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("\n            VokenTB Early-Bird Sale\n          ")]),e._v(" "),n("p",[e._v("\n            On Ethereum blockchain\n          ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{NumberObj:n(510).default})}}]);