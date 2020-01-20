// Galilel blockchain and reward parameters.
const params = {
  LAST_POW_BLOCK: 15000
};

const avgBlockTime = 60; // 1 minutes (60 seconds)
const mncoins = 4000000; // masternode collateral

// Calculated blockchain parameters.
const blocksPerDay = (24 * 60 * 60) / avgBlockTime;
const blocksPerWeek = blocksPerDay * 7;
const blocksPerMonth = (blocksPerDay * 365.25) / 12;
const blocksPerYear = blocksPerDay * 365.25;

const getMNBlocksPerDay = (mns) => {
  return blocksPerDay / mns;
};

const getMNBlocksPerWeek = (mns) => {
  return getMNBlocksPerDay(mns) * (365.25 / 52);
};

const getMNBlocksPerMonth = (mns) => {
  return getMNBlocksPerDay(mns) * (365.25 / 12);
};

const getMNBlocksPerYear = (mns) => {
  return getMNBlocksPerDay(mns) * 365.25;
};

const getMNSubsidy = (nHeight = 0, nMasternodeCount = 0) => {
  const blockValue = getSubsidy(nHeight);
  let ret = 0.0;
  let mNodeCoins = nMasternodeCount * mncoins;

  if (mNodeCoins === 0) {
    ret = 0;
  } else if (nHeight === 0) {
    ret = 0;
  } else if (nHeight < 800) {
    ret = 0;
  } else {
    ret = blockValue * 0.7;
  }

  return ret;
};

const getSubsidy = (nHeight = 1) => {
  let nSubsidy = 0.0;

  // Block rewards.
  if (nHeight === 0) {
    nSubsidy = 1260000000;
  } else if (nHeight <= 800 && nHeight > 0) {
    nSubsidy = 0;
  } else if (nHeight <= 75000 && nHeight > 800) {
    nSubsidy = 34.5;
  } else if (nHeight <= 150000 && nHeight > 75000) {
    nSubsidy = 17.625;
  } else if (nHeight <= 153500 && nHeight > 150000) {
    nSubsidy = 8.65;
  } else if (nHeight <= 153501 && nHeight > 153500) {
    nSubsidy = 350000000;
  } else if (nHeight <= 172788 && nHeight > 153001) {
    nSubsidy = 69;
  } else if (nHeight <= 252788 && nHeight > 172788) {
    nSubsidy = 34.5;
  } else if (nHeight <= 450000 && nHeight > 252788) {
    nSubsidy = 17.25;
  } else if (nHeight <= 650000 && nHeight > 450000) {
    nSubsidy = 8.625;
  } else if (nHeight > 700000) {
      	nSubsidy = 4.3125;
  } else {
    nSubsidy = 0;
  }

  return nSubsidy;

};

const getROI = (subsidy, mns) => {
  return ((getMNBlocksPerYear(mns) * subsidy) / mncoins) * 100.0;
};

const isAddress = (s) => {
  return typeof (s) === 'string' && s.length === 34;
};

const isBlock = (s) => {
  return !isNaN(s) || (typeof (s) === 'string');
};

const isPoS = (b) => {
  return !!b && b.height > params.LAST_POW_BLOCK; // > 1500
};

const isTX = (s) => {
  return typeof (s) === 'string' && s.length === 64;
};

/**
 * How we identify if a raw transaction is Proof Of Stake & Masternode reward
 * @param {String} rpctx The transaction hash string.
 */
const isRewardRawTransaction = (rpctx) => {
  return rpctx.vin.length == 1 &&
    rpctx.vout.length == 3 &&

    // First vout is always in this format
    rpctx.vout[0].value == 0.0 &&
    rpctx.vout[0].n == 0 &&
    rpctx.vout[0].scriptPubKey &&
    rpctx.vout[0].scriptPubKey.type == "nonstandard";
}

module.exports = {
  avgBlockTime,
  blocksPerDay,
  blocksPerMonth,
  blocksPerWeek,
  blocksPerYear,
  mncoins,
  params,
  getMNBlocksPerDay,
  getMNBlocksPerMonth,
  getMNBlocksPerWeek,
  getMNBlocksPerYear,
  getMNSubsidy,
  getSubsidy,
  getROI,
  isAddress,
  isBlock,
  isPoS,
  isTX,
  isRewardRawTransaction
};
