const {getAdaInAddress, sumTokensExport} = require("../helper/chain/cardano")
const {get} = require("../helper/http")
const iagTokenAddress = "5d16cc1a177b5d9ba9cfa9793b07e60f1fb70fea1f8aef064415d114494147"
const subscription = "addr1q82d9vayvdrtvd3r2wnyq929dt2ws0nlvm4nan5uqt56the72htx4wnpfpe06crpu2d0jeaaa0y77s9jcmlnxtwgmq2qql234h"
const iagStaking ="addr1w9k25wa83tyfk5d26tgx4w99e5yhxd86hg33yl7x7ej7yusggvmu3"
async function tvl(){
    const subscriptionValue = await getAdaInAddress(subscription)
    const poolValue = await get('https://api.iagon.com/api/v1/pools/tvl/total')
return {
    cardano: (subscriptionValue + parseFloat(poolValue.data.tvl))
}
}
module.exports = {
    
    timetravel:false,
    cardano:{
        tvl,
        staking:sumTokensExport({
            owner:iagStaking,
            tokens:[iagTokenAddress]
        })
    }
}