"use strict";$(document).ready(function(){setTimeout(getData,500);setTimeout(checkAccount,750);if(localStorage.getItem("darkmode")=="true"){darkmode=true;const element=document.body;element.classList.toggle("dark-mode");}
const queryString=window.location.search.substring(1);const varArray=queryString.split("=");const param1=varArray[0];const param2=varArray[1];if(param2&&param2.length==42){localStorage.setItem("referrer",param2);}});const vault=[{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"cashout","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"claimRefRewards","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"claimYield","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"referrer","type":"address"}],"name":"deposit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"minCake","type":"uint256"}],"name":"pullOutstandingDivs","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"setWeeksRewards","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[{"name":"nextFomo","type":"address"}],"name":"updateFomo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newGov","type":"address"}],"name":"updateGovenance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"nextKeys","type":"address"}],"name":"updateKeys","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdrawAfterSystemClosed","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"farmer","type":"address"}],"name":"cakeBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"keys","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"farmer","type":"address"}],"name":"keysDividendsOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"keysPayoutsTo","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"keysPerEpoch","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"keysProfitPerShare","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastDripTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"farmer","type":"address"}],"name":"mooBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nutsCompPerCake","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"outstandingGameCake","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"payoutEndTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"players","outputs":[{"name":"balance","type":"uint128"},{"name":"playersCake","type":"uint128"},{"name":"referrer","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"refRewards","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalCakeBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalDeposits","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];const fomo=[{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"addBanana","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"minBanana","type":"uint256"}],"name":"addBunny","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"addFomoBanana","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"addNuts","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newFutureRoundsPercent","type":"uint256"},{"name":"newNutsPercent","type":"uint256"}],"name":"changeRewardPercents","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"endRound","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint128"},{"name":"newFomo","type":"address"}],"name":"moveFomoBanana","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"player","type":"address"},{"name":"amount","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"bytes"}],"name":"receiveApproval","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newInc","type":"uint256"}],"name":"reduceIncPerKey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"bananaVault","type":"address"}],"name":"setupBananaVault","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newKeys","type":"address"},{"name":"newKeysLP","type":"address"}],"name":"setupRound","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"setWeeksRewards","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"minNuts","type":"uint256"},{"name":"percentBurnt","type":"uint256"}],"name":"sweepNuts","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"minBNB","type":"uint256"},{"name":"minNuts","type":"uint256"}],"name":"sweepNutsLP","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[{"name":"stakingContract","type":"address"}],"name":"upgradeNutsStaking","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"bananaPrize","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentRoundNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"futureRoundsPercent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLatestBuys","outputs":[{"name":"","type":"address[]"},{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getPreviousWinners","outputs":[{"name":"","type":"address[]"},{"name":"","type":"uint256[]"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"incPerKey","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"keyPurchases","outputs":[{"name":"player","type":"address"},{"name":"keysBought","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"address"}],"name":"keysOwned","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxTimer","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nutsPercent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"bonesPrize","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingBananaAlloc","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingNutsAlloc","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"potTimer","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"previousBananaPrize","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"previousBonesPrize","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];const erc20=[{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}];const uniswap=[{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"constant":true,"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];const KEYS_TOKEN="0x224CE62Ab05C05B349736e9659Fc4954a223a9bc";var provider;var web3;var account;async function getData(){if(typeof BinanceChain!=='undefined'&&typeof window.ethereum!=='undefined'){return;}else if(typeof BinanceChain!=='undefined'){BinanceChain.on('accountsChanged',handleAccountsChanged);web3=new Web3(BinanceChain);}else if(typeof window.ethereum!=='undefined'){web3=new Web3(window.ethereum);}
setupContracts();updateData();}
function setupContracts(){FARM_FOMO.tokenContract=web3.eth.contract(erc20).at(KEYS_TOKEN);CAKE.tokenContract=web3.eth.contract(erc20).at(CAKE.address);FARM_FOMO.cakeFarmContract=web3.eth.contract(vault).at(FARM_FOMO.cakeFarm);FARM_FOMO.fomoContract=web3.eth.contract(fomo).at(FARM_FOMO.fomo);PANCAKESWAP_TWO.contract=web3.eth.contract(uniswap).at(PANCAKESWAP_TWO.address);}
function updateData(){if(web3!=null&&(web3.version==null||(web3.version.api!="0.20.7"&&web3.version.api!="0.20.6"))){console.log("Multiple wallets detected -please disable one");}
FARM_FOMO.cakeFarmContract.totalCakeBalance((err,result)=>{$("#totalCakeDeposited").text(Math.floor(web3.fromWei(result,"ether")*100)/100+" CAKE");var cake=result/1000;var path=[CAKE.address,WBNB.address,KEYS_TOKEN];PANCAKESWAP_TWO.contract.getAmountsOut(cake,path,(err,result)=>{const nutValue=web3.fromWei(result[2]*1000,"ether");const yearlyPayout=10000;const apr=Math.floor(((yearlyPayout/nutValue))*1000)/10;const daily=Math.floor(((apr+10)/365)*100)/100;var apy=Math.floor((Math.pow(1+(daily/100),365)-1)*1000)/10;if(apy>10000){apy=Math.floor(apy/100)/10+"K";}
$("#cakeVaultAPY").text(apr+"%");$("#cakeVaultAPY2").text(Math.floor(apr*100)/100+"% apr KEYS");$("#cakeVaultAPY3").text(daily+"%");$("#cakeVaultAPY4").text(apy+"%");$("#cakeVaultAPY5").text(apr+"%");});});FARM_FOMO.fomoContract.potTimer((err,result)=>{const now=new Date().getTime()/1000;if(result<now){$("#potTimer").text("ENDED");}else{$("#potTimer").text((result-now).toHHMMSS());}
if(result!=null&&result==0){FARM_FOMO.fomoContract.previousBonesPrize((err,result)=>{FARM_FOMO.bonesPrize=web3.fromWei(result,"ether");FARM_FOMO.fomoContract.getPreviousWinners((err,result)=>{updateWinnersUI(result);$("#prizeHeader").text("PRIZE");FARM_FOMO.pendingBones=web3.fromWei(0,"ether");updatePrizeText();});});}else{FARM_FOMO.fomoContract.getLatestBuys((err,result)=>{updateWinnersUI(result);});FARM_FOMO.fomoContract.bonesPrize((err,result)=>{FARM_FOMO.bonesPrize=web3.fromWei(result,"ether");updatePrizeText();});FARM_FOMO.cakeFarmContract.outstandingGameCake((err,result)=>{FARM_FOMO.pendingBones=web3.fromWei(result,"ether");updatePrizeText();});}});updateAccountData();setTimeout(updateData,1000);}
function updateAccountData(){if(account!=null){CAKE.tokenContract.balanceOf(account,(err,result)=>{CAKE.usersBalance=result;$("#usersCake").text(Math.floor(web3.fromWei(result,"ether")*100)/100+" CAKE");});FARM_FOMO.cakeFarmContract.keysDividendsOf(account,(err,result)=>{FARM_FOMO.usersCakeEarnings=Math.floor(web3.fromWei(result,"ether")*10000)/10000;updateCakeVaultUI();});FARM_FOMO.cakeFarmContract.refRewards(KEYS_TOKEN,account,(err,result)=>{FARM_FOMO.cakeRefRewards=web3.fromWei(result,"ether");if(FARM_FOMO.cakeRefRewards!=null){$("#usersRefEarnings").text(Math.floor(FARM_FOMO.cakeRefRewards*1000)/1000+" KEYS");}});FARM_FOMO.cakeFarmContract.cakeBalance(account,(err,result)=>{FARM_FOMO.usersCakeDeposit=result;updateCakeVaultUI();$("#usersVaultCake").text(Math.floor(web3.fromWei(result,"ether")*1000000)/1000000+" CAKE");if(result>0){$("#cakeInVaultText").show().html("your deposit: "+Math.floor(web3.fromWei(result,"ether")*1000000)/1000000+" CAKE");}});FARM_FOMO.tokenContract.balanceOf(account,(err,result)=>{FARM_FOMO.usersKeys=result;$("#usersKeys").text(Math.floor(web3.fromWei(result,"ether")*100)/100+" KEYS");});$("#refLink").text("https://moonshots.farm/fomo?&farmer="+account);}}
function updatePrizeText(){if(FARM_FOMO.pendingBones!=null&&FARM_FOMO.bonesPrize!=null){$("#bonesPrize").text(Math.floor((FARM_FOMO.bonesPrize.plus(FARM_FOMO.pendingBones))*100)/100+" BONES");var bones=FARM_FOMO.bonesPrize.plus(FARM_FOMO.pendingBones)/1000;var path=[BONES.address,WBNB.address,BUSD.address];PANCAKESWAP_TWO.contract.getAmountsOut(web3.toWei(bones,"ether"),path,(err,result)=>{const usdValue=web3.fromWei(result[2]*1000,"ether");$("#usdAmount").text("(est. $"+Math.floor(usdValue*100)/100+")");});}}
function updateWinnersUI(result){if(result!=null){var totalKeysWon=0;for(var i=0;i<result[0].length;i++){totalKeysWon+=Math.floor(result[1][i]);}
$('#latestBuys tbody').empty();for(var i=0;i<result[0].length;i++){const address=result[0][i];const keys=result[1][i];var potentialPrize="LOADING";if(FARM_FOMO.bonesPrize!=null){const bones=Math.floor(FARM_FOMO.bonesPrize*keys/totalKeysWon);potentialPrize=bones+" BONES<br/>";}
var player=address.substring(0,8)+"..";if(account!=null&&address.toLowerCase()==account.toLowerCase()){player="YOU";}
var keysSpent=keys+" KEY";if(keys!=1){keysSpent+="S";}
$("#latestBuys").append("<tr><td style='padding-top: 10px; padding-bottom:14px;'><b>"+player+"</b></td><td style=''padding-top: 10px; padding-bottom:14px;'><b>"+keysSpent+"</b></td><td style=''padding-top: 10px; padding-bottom:14px;'><b>"+potentialPrize+"</b></td>");}}}
function updateCakeVaultUI(){if(FARM_FOMO.usersCakeDeposit>0&&FARM_FOMO.usersCakeEarnings!=null){$("#cakeVaultStakingText").html("<span style='font-size: 16px;'>your earnings: "+FARM_FOMO.usersCakeEarnings+" KEYS</span>");$("#cakeVaultPadding").css("display","unset");$("#cakeVaultCompounding").css("display","block");}}
function updateAccountUI(){if(account!=null){$("#stakeCakeVault").text("stake").removeAttr('onclick').css("transition","unset").css("width","47%").off('click').attr('data-toggle','modal').attr('data-target','#vaultCakeModal');$("#unstakeCakeVault").text("unstake").removeAttr('onclick').css("display","inline-block").off('click').attr('data-toggle','modal').attr('data-target','#unvaultCakeModal');$("#connectWallet").css("display","none");$("#tradeKeys").css("display","inline-block");CAKE.tokenContract.allowance(account,FARM_FOMO.cakeFarm,(err,result)=>{const amount=$("#vaultCakeAmount").val();const amountStaking=web3.toWei(amount,"ether");if(result.lt(amountStaking)){$("#vaultCakeConfirm").text("approve cake");}else{$("#vaultCakeConfirm").text("stake cake");}});}}
function checkAccount(){if(provider=="binance"){updateAccountUI();}else if(provider=="metamask"){web3.eth.getAccounts((err,accounts)=>{if(accounts==null||accounts.length==0){console.log("NO ACCOUNT CONNECTED");}else{if(account!=accounts[0]){account=accounts[0];updateAccountData();}
updateAccountUI();}});}else if(typeof BinanceChain!=='undefined'){updateAccountUI();}else if(web3&&web3.eth){web3.eth.getAccounts((err,accounts)=>{if(accounts==null||accounts.length==0){console.log("NO ACCOUNT CONNECTED");}else{if(account!=accounts[0]){account=accounts[0];updateAccountData();}
updateAccountUI();}});}
setTimeout(checkAccount,1000);}
function handleAccountsChanged(accounts){if(accounts[0]!=account){account=accounts[0];}}
function vaultCake(){const amount=$("#vaultCakeAmount").val();var referrer="0x0000000000000000000000000000000000000000";if(localStorage.getItem("referrer")!=null){referrer=localStorage.getItem("referrer");}
if(amount>0){CAKE.tokenContract.allowance(account,FARM_FOMO.cakeFarm,(err,result)=>{const amountStaking=web3.toWei(amount,"ether");if(result.lt(amountStaking)){CAKE.tokenContract.approve(FARM_FOMO.cakeFarm,"1000000000000000000000000000",{from:account,gas:80000},(err,result)=>{FARM_FOMO.cakeFarmContract.deposit(web3.toWei(amount,"ether"),referrer,{from:account,gas:600000},function(error,result){if(!error){$('#vaultCakeModal').modal('hide');}
console.log(result);});});}else{FARM_FOMO.cakeFarmContract.deposit(web3.toWei(amount,"ether"),referrer,{from:account,gas:600000},function(error,result){if(!error){$('#vaultCakeModal').modal('hide');}
console.log(result);});}});}}
function vaultMaxCake(){$("#vaultCakeAmount").val(Math.floor(web3.fromWei(CAKE.usersBalance,"ether")*100000)/100000);}
function unvaultCake(){var amount=web3.toWei($("#unvaultCakeAmount").val(),"ether");if(amount>0){FARM_FOMO.cakeFarmContract.cashout(amount,{from:account,gas:600000},function(error,result){if(!error){$('#unvaultCakeModal').modal('hide');}
console.log(result);});}}
function unvaultMaxCake(){$("#unvaultCakeAmount").val(Math.floor(web3.fromWei(FARM_FOMO.usersCakeDeposit,"ether")*100000)/100000);}
function withdrawCakeVault(){FARM_FOMO.cakeFarmContract.claimYield({from:account},function(error,result){if(!error){$('#harvestVaultCakeModal').modal('hide');}
console.log(result);});}
function claimRefRewards(){if(FARM_FOMO.cakeRefRewards>0){FARM_FOMO.cakeFarmContract.claimRefRewards({from:account},function(error,result){console.log(result);});}}
function maxKeys(){$("#keysAmount").val(Math.floor(web3.fromWei(FARM_FOMO.usersKeys,"ether")));}
function spendKeys(){const amount=$("#keysAmount").val();if(amount>=1){FARM_FOMO.tokenContract.approveAndCall(FARM_FOMO.fomo,web3.toWei(amount,"ether"),[],{from:account},function(error,result){console.log(result);});}}
async function connectAccount(){try{if(typeof BinanceChain!=='undefined'&&typeof window.ethereum!=='undefined'){$('#connectionModal').modal();}else if(typeof BinanceChain!=='undefined'){connectBinance();}else if(typeof window.ethereum!=='undefined'){connectMetamask();}else{walletConnect();}}catch(e){console.log("Could not get a wallet connection",e);return;}}
function connectBinance(){provider="binance";$('#connectionModal').modal('hide');web3=new Web3(BinanceChain);BinanceChain.request({method:'eth_requestAccounts'}).then(handleAccountsChanged).catch((err)=>{if(err.code===4001){console.log('Please connect to Binance Smart Wallet.');}else{console.error(err);}});setupContracts();updateData();}
function connectMetamask(){provider="metamask";$('#connectionModal').modal('hide');window.ethereum.enable();web3=new Web3(window.ethereum);setupContracts();updateData();}
async function walletConnect(){const WalletConnectProvider=window.WalletConnectProvider.default;const provider=new WalletConnectProvider({rpc:{56:"https://bsc-dataseed.binance.org",},network:'binance',chainId:56});await provider.enable();web3=new Web3(provider);setupContracts();updateData();}
function copyLink(){const temp=$("<input>");$("#refLink").append(temp);temp.val("https://moonshots.farm/fomo?&farmer="+account).select();document.execCommand("copy");temp.remove();}
Number.prototype.toHHMMSS=function(){var sec_num=parseInt(this,10);var hours=Math.floor(sec_num/3600);var minutes=Math.floor((sec_num-(hours*3600))/60);var seconds=sec_num-(hours*3600)-(minutes*60);if(hours<10){hours="0"+hours;}
if(minutes<10){minutes="0"+minutes;}
if(seconds<10){seconds="0"+seconds;}
return hours+':'+minutes+':'+seconds;};