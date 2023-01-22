const axios = require('axios');

   
const index = async (req, res) => {
    try{
        const currentDate = new Date();
        const response = await axios.get('https://www1.nseindia.com/products/dynaContent/common/productsSymbolMapping.jsp?instrumentType=OPTIDX&symbol=BANKNIFTY&expiryDate=select&optionType=CE&strikePrice=&dateRange=12month&fromDate=&toDate=&segmentLink=9&symbolCount=');
        
        const Data = await JSON.parse(response);
        
        console.log(Data);

        if(Data){
            res.render('index',{data:Data});
        }else{
            res.render("index",{data:"data not fetched!"});
        }
    }catch(error){
        console.error(error.message);
    }
}


module.exports = {
    index,
};