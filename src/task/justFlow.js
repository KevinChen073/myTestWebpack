
const opn = require('opn');
/**
 * 打开JustFlow
 * @function justFlow
 * @example 
 * myWork work
 */
const justFlowUrl = 'https://just-flow.alibaba-inc.com/console';
module.exports = function debugAndroid() {

    // 打开我的网页支持
    opn(justFlowUrl);
}