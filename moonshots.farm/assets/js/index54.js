"use strict";
$(document).ready(function () {
    setTimeout(getData, 300);
    setTimeout(checkAccount, 600);
});

const staking = [{"constant":true,"inputs":[{"name":"farmer","type":"address"}],"name":"dividendsOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"payoutInterval","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"player","type":"address"},{"name":"amount","type":"uint256"}],"name":"depositFor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"claimYield","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newTimer","type":"uint256"}],"name":"changePayoutInterval","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"minBones","type":"uint256"}],"name":"depositYield","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalDeposits","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"distributeDivs","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"player","type":"address"},{"name":"amount","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"bytes"}],"name":"receiveApproval","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"cashout","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"bnbPerEpoch","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"payoutEndTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastDripTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"}];

const vault = [{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"minTokens","type":"uint256"}],"name":"buyMoonshots","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint128"}],"name":"cashout","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"claimYield","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint128"}],"name":"deposit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pullBonusBones","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pullOutstandingDivs","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"nextToken","type":"address"},{"name":"minTokens","type":"uint256"}],"name":"snapshotMoonshotDivs","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"minBNB","type":"uint256"}],"name":"sweepCake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"},{"name":"tokens","type":"uint256"},{"name":"minBNB","type":"uint256"},{"name":"sweepBNB","type":"bool"},{"name":"pullInstead","type":"bool"}],"name":"sweepExpired","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"sweepFees","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[{"name":"newAmount","type":"uint256"}],"name":"updateFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newLockPeriod","type":"uint256"}],"name":"updateLockPeriod","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"availableYield","outputs":[{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"offset","type":"uint256"},{"name":"amount","type":"uint256"}],"name":"availableYields","outputs":[{"name":"","type":"address[]"},{"name":"","type":"uint256[]"},{"name":"","type":"bool[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"farmer","type":"address"}],"name":"cakeBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"cashoutTax","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"epoch","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"farmedAmountSnapshots","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"farmedTokensSnapshots","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastSnapshot","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lockPeriod","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"moonshotAlloc","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingBonesAlloc","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingFeesAlloc","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"search","type":"uint256"}],"name":"playersBalanceOnDay","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"playersSnapshotBalances","outputs":[{"name":"","type":"uint128"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"playersSnapshotDays","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"playersSnapshotsClaimed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pricePerShare","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalCakeBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"totalDepositSnapshots","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalShares","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];

const fomo = [{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"addBanana","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"minBanana","type":"uint256"}],"name":"addBunny","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"addFomoBanana","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"addNuts","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newFutureRoundsPercent","type":"uint256"},{"name":"newNutsPercent","type":"uint256"}],"name":"changeRewardPercents","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"endRound","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint128"},{"name":"newFomo","type":"address"}],"name":"moveFomoBanana","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"player","type":"address"},{"name":"amount","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"bytes"}],"name":"receiveApproval","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newInc","type":"uint256"}],"name":"reduceIncPerKey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"bananaVault","type":"address"}],"name":"setupBananaVault","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newKeys","type":"address"},{"name":"newKeysLP","type":"address"}],"name":"setupRound","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"setWeeksRewards","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"minNuts","type":"uint256"},{"name":"percentBurnt","type":"uint256"}],"name":"sweepNuts","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"minBNB","type":"uint256"},{"name":"minNuts","type":"uint256"}],"name":"sweepNutsLP","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[{"name":"stakingContract","type":"address"}],"name":"upgradeNutsStaking","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"bananaPrize","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentRoundNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"futureRoundsPercent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLatestBuys","outputs":[{"name":"","type":"address[]"},{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getPreviousWinners","outputs":[{"name":"","type":"address[]"},{"name":"","type":"uint256[]"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"incPerKey","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"keyPurchases","outputs":[{"name":"player","type":"address"},{"name":"keysBought","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"address"}],"name":"keysOwned","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxTimer","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nutsPercent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"bonesPrize","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingBananaAlloc","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingNutsAlloc","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"potTimer","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"previousBananaPrize","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"previousBonesPrize","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];

const uniswap = [{"constant":true,"inputs":[{"name":"amountOut","type":"uint256"},{"name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"name":"amounts","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amountOutMin","type":"uint256"},{"name":"path","type":"address[]"},{"name":"to","type":"address"},{"name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"name":"amounts","type":"uint256[]"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"amountIn","type":"uint256"},{"name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"name":"amounts","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amountOut","type":"uint256"},{"name":"path","type":"address[]"},{"name":"to","type":"address"},{"name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"name":"amounts","type":"uint256[]"}],"payable":true,"stateMutability":"payable","type":"function"}];

const erc20 = [{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}];

var provider;
var web3;
var account;
async function getData() {
    getMoonshots();
    if (typeof BinanceChain !== 'undefined' && typeof window.ethereum !== 'undefined') {
        return; // Dont connect if they have both wallets
    } else if (typeof BinanceChain !== 'undefined') {
        BinanceChain.on('accountsChanged', handleAccountsChanged);
        web3 = new Web3(BinanceChain);
    } else if (typeof window.ethereum !== 'undefined') {
        web3 = new Web3(window.ethereum);
    }
    setupContracts();
    updateData();
}

function setupContracts() {
    PANCAKESWAP_TWO.contract = web3.eth.contract(uniswap).at(PANCAKESWAP_TWO.address);

    WBNB.tokenContract = web3.eth.contract(erc20).at(WBNB.address);
    BUSD.tokenContract = web3.eth.contract(erc20).at(BUSD.address);
    CAKE.tokenContract = web3.eth.contract(erc20).at(CAKE.address);
    BANANA.tokenContract = web3.eth.contract(erc20).at(BANANA.address);
    BSW.tokenContract = web3.eth.contract(erc20).at(BSW.address);
    BONES.tokenContract = web3.eth.contract(erc20).at(BONES.address);

    FARM_FOMO.fomoContract = web3.eth.contract(fomo).at(FARM_FOMO.fomo);

    BONES_STAKING.farmContract = web3.eth.contract(staking).at(BONES_STAKING.farm);
    CAKE_VAULT.farmContract = web3.eth.contract(vault).at(CAKE_VAULT.farm);
    CAKE_VAULT.totalValue = "LOADING";

    BANANA_VAULT.farmContract = web3.eth.contract(vault).at(BANANA_VAULT.farm);
    BANANA_VAULT.totalValue = "LOADING";

    BISWAP_VAULT.farmContract = web3.eth.contract(vault).at(BISWAP_VAULT.farm);
    BISWAP_VAULT.totalValue = "LOADING";

    CAKE_VAULT_TWO.farmContract = web3.eth.contract(vault).at(CAKE_VAULT_TWO.farm);
    CAKE_VAULT_TWO.totalValue = "LOADING";
}


var latestMoonshots = [];
function getMoonshots() {
    $.get("/moonshots", function(data) {
        if (data) {
            latestMoonshots = data;
        }
        if (latestMoonshots.length == 0) {
            // display delay in fetching data?
        }
    });
    setTimeout(getMoonshots, 15000);
}

var loaded = false;
function updateData() {

    FARM_FOMO.fomoContract.potTimer((err, result) => {
        const now = new Date().getTime() / 1000;
        if (result < now) {
            $("#fomoCountdown").text("ENDED");
        } else {
            $("#fomoCountdown").text((result - now).toHHMMSS());
        }
    });

    BONES.tokenContract.totalSupply((err, totalBones) => {
        var bones = totalBones / 1000;
        var path = [BONES.address, WBNB.address, BUSD.address];
        PANCAKESWAP_TWO.contract.getAmountsOut(bones, path, (err, result) => {
            const busdValue = web3.fromWei(result[2] * 1000, "ether");
            $("#totalBones").text("total supply: " + Math.floor(web3.fromWei(totalBones, "ether") * 100) / 100 + " BONES");
            $("#bonesMarketcap").text("BONES marketcap: $" + Math.floor(busdValue * 100) / 100);
        });
    });

    BANANA_VAULT.bonesValue = null;
    BISWAP_VAULT.bonesValue = null;
    CAKE_VAULT_TWO.bonesValue = null;

    BONES_STAKING.farmContract.totalDeposits((err, result) => {
        BONES_STAKING.totalDeposits = result;
        updateBonesAPR();
    });

    CAKE_VAULT_TWO.farmContract.totalCakeBalance((err, result) => {
        CAKE_VAULT_TWO.totalDeposits = result;
        $("#totalCakeInVault").text("total in vault: " + Math.floor(web3.fromWei(result, "ether") * 100) / 100 + " CAKE");

        var cake = result / 1000;
        var path = [CAKE.address, WBNB.address, BONES.address];
        PANCAKESWAP_TWO.contract.getAmountsOut(cake, path, (err, result) => {
            CAKE_VAULT_TWO.bonesValue = web3.fromWei(result[2] * 1000, "ether");
            const yearlyPayout = 0;
            const apr = Math.floor(((yearlyPayout / CAKE_VAULT_TWO.bonesValue)) * 1000) / 10;
            $("#cakeVaultAPY").text(apr + "%");
            $("#cakeVaultAPY2").text(Math.floor(apr * 100) / 100 + "% apr BONES");
            $("#cakeVaultAPY3").text(convertToApy(apr + 4 + 2) + "%");
            $("#cakeVaultAPY4").text(convertToApy(apr + 4 + 4) + "%");
            $("#cakeVaultAPY5").text(convertToApy(apr + 4 + 8) + "%");
            updateBonesAPR();
        });
    });

    BANANA_VAULT.farmContract.totalCakeBalance((err, result) => {
        BANANA_VAULT.totalDeposits = result;
        $("#totalBananaInVault").text("total in vault: " + Math.floor(web3.fromWei(result, "ether") * 100) / 100 + " BANANA");

        var banana = result / 1000;
        var path = [BANANA.address, WBNB.address, BONES.address];
        PANCAKESWAP_TWO.contract.getAmountsOut(banana, path, (err, result) => {
            BANANA_VAULT.bonesValue = web3.fromWei(result[2] * 1000, "ether");
            const yearlyPayout = 0;
            const apr = Math.floor(((yearlyPayout / BANANA_VAULT.bonesValue)) * 1000) / 10;
            $("#bananaVaultAPY").text(apr + "%");
            $("#bananaVaultAPY2").text(Math.floor(apr * 100) / 100 + "% apr BONES");
            $("#bananaVaultAPY3").text(convertToApy(apr + 20 + 10) + "%");
            $("#bananaVaultAPY4").text(convertToApy(apr + 20 + 20) + "%");
            $("#bananaVaultAPY5").text(convertToApy(apr + 20 + 40) + "%");
            updateBonesAPR();
        });
    });

    BISWAP_VAULT.farmContract.totalCakeBalance((err, result) => {
        BISWAP_VAULT.totalDeposits = result;
        $("#totalBiswapInVault").text("total in vault: " + Math.floor(web3.fromWei(result, "ether") * 100) / 100 + " BISWAP");

        var banana = result / 1000;
        var path = [BSW.address, WBNB.address, BONES.address];
        PANCAKESWAP_TWO.contract.getAmountsOut(banana, path, (err, result) => {
            BISWAP_VAULT.bonesValue = web3.fromWei(result[2] * 1000, "ether");
            const yearlyPayout = 0;
            const apr = Math.floor(((yearlyPayout / BISWAP_VAULT.bonesValue)) * 1000) / 10;
            $("#biswapVaultAPY").text(apr + "%");
            $("#biswapVaultAPY2").text(Math.floor(apr * 100) / 100 + "% apr BONES");
            $("#biswapVaultAPY3").text(convertToApy(apr + 10 + 5) + "%");
            $("#biswapVaultAPY4").text(convertToApy(apr + 10 + 10) + "%");
            $("#biswapVaultAPY5").text(convertToApy(apr + 10 + 20) + "%");
            updateBonesAPR();
        });
    });

    function updateBonesAPR() {
        if (BONES_STAKING.totalDeposits != null && CAKE_VAULT_TWO.bonesValue != null && BANANA_VAULT.bonesValue != null && BISWAP_VAULT.bonesValue != null) {
            loaded = true;

            const bonesApr = (((20 * 0.05) * CAKE_VAULT_TWO.bonesValue) + ((0 * 0.05) * BANANA_VAULT.bonesValue) + ((20 * 0.05) * BISWAP_VAULT.bonesValue)) / web3.fromWei(BONES_STAKING.totalDeposits, "ether");
            $("#bonesAPR").text(Math.floor(bonesApr * 100) / 100 + "%");

            const boostApr = (10000 * 30 * 400) / web3.fromWei(BONES_STAKING.totalDeposits, "ether"); // first boost 30 bnb over 3 months (june-sept)
            $("#boostAPR").text(Math.floor((bonesApr + boostApr) * 100) / 100 + "%");
        }
    }

    function convertToApy(apr) {
        const daily = Math.floor((apr / 365) * 100) / 100;
        var apy = Math.floor((Math.pow(1 + (daily / 100), 365) - 1) * 1000) / 10;
        if (apy > 10000) {
            apy = Math.floor(apy / 100) / 10 + "K";
        }
        return apy;
    }

    updateAccountData();
    setTimeout(updateData, 2200);
}

function updateAccountData() {
    if (account != null) {

        BONES.tokenContract.balanceOf(account, (err, result) => {
            BONES.usersBalance = result;
            $("#usersBones").text(Math.floor(web3.fromWei(result, "ether") * 100) / 100 + " BONES");
        });

        BONES_STAKING.farmContract.balances(account, (err, result) => {
            BONES_STAKING.usersDeposit = result;
            $("#usersStakedBones").text(Math.floor(web3.fromWei(result, "ether") * 100000) / 100000 + " BONES");
            $("#bonesStakedText").show().html("your deposit: " + Math.floor(web3.fromWei(result, "ether") * 100000) / 100000 + " BONES");
            updateBonesStakingUI();
        });

        BONES_STAKING.farmContract.dividendsOf(account, (err, result) => {
            BONES_STAKING.usersEarnings = result;
            updateBonesStakingUI();
        });

        CAKE.tokenContract.balanceOf(account, (err, result) => {
            CAKE.usersBalance = result;
            $("#usersCake").text(Math.floor(web3.fromWei(result, "ether") * 100) / 100 + " CAKE");
        });

        CAKE_VAULT.farmContract.cakeBalance(account, (err, result) => {
            if (result > 1000000000000000) {
                $("#oldCakeVaultMessage").show();
                $("#oldCakeVaultAmount").text(Math.floor(web3.fromWei(result, "ether") * 100) / 100 + " CAKE");
                $("#withdrawOldCake").off('click').click(function(){
                    CAKE_VAULT.farmContract.cashout(result, {from: account}, function (error, result) {

                    });
                });
            }
        });

        CAKE_VAULT_TWO.farmContract.cakeBalance(account, (err, result) => {
            CAKE_VAULT_TWO.usersDeposit = result;
            $("#usersVaultCake").text(Math.floor(web3.fromWei(result, "ether") * 1000000) / 1000000 + " CAKE");
            if (err == null) {
                $("#cakeInVaultText").show().html("your deposit: " + Math.floor(web3.fromWei(result, "ether") * 1000000) / 1000000 + " CAKE");
            }
        });

        BANANA.tokenContract.balanceOf(account, (err, result) => {
            BANANA.usersBalance = result;
            $("#usersBanana").text(Math.floor(web3.fromWei(result, "ether") * 100) / 100 + " BANANA");
        });

        BANANA_VAULT.farmContract.cakeBalance(account, (err, result) => {
            BANANA_VAULT.usersDeposit = result;
            $("#usersVaultBanana").text(Math.floor(web3.fromWei(result, "ether") * 1000000) / 1000000 + " BANANA");
            if (err == null) {
                $("#bananaInVaultText").show().html("your deposit: " + Math.floor(web3.fromWei(result, "ether") * 1000000) / 1000000 + " BANANA");
            }
        });

        BSW.tokenContract.balanceOf(account, (err, result) => {
            BSW.usersBalance = result;
            $("#usersBiswap").text(Math.floor(web3.fromWei(result, "ether") * 100) / 100 + " BISWAP");
        });

        BISWAP_VAULT.farmContract.cakeBalance(account, (err, result) => {
            BISWAP_VAULT.usersDeposit = result;
            $("#usersVaultBiswap").text(Math.floor(web3.fromWei(result, "ether") * 1000000) / 1000000 + " BISWAP");
            if (err == null) {
                $("#biswapInVaultText").show().html("your deposit: " + Math.floor(web3.fromWei(result, "ether") * 1000000) / 1000000 + " BISWAP");
            }
        });

        loadMoonshots();
    } else {
        loadMoonshots(BONES.address);
    }
}


function loadMoonshots(stubAccount) {
    const data = {};
    const data2 = {};
    const data3 = {};
    const data4 = {};
    if (stubAccount != null) {
        data["from"] = stubAccount;
        data2["from"] = stubAccount;
        data3["from"] = stubAccount;
        data4["from"] = stubAccount;
    } else {
        data["from"] = account;
        data2["from"] = account;
        data3["from"] = account;
        data4["from"] = account;
    }

    var bananaYields;
    var bananaLength;
    BANANA_VAULT.farmContract.epoch(data, (err, length) => {
        bananaLength = length;
        BANANA_VAULT.farmContract.availableYields(0, 46, data, (err, result) => {
            bananaYields = result;
            callbackMoonshotsYield();
        });
    });

    var cakeYields;
    CAKE_VAULT.farmContract.availableYields(0, 46, data2, (err, result) => {
        cakeYields = result;
        callbackMoonshotsYield();
    });

    var biswapYields;
    var biswapLength;
    BISWAP_VAULT.farmContract.epoch(data3, (err, length) => {
        biswapLength = length;
        BISWAP_VAULT.farmContract.availableYields(0, 46, data3, (err, result) => {
            biswapYields = result;
            callbackMoonshotsYield();
        });
    });

    var cakeTwoYields;
    var cakeTwoLength;
    CAKE_VAULT_TWO.farmContract.epoch(data4, (err, length) => {
        cakeTwoLength = length;
        CAKE_VAULT_TWO.farmContract.availableYields(0, 46, data4, (err, result) => {
            cakeTwoYields = result;
            callbackMoonshotsYield();
        });
    });

    function callbackMoonshotsYield() {
        if (cakeYields != null && biswapYields != null && cakeTwoYields != null && bananaLength != null && biswapLength != null && cakeTwoLength != null) {
            loadMoonshotsYield(stubAccount, cakeYields, bananaYields, biswapYields, cakeTwoYields, bananaLength, biswapLength, cakeTwoLength);
        }
    }
}


var pendingFarm = "LOADING";
function loadMoonshotsYield(stubAccount, cakeYields, bananaYields, biswapYields, cakeTwoYields, bananaLength, biswapLength, cakeTwoLength) {

    for (var i = 0; i < cakeYields[0].length; i++) {
        if (i == 46) { // stop after 60+30 days
            break;
        }
        var addressVar = cakeYields[0][i];
        const cakeYield = cakeYields[1][i];

        var claimed = cakeYields[2][i];
        var cakeClaimed = claimed;
        var bananaClaimed = false;
        var biswapClaimed = false;
        var cakeClaimed2 = false;

        var playersYield = cakeYield;
        var bananaYield = 0;
        var bananaIndex = 0;
        var biswapIndex = 0;
        var cakeIndex2 = 0;

        for (var j = 0; j <  bananaYields[0].length; j++) {
            if (addressVar == bananaYields[0][j]) {
                bananaIndex = j;
                bananaYield = bananaYields[1][j];
                playersYield = playersYield.plus(bananaYield);

                if (bananaYield > 0) {
                    bananaClaimed = bananaYields[2][j];
                    if (claimed) {
                        claimed = bananaClaimed;
                    }
                }
            }
        }

        var biswapYield = 0;
        for (var j = 0; j < biswapYields[0].length; j++) {
            if (addressVar == biswapYields[0][j]) {
                biswapIndex = j;
                biswapYield = biswapYields[1][j];
                playersYield = playersYield.plus(biswapYield);

                if (biswapYield > 0) {
                    biswapClaimed = biswapYields[2][j];
                    if (claimed) {
                        claimed = biswapClaimed;
                    }
                }
            }
        }

        var cakeYield2 = 0;
        for (var j = 0; j < cakeTwoYields[0].length; j++) {
            if (addressVar == cakeTwoYields[0][j]) {
                cakeIndex2 = j;
                cakeYield2 = cakeTwoYields[1][j];
                playersYield = playersYield.plus(cakeYield2);

                if (cakeYield2 > 0) {
                    cakeClaimed2 = cakeTwoYields[2][j];
                    if (claimed) {
                        claimed = cakeClaimed2;
                    }
                }
            }
        }

        for (var j = 0; j < latestMoonshots.length; j++) {
            if (addressVar == latestMoonshots[j].address) {

                var symbolVar = latestMoonshots[j].symbol;
                var name = latestMoonshots[j].name;
                var bscscan = "<a href='https://bscscan.com/token/" + addressVar + "' target='_blank'><img height='16px' src='/assets/img/bscscan.png' style='opacity: 0.9; margin-left: 1px;' /></a>";
                if (latestMoonshots[j].logo == "https://moonshots.farm/assets/img/bones.png") {
                    symbolVar = "BONES";
                    name = "bones";
                    addressVar = BONES.address;
                    bscscan = "<a href='https://bscscan.com/token/0x08426874d46f90e5e527604fa5e3e30486770eb3' target='_blank'><img height='16px' src='/assets/img/bscscan.png' style='opacity: 0.9; margin-left: 1px;' /></a>";
                }
                const address = addressVar;
                const symbol = symbolVar;

                var coingecko = "";
                if (latestMoonshots[j].coingecko != null) {
                    coingecko = "<a href='https://www.coingecko.com/en/coins/" + latestMoonshots[j].coingecko + "' target='_blank'><img height='16px' src='/assets/img/coingecko.png' style='opacity: 0.9;' /></a>";
                }
                var telegram = "";
                if (latestMoonshots[j].telegram != null) {
                    telegram = "<a href='https://t.me/" + latestMoonshots[j].telegram + "' target='_blank'><img height='16px' src='/assets/img/telegram.svg' style='opacity: 0.9;' /></a>";
                }

                const decimals = latestMoonshots[j].decimals;
                var amount = Math.floor((playersYield / (10 ** decimals)) * 10000) / 10000;
                if (amount >= 1000) {
                    amount = Math.floor(amount);
                } else if (amount >= 10) {
                    amount = Math.floor(amount * 100) / 100;
                }

                var farmed = "you farmed: " + amount + " " + symbol;
                var claimButton = "<a onclick='showModal(" + i + ", " + (bananaLength - bananaIndex) + ", " + bananaYield + ", " + bananaClaimed + ", " + (biswapLength - biswapIndex) + ", " + biswapYield + ", " + biswapClaimed + ", " + (cakeTwoLength - cakeIndex2) + ", " + cakeYield2 + ", " + cakeClaimed2 + ")' class='btn btn-primary mt-1' style='font-size: 11px; padding: 0.2rem 0.6rem; border-radius: 0.3rem; opacity: 0.8;'>claim tokens</a>";
                const timeNow = Math.floor(new Date().getTime() / 1000);
                const tillUnlock = new Number(latestMoonshots[j].timestamp) + (86400 * 62) + (3600 * 2) - timeNow;
                if (claimed) {
                    claimButton = "<a class='btn btn-primary mt-1' style='font-size: 11px; padding: 0.2rem 0.6rem; border-radius: 0.3rem; opacity: 0.3;'>already claimed</a>";
                } else if (tillUnlock > 0) {
                    claimButton = "<a onclick='showModal(" + i + ", " + (bananaLength - bananaIndex) + ", " + bananaYield + ", " + bananaClaimed + ", " + (biswapLength - biswapIndex) + ", " + biswapYield + ", " + biswapClaimed + ", " + (cakeTwoLength - cakeIndex2) + ", " + cakeYield2 + ", " + cakeClaimed2 + ")' class='btn btn-primary mt-1' style='font-size: 11px; padding: 0.2rem 0.6rem; border-radius: 0.3rem; opacity: 0.4;'>" + tillUnlock.toDDHHMMSS() + "</a>";
                }

                var price = "LOADING";
                var value = "";
                const moonshotPrice = latestMoonshots[j].price;
                if (moonshotPrice != null) {
                    price = moonshotPrice;
                    var totalValue = (moonshotPrice.replace("$", "") * amount).toFixed(2);
                    if (totalValue < 0.001) {
                        totalValue = "0.00";
                    }
                    if (amount > 0) {
                        value = "(~$" + totalValue + ")";
                    }
                }

                var farmingTo = "";
                const moonshotDate = new Date((new Number(latestMoonshots[j].timestamp) + 172800) * 1000);
                const month = ["jan","feb","mar","apr","may","june","july","aug","sept","oct","nov","dec"][moonshotDate.getMonth()];
                const day = moonshotDate.getDate();
                const date = day + nth(day) + " " + month;

                if (i == 0) {
                  	$('#latestMoonshots tbody').empty();
                  
                    farmingTo = "<div style='font-size:12px;'>farming till</div>";
                    claimButton = "";
                    farmed = "est. farm: " + pendingFarm + " " + symbol;
                    if (loaded && ((CAKE_VAULT.usersDeposit == 0 && BANANA_VAULT.usersDeposit == 0 && BISWAP_VAULT.usersDeposit == 0 && CAKE_VAULT_TWO.usersDeposit == 0) || stubAccount)) {
                        farmed = "your est. farm: 0 " + symbol;
                    } else {
                        value = "(~$" + CAKE_VAULT_TWO.totalValue + ")";
                        CAKE_VAULT.estimatedReward = null;
                        BANANA_VAULT.estimatedReward = null;
                        BISWAP_VAULT.estimatedReward = null;
                        CAKE_VAULT_TWO.estimatedReward = null;
                        updateEstimate(moonshotPrice, symbol, address, decimals);
                    }
                }

                $("#latestMoonshots").append("<tr class='table-border'>" +
                    "<td class='tc text-gray' style='width: 28%; padding-top: 12px; padding-bottom: 12px;'>" + farmingTo + date + "</td>" +
                    "<td class='tc' style='width: 44%; padding-top: 12px; padding-bottom: 12px;'>" +
                        "<div class='font-weight-normal text-gray' style='font-size: 13px; line-height: 19px; margin-bottom: 2px;'><img height='18px' src='" + latestMoonshots[j].logo + "' style='opacity: 0.9;' /> <span class='trimmedName'>" + name + " -</span> " + bscscan + " " + coingecko + " " + telegram + " <span class='trimmedName' style='font-size: 11px'> " + price + "</span></div>" +
                        "<div id='amountFarmed" + i + "' class='font-weight-normal text-gray' style='font-size: 11px;'>" + farmed + " " + value + "</div>" +
                    "</td>" +
                    "<td class='tc text-gray' style='width: 28%; padding-top: 12px; padding-bottom: 12px;'>" + claimButton + "</td>" +
                "</tr>");
                break;
            }
        }
    }
}

function updateEstimate(moonshotPrice, symbol, address, decimals) {
    if (CAKE_VAULT_TWO.usersDeposit == 0) {
        CAKE_VAULT_TWO.estimatedReward = 0;
    } else {
        var moonshotSlice = CAKE_VAULT_TWO.usersDeposit * 0.00007; // ~0.007% per 2 days
        var path = [CAKE.address, WBNB.address, address];
        PANCAKESWAP_TWO.contract.getAmountsOut(moonshotSlice / 1000, path, (err, amountOut) => {
            CAKE_VAULT_TWO.estimatedReward = amountOut[2] / (10 ** decimals);
            if (address == BONES.address) {
                const bonusBones = (20 * CAKE_VAULT_TWO.usersDeposit) / CAKE_VAULT_TWO.totalDeposits;
                CAKE_VAULT_TWO.estimatedReward += bonusBones;
            }
            updateEstimateCallback();
        });
    }

    if (BANANA_VAULT.usersDeposit == 0) {
        BANANA_VAULT.estimatedReward = 0;
    } else {
        var moonshotSlice = BANANA_VAULT.usersDeposit * 0.0012; // ~0.12% per 2 days
        var path = [BANANA.address, WBNB.address, address];
        PANCAKESWAP_TWO.contract.getAmountsOut(moonshotSlice / 1000, path, (err, amountOut) => {
            BANANA_VAULT.estimatedReward = amountOut[2] / (10 ** decimals);
            if (address == BONES.address) {
                const bonusBones = (15 * BANANA_VAULT.usersDeposit) / BANANA_VAULT.totalDeposits;
                BANANA_VAULT.estimatedReward += bonusBones;
            }
            updateEstimateCallback();
        });
    }

    if (BISWAP_VAULT.usersDeposit == 0) {
        BISWAP_VAULT.estimatedReward = 0;
    } else {
        var moonshotSlice = BISWAP_VAULT.usersDeposit * 0.0012; // ~0.12% per 2 days
        var path = [BSW.address, WBNB.address, address];
        PANCAKESWAP_TWO.contract.getAmountsOut(moonshotSlice / 1000, path, (err, amountOut) => {
            BISWAP_VAULT.estimatedReward = amountOut[2] / (10 ** decimals);
            if (address == BONES.address) {
                const bonusBones = (5 * BISWAP_VAULT.usersDeposit) / BISWAP_VAULT.totalDeposits;
                BISWAP_VAULT.estimatedReward += bonusBones;
            }
            updateEstimateCallback();
        });
    }

    function updateEstimateCallback() {
        if (CAKE_VAULT_TWO.estimatedReward == null || BANANA_VAULT.estimatedReward == null || BISWAP_VAULT.estimatedReward == null) {
            return;
        }

        const totalEstimatedReward = CAKE_VAULT_TWO.estimatedReward + BANANA_VAULT.estimatedReward + BISWAP_VAULT.estimatedReward;
        pendingFarm = Math.floor(totalEstimatedReward * 10000000) / 10000;
        if (pendingFarm >= 1000) {
            pendingFarm = Math.floor(pendingFarm);
        } else if (pendingFarm >= 10) {
            pendingFarm = Math.floor(pendingFarm * 100) / 100;
        }

        var totalValue = (moonshotPrice.replace("$", "") * pendingFarm).toFixed(2);
        if (totalValue < 0.001) {
            totalValue = "0.00";
        }
        CAKE_VAULT_TWO.totalValue = totalValue;
        $("#amountFarmed0").text("est. farm: " + pendingFarm + " " + symbol + " (~$" + totalValue + ")");
    }
}


function updateAccountUI() {
    if (account != null) {
        $("#stakeBones").text("stake").removeAttr('onclick').css("transition", "unset").css("width", "47%").off('click').attr('data-toggle','modal').attr('data-target', '#stakeBonesModal');
        $("#unstakeBones").text("unstake").removeAttr('onclick').css("display", "inline-block").off('click').attr('data-toggle','modal').attr('data-target', '#unstakeBonesModal');

        $("#stakeCakeVault").text("stake").removeAttr('onclick').css("transition", "unset").css("width", "47%").off('click').attr('data-toggle','modal').attr('data-target', '#vaultCakeModal');
        $("#unstakeCakeVault").text("unstake").removeAttr('onclick').css("display", "inline-block").off('click').attr('data-toggle','modal').attr('data-target', '#unvaultCakeModal');

        $("#stakeBananaVault").text("stake").removeAttr('onclick').css("transition", "unset").css("width", "47%").off('click').attr('data-toggle','modal').attr('data-target', '#vaultBananaModal');
        $("#unstakeBananaVault").text("unstake").removeAttr('onclick').css("display", "inline-block").off('click').attr('data-toggle','modal').attr('data-target', '#unvaultBananaModal');

        $("#stakeBiswapVault").text("stake").removeAttr('onclick').css("transition", "unset").css("width", "47%").off('click').attr('data-toggle','modal').attr('data-target', '#vaultBiswapModal');
        $("#unstakeBiswapVault").text("unstake").removeAttr('onclick').css("display", "inline-block").off('click').attr('data-toggle','modal').attr('data-target', '#unvaultBiswapModal');

        CAKE.tokenContract.allowance(account, CAKE_VAULT_TWO.farm, (err, result) => {
            const amount = $("#vaultCakeAmount").val();
            const amountStaking = web3.toWei(amount, "ether");
            if (result.lt(amountStaking)) {
                $("#vaultCakeConfirm").text("approve cake");
            } else {
                $("#vaultCakeConfirm").text("stake cake");
            }
        });

        BANANA.tokenContract.allowance(account, BANANA_VAULT.farm, (err, result) => {
            const amount = $("#vaultBananaAmount").val();
            const amountStaking = web3.toWei(amount, "ether");
            if (result.lt(amountStaking)) {
                $("#vaultBananaConfirm").text("approve banana");
            } else {
                $("#vaultBananaConfirm").text("stake banana");
            }
        });

        BSW.tokenContract.allowance(account, BISWAP_VAULT.farm, (err, result) => {
            const amount = $("#vaultBiswapAmount").val();
            const amountStaking = web3.toWei(amount, "ether");
            if (result.lt(amountStaking)) {
                $("#vaultBiswapConfirm").text("approve biswap");
            } else {
                $("#vaultBiswapConfirm").text("stake biswap");
            }
        });
    }
}


function updateBonesStakingUI() {
    if (BONES_STAKING.usersDeposit > 0 && BONES_STAKING.usersEarnings != null) {
        $("#bonesIntroText").css("display", "none");
        $("#bonesStakingText").css("display", "block").html("your earnings: " + Math.floor(web3.fromWei(BONES_STAKING.usersEarnings, "ether") * 1000000) / 1000000 + " BNB");
        $("#bonesCompounding").css("display", "block");
    }
}


var timer;
function showModal(j, bananaIndex, bananaYield, bananaClaimed, biswapIndex, biswapYield, biswapClaimed, cakeIndex2, cakeYield2, cakeClaimed2) {
    const timestamp = latestMoonshots[j].timestamp;
    updateCountdown();
    $("#claimTokensModal").modal("show");
    clearInterval(timer);
    timer = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        $("#cakeYieldText").text("");
        $("#cakeYield2Text").text("");
        $("#claimCakeTokens2Button").hide();
        $("#bananaYieldText").text("");
        $("#claimBananaTokensButton").hide();
        $("#biswapYieldText").text("");
        $("#claimBiswapTokensButton").hide();

        const timeNow = Math.floor(new Date().getTime() / 1000);
        const tillUnlock = new Number(timestamp) + (86400 * 62) + (3600 * 2) - timeNow;
        if (tillUnlock > 0) {
            $("#modelText1").text("in order to maximize 1000x moonshot possibility, rewards are locked for 60 days to let them grow their potential!");
            $("#modelText2").html("note: after unlocking you have 30 days to claim before it expires (unclaimed tokens are recycled to extra BONES apr on the farm)");
            $("#claimTokensButton").css("opacity", "0.4").off('click').text(tillUnlock.toDDHHMMSS());
        } else {

            $("#modelText1").text("these farmed tokens have now unlocked, so you can claim yours below! farmed rewards expire 30 days after unlock.");
            $("#modelText2").html("(unclaimed tokens are recycled into extra BONES apr on the farm)");

            if (latestMoonshots[j].name == "shibarrow" || latestMoonshots[j].name == "fantasygirl") {
                $("#modelText2").html("(unclaimed tokens are recycled into extra BONES apr on the farm)<br/><br/><u>please note:</u> <b>" + latestMoonshots[j].name + "</b> migrated their token to a new contract so below you are claiming their old token but you will also receive the new " + latestMoonshots[j].symbol + " tokens in future after you claim!");
            }

            if (latestMoonshots[j].name == "bones") {
                $("#modelText2").html("(unclaimed tokens are recycled into extra BONES apr on the farm)<br/><br/>note: claiming bones deposits them into the BONES farm for you!");
            }

            if (cakeYield2 > 0) {
                const decimals = latestMoonshots[j].decimals;
                const cakeAmount2 = Math.floor((cakeYield2 / (10 ** decimals)) * 100) / 100;
                $("#cakeYieldText").text("cake farm yield to claim: " + cakeAmount2 + " " + latestMoonshots[j].symbol);
            }

            if (bananaYield > 0) {
                const decimals = latestMoonshots[j].decimals;
                const cakeAmount2 = Math.floor((cakeYield2 / (10 ** decimals)) * 100) / 100;
                const bananaAmount = Math.floor((bananaYield / (10 ** decimals)) * 100) / 100;
                $("#cakeYieldText").text("cake farm yield to claim: " + cakeAmount2 + " " + latestMoonshots[j].symbol);
                $("#bananaYieldText").text("banana farm yield to claim: " + bananaAmount + " " + latestMoonshots[j].symbol);

                if (bananaClaimed == true) {
                    $("#claimBananaTokensButton").show().css("opacity", "0.4").off('click').text("already claimed");
                } else {
                    $("#claimBananaTokensButton").show().css("opacity", "1").off('click').text("claim tokens").click(function(){
                        BANANA_VAULT.farmContract.claimYield(bananaIndex, {from: account}, function (error, result) {
                            if (!error) {
                                //$('#claimTokensModal').modal('hide');
                            }
                        });
                    });
                }
            }

            if (biswapYield > 0) {
                const decimals = latestMoonshots[j].decimals;
                const cakeAmount2 = Math.floor((cakeYield2 / (10 ** decimals)) * 100) / 100;
                const biswapAmount = Math.floor((biswapYield / (10 ** decimals)) * 100) / 100;
                $("#cakeYieldText").text("cake farm yield to claim: " + cakeAmount2 + " " + latestMoonshots[j].symbol);
                $("#biswapYieldText").text("biswap farm yield to claim: " + biswapAmount + " " + latestMoonshots[j].symbol);

                if (biswapClaimed == true) {
                    $("#claimBiswapTokensButton").show().css("opacity", "0.4").off('click').text("already claimed");
                } else {
                    $("#claimBiswapTokensButton").show().css("opacity", "1").off('click').text("claim tokens").click(function(){
                        BISWAP_VAULT.farmContract.claimYield(biswapIndex, {from: account}, function (error, result) {
                            if (!error) {
                                //$('#claimTokensModal').modal('hide');
                            }
                        });
                    });
                }
            }

            if (cakeClaimed2 == true) {
                $("#claimTokensButton").css("opacity", "0.4").off('click').text("already claimed");
            } else if (cakeYield2 == 0) {
                $("#claimTokensButton").css("opacity", "0.4").off('click').text("claim tokens");
            } else {
                $("#claimTokensButton").css("opacity", "1").off('click').text("claim tokens").click(function(){
                    CAKE_VAULT_TWO.farmContract.claimYield(cakeIndex2, {from: account}, function (error, result) {
                        if (!error) {
                            $('#claimTokensModal').modal('hide');
                        }
                    });
                });
            }
        }
    }

}



function vaultCake() {
    const amount = $("#vaultCakeAmount").val();
    if (amount > 0) {
        CAKE.tokenContract.allowance(account, CAKE_VAULT_TWO.farm, (err, result) => {
            const amountStaking = web3.toWei(amount, "ether");
            if (result.lt(amountStaking)) {
                CAKE.tokenContract.approve(CAKE_VAULT_TWO.farm, "10000000000000000000000000000", {from: account, gas: 100000}, (err, result) => {
                    CAKE_VAULT_TWO.farmContract.deposit(web3.toWei(amount, "ether"), {from: account, gas: 580000}, function (error, result) {
                        if (!error) {
                            $('#vaultCakeModal').modal('hide');
                        }
                        console.log(result);
                    });
                });
            } else {
                CAKE_VAULT_TWO.farmContract.deposit(web3.toWei(amount, "ether"), {from: account, gas: 580000}, function (error, result) {
                    if (!error) {
                        $('#vaultCakeModal').modal('hide');
                    }
                    console.log(result);
                });
            }
        });
    }
}

function vaultMaxCake() {
    $("#vaultCakeAmount").val(Math.floor(web3.fromWei(CAKE.usersBalance, "ether") * 100000) / 100000);
}

function unvaultCake() {
    var amount = $("#unvaultCakeAmount").val();
    if (amount > 0 && CAKE_VAULT_TWO.usersDeposit > 0) {
        CAKE_VAULT_TWO.farmContract.cashout(web3.toWei(amount, "ether"), {from: account, gas: 560000}, function (error, result) {
            if (!error) {
                $('#unvaultCakeModal').modal('hide');
            }
            console.log(result);
        });
    }
}

function unvaultMaxCake() {
    $("#unvaultCakeAmount").val(Math.floor(web3.fromWei(CAKE_VAULT_TWO.usersDeposit, "ether") * 99999) / 100000);
}



function vaultBanana() {
    const amount = $("#vaultBananaAmount").val();
    if (amount > 0) {
        BANANA.tokenContract.allowance(account, BANANA_VAULT.farm, (err, result) => {
            const amountStaking = web3.toWei(amount, "ether");
            if (result.lt(amountStaking)) {
                BANANA.tokenContract.approve(BANANA_VAULT.farm, "10000000000000000000000000000", {from: account, gas: 100000}, (err, result) => {
                    BANANA_VAULT.farmContract.deposit(web3.toWei(amount, "ether"), {from: account, gas: 480000}, function (error, result) {
                        if (!error) {
                            $('#vaultBananaModal').modal('hide');
                        }
                        console.log(result);
                    });
                });
            } else {
                BANANA_VAULT.farmContract.deposit(web3.toWei(amount, "ether"), {from: account, gas: 480000}, function (error, result) {
                    if (!error) {
                        $('#vaultBananaModal').modal('hide');
                    }
                    console.log(result);
                });
            }
        });
    }
}

function vaultMaxBanana() {
    $("#vaultBananaAmount").val(Math.floor(web3.fromWei(BANANA.usersBalance, "ether") * 100000) / 100000);
}

function unvaultBanana() {
    var amount = $("#unvaultBananaAmount").val();
    if (amount > 0 && BANANA_VAULT.usersDeposit > 0) {
        BANANA_VAULT.farmContract.cashout(web3.toWei(amount, "ether"), {from: account, gas: 420000}, function (error, result) {
            if (!error) {
                $('#unvaultBananaModal').modal('hide');
            }
            console.log(result);
        });
    }
}

function unvaultMaxBanana() {
    $("#unvaultBananaAmount").val(Math.floor(web3.fromWei(BANANA_VAULT.usersDeposit, "ether") * 100000) / 100000);
}



function vaultBiswap() {
    const amount = $("#vaultBiswapAmount").val();
    if (amount > 0) {
        BSW.tokenContract.allowance(account, BISWAP_VAULT.farm, (err, result) => {
            const amountStaking = web3.toWei(amount, "ether");
            if (result.lt(amountStaking)) {
                BSW.tokenContract.approve(BISWAP_VAULT.farm, "10000000000000000000000000000", {from: account, gas: 100000}, (err, result) => {
                    BISWAP_VAULT.farmContract.deposit(web3.toWei(amount, "ether"), {from: account, gas: 480000}, function (error, result) {
                        if (!error) {
                            $('#vaultBiswapModal').modal('hide');
                        }
                        console.log(result);
                    });
                });
            } else {
                BISWAP_VAULT.farmContract.deposit(web3.toWei(amount, "ether"), {from: account, gas: 480000}, function (error, result) {
                    if (!error) {
                        $('#vaultBiswapModal').modal('hide');
                    }
                    console.log(result);
                });
            }
        });
    }
}

function vaultMaxBiswap() {
    $("#vaultBiswapAmount").val(Math.floor(web3.fromWei(BSW.usersBalance, "ether") * 100000) / 100000);
}

function unvaultBiswap() {
    var amount = $("#unvaultBiswapAmount").val();
    if (amount > 0 && BISWAP_VAULT.usersDeposit > 0) {
        BISWAP_VAULT.farmContract.cashout(web3.toWei(amount, "ether"), {from: account, gas: 420000}, function (error, result) {
            if (!error) {
                $('#unvaultBiswapModal').modal('hide');
            }
            console.log(result);
        });
    }
}

function unvaultMaxBiswap() {
    $("#unvaultBiswapAmount").val(Math.floor(web3.fromWei(BISWAP_VAULT.usersDeposit, "ether") * 100000) / 100000);
}




function stakeBones() {
    const amount = $("#stakeBonesAmount").val();
    if (amount > 0) {
        BONES.tokenContract.approveAndCall(BONES_STAKING.farm, web3.toWei(amount, "ether"), [], {from: account}, function (error, result) {
            if (!error) {
                $('#stakeBonesModal').modal('hide');
            }
            console.log(result);
        });
    }
}

function stakeMaxBones() {
    $("#stakeBonesAmount").val(Math.floor(web3.fromWei(BONES.usersBalance, "ether") * 10000) / 10000);
}

function unstakeBones() {
    const amount = $("#unstakeBonesAmount").val();
    if (amount > 0) {
        BONES_STAKING.farmContract.cashout(web3.toWei(amount, "ether"), {from: account}, function (error, result) {
            if (!error) {
                $('#unstakeBonesModal').modal('hide');
            }
            console.log(result);
        });
    }
}

function unstakeMaxBones() {
    $("#unstakeBonesAmount").val(Math.floor(web3.fromWei(BONES_STAKING.usersDeposit, "ether") * 10000) / 10000);
}

function compoundBones() {
    const path = [WBNB.address, BONES.address];
    PANCAKESWAP_TWO.contract.getAmountsOut(BONES_STAKING.usersEarnings, path, (err, result) => {
        BONES_STAKING.farmContract.depositYield(result[1] * 0.9, {from: account}, function (error, result) {
            if (!error) {
                $('#compoundBonesModal').modal('hide');
            }
            console.log(result);
        });
    });
}

function withdrawBones() {
    BONES_STAKING.farmContract.claimYield({from: account}, function (error, result) {
        if (!error) {
            $('#harvestBonesModal').modal('hide');
        }
        console.log(result);
    });
}



function checkAccount() {
    if (provider == "binance") {
        updateAccountUI();
    } else if (provider == "metamask") {
        web3.eth.getAccounts((err, accounts) => {
            if (accounts == null || accounts.length == 0) {
                console.log("NO ACCOUNT CONNECTED");
            } else {
                if (account != accounts[0]) {
                    account = accounts[0];
                    updateAccountData();
                }
                updateAccountUI();
            }
        });
    } else if (typeof BinanceChain !== 'undefined') {
        updateAccountUI();
    } else if (web3 && web3.eth) {
        web3.eth.getAccounts((err, accounts) => {
            if (accounts == null || accounts.length == 0) {
                console.log("NO ACCOUNT CONNECTED");
            } else {
                if (account != accounts[0]) {
                    account = accounts[0];
                    updateAccountData();
                }
                updateAccountUI();
            }
        });
    }
    setTimeout(checkAccount, 1000);
}

function handleAccountsChanged(accounts) {
    if (accounts[0] != account) {
        account = accounts[0];
    }
}

async function connectAccount() {
    try {
        if (typeof BinanceChain !== 'undefined' && typeof window.ethereum !== 'undefined') {
            $('#connectionModal').modal();
        } else if (typeof BinanceChain !== 'undefined') {
            connectBinance();
        } else if (typeof window.ethereum !== 'undefined') {
            connectMetamask();
        } else {
            walletConnect();
        }
    } catch(e) {
      console.log("Could not get a wallet connection", e);
      return;
    }
}

function connectBinance() {
    provider = "binance";
    $('#connectionModal').modal('hide');
    web3 = new Web3(BinanceChain);
    BinanceChain.request({ method: 'eth_requestAccounts' }).then(handleAccountsChanged).catch((err) => {
        if (err.code === 4001) {
            console.log('Please connect to Binance Smart Wallet.');
        } else {
            console.error(err);
        }
    });

    setupContracts();
    updateData();
}

function connectMetamask() {
    provider = "metamask";
    $('#connectionModal').modal('hide');
    window.ethereum.enable();
    web3 = new Web3(window.ethereum);

    setupContracts();
    updateData();
}

async function walletConnect() {
    const WalletConnectProvider = window.WalletConnectProvider.default;
    const provider = new WalletConnectProvider({
        rpc: {
            56: "https://bsc-dataseed.binance.org",
        },
        network: 'binance',
        chainId: 56
    });

    await provider.enable();
    web3 = new Web3(provider);

    setupContracts();
    updateData();
}

function nth(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
    }
}

Number.prototype.toDDHHMMSS = function() {
    var sec_num = parseInt(this, 10);
    var days = Math.floor(sec_num / 86400);
    var hours = Math.floor((sec_num - (days * 86400)) / 3600);
    var minutes = Math.floor((sec_num - (days * 86400) - (hours * 3600)) / 60);
    var seconds = sec_num - (days * 86400) - (hours * 3600) - (minutes * 60);

    if (days < 10) {
        days = "0" + days;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return days + ':' + hours + ':' + minutes + ':' + seconds;
};


Number.prototype.toHHMMSS = function() {
    var sec_num = parseInt(this, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return hours + ':' + minutes + ':' + seconds;
};
