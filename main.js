var t1 =[]
var t2 = []
t1.push("NEW","SOON","Please connect your wallet","My NFTs","Disconnect","Home","Mystery Box","Farming","Staking","Nekofuse","Marketplace","Raffle","The Token","INFORMATION","Whitepaper","Audit","Liquidity Lock","LINKS","CONTRACT ADDRESS:","Theme Song");
t2.push("新","即将上线","请连接钱包后使用","我的NFT","断开连接","首页", "盲盒","农场","流动性质押","合成","市场","抽奖","代币","更多信息","白皮书","审计","流动池锁定","链接","合约地址：","主题曲");
t1.push("Collect, create, and engage with","Catgirls!","Supported exchanges to buy CATGIRL￠:","Ecosystem","Season Catgirls","Season One","CURRENT","The GENESIS Catgirls");
t2.push("收集，创造并拥有","猫娘！","CATGIRL￠已上架交易所：","生态系统","已诞生猫娘","第 1 季","当前","创世季猫娘");
t1.push("COMMON","RARE","EPIC","LEGENDARY","PAW-SOME");
t2.push("普通","稀有","史诗","传奇","喵爪");
t1.push("DIY Catgirls","Platform Stats","MYSTERY BOXES OPEN","CATGIRL NFT HOLDERS","CATGIRL HOLDERS","CHARACTERS &amp; GROWING");
t2.push("个性化猫娘","平台统计","已销售盲盒","猫娘NFT持有地址","代币持有地址","猫娘角色数");
t1.push("The sales for Season One of the Mystery Boxes are <strong>now closed!</strong>","Rarities &amp; Drop Rates","Rates slightly increased when buying with CATGIRL￠");
t2.push("第一季盲盒已于2021年11月23日后<strong>停止销售！</strong>","稀有度 &amp; 掉率","使用 CATGIRL￠ 购买时掉率将增加");
t1.push("COMMON - 80.99%","RARE - 14.5%","EPIC - 3.5%","LEGENDARY - 1%","PAW-SOME - 0.01%","Obtainable Catgirls");
t2.push("普通 - 80.99%","稀有 - 14.5%","史诗 - 3.5%","传奇 - 1%","喵爪 - 0.01%","躲在盲盒里的猫娘们");
t1.push("Stake CATGIRL-BNB pair","Add Liquidity and Stake","Stake LP","INPUT","MAX","Staking Info","BNB Balance:","Catgirl Balance:","Withdraw Cooldown","Catgirl-BNB LP Balance:","PAW BALANCE");
t2.push("质押 CATGIRL-BNB 流动性","添加流动性并质押","质押LP代币","输入","最大","质押说明","BNB 余额：","Catgirl 余额：","提取冷却","CATGIRL-BNB LP 余额：","$PAW 余额");
t1.push("There will be a cooldown period of <b>14 days</b> if you wish to withdraw your Liquidity Pair Token. You may cancel the withdraw at any time and continue generating $PAW.","Estimated Paw per day*: ","Withdraw in Progress","Current Staked CATGIRL-BNB:");
t2.push("如果您提取流动性代币，将有<b>14 天</b>的冷却期。 您可以随时取消提取并继续生成 $PAW。","预计每日可自动获得：","解除质押中","当前已质押LP代币：");
t1.push("1. You obtain <strong>$PAW</strong> by staking <strong>CATGIRL-BNB pair</strong><br>2. $PAW will be generated on a <strong>daily basis</strong> <br>3. If you wish to <strong>Cancel &amp; Withdraw</strong> your Liquidity Pair Token, you must wait a cooldown period of <strong>14 days</strong> before you get your Liquidity Pair token back<br>4. If you try to withdraw more Liquidity Pair Token during the previous withdrawal cooldown period, the cooldown will be reset to <strong>14 days</strong><br>5. You may cancel your withdrawal at <strong>any time</strong> and continue to generate $PAW<br>6. There is a <strong>maximum</strong> $PAW balance you can hold, the formula is: <strong>MAX_BALANCE = PAW_PER_DAY * 30</strong><br><br><br><strong>DISCLAIMER: </strong> Even though this software has been thoroughly tested, this software's content and functionalities are still experimental. By using this software, you agree to hold catgirl.io harmless and not liable for any losses of the cryptocurrency assets or NFTs. Please use this software at your own risk");
t2.push("1. 您可通过质押<strong>CATGIRL-BNB 流动性</strong>以获得<strong>$PAW</strong><br>2. $PAW 将每天<strong>自动生成</strong> <br>3. 如果您想<strong>取消质押并提取</strong>流动性，则必须提交请求后等待<strong>14 天</strong>后才可领取到账<br>4. 任何质押、取消质押操作进行后将重置<strong>14 天</strong>等待期<br>5. 您可以<strong>随时</strong>取消“解除质押”并重新继续自动获得 $PAW<br>6. $PAW的<strong>最大持有总量</strong>为： <strong>每日自动获取量 * 30</strong><br><br><br><strong>免责声明：</strong> 即使该应用已经过大量测试，但仍处于试验阶段。 使用本应用即表示您同意 catgirl.io 不对加密货币资产或 NFT 的任何损失承担责任。 请自行承担使用此应用的风险");
t1.push("INVENTORY","FILTER","FARMING AREA","Lock","Unlock");
t2.push("库存","筛选","农场区域","锁定","解锁");
t1.push("TIER 1 SLOT","TIER 2 SLOT","TIER 3 SLOT","TIER 4 SLOT","TIER 5 SLOT");
t2.push("插槽1","插槽2","插槽3","插槽4","插槽5");

function d(){
  var e = document.body.getElementsByTagName("*");
  for(let i in e){
    var j = t1.indexOf(e[i].innerHTML);
    if(j!=-1){
      e[i].innerHTML=t2[j];
    }
  }
}
var t=self.setInterval("d()",1000);
