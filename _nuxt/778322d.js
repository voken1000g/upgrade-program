(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{883:function(t,e,n){"use strict";n.r(e);var r=n(0),o=(n(16),n(24),n(25),n(13),n(19)),c=n.n(o),l=(n(14),n(1),n(4),{name:"debug",middleware:["web3"],mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.warn("::: debug start..."),e.next=3,t.get();case 3:case"end":return e.stop()}}),e)})))()},methods:{get:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.state.uniswapV2.pairContract().getPastEvents("Swap",{fromBlock:0,toBlock:"latest"}).then(t.onGet).catch(t.onGetError);case 2:case"end":return e.stop()}}),e)})))()},onGet:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.length>0){for(n=[],i=0;i<t.length;i++)n.unshift({blockNumber:t[i].blockNumber,transactionHash:t[i].transactionHash,account:t[i].returnValues.to,vokenIn:t[i].returnValues.amount0In,vokenOut:t[i].returnValues.amount0Out,daiIn:c.a.utils.toBN(t[i].returnValues.amount1In).div(c.a.utils.toBN(Math.pow(10,12))).toString(),daiOut:c.a.utils.toBN(t[i].returnValues.amount1Out).div(c.a.utils.toBN(Math.pow(10,12))).toString()});console.log(n)}case 1:case"end":return e.stop()}}),e)})))()},onGetError:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.error("::: P[/dev/debug] onGetError:",t);case 1:case"end":return e.stop()}}),e)})))()}}}),f=n(2),component=Object(f.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,"fe8130fc",null);e.default=component.exports}}]);