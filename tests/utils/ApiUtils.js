class APiUtils{

constructor(apicontext,payload){

    this.apicontext = apicontext;
this.payload = payload;
}



async getTokens()
{
 
    const apiresponse = await this.apicontext.post(
        "https://rahulshettyacademy.com/api/ecom/auth/login",
        { data: this.payload }
    );

 
    const apiresponsejson = await apiresponse.json();
    this.token = apiresponsejson.token; // stored on instance so getorder() can read this.token
    return this.token;
}


async getorder(orderpayload){


let response = {};

response.token = await this.getTokens();

    // Create order via API using the token
    
    const orderresponse = await this.apicontext.post(
        "https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
            data: orderpayload,
            headers: {
                'Authorization': await this.getTokens(),
                'Content-Type': 'application/json'
            }
        }
    );

  

    const orderresponsejson = await orderresponse.json();
            console.log('This is the order response json',orderresponsejson);

  const   orderid = orderresponsejson.orders[0];

console.log('This is the order id',orderid)
  
response.orderid = orderid;

return response;

}

}

module.exports = {APiUtils};
