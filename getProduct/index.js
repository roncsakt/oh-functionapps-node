module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const productId = (req.query.productId || (req.body && req.body.productId));

    let responseMessage = "This HTTP triggered function executed successfully. Pass a productId in the query string or in the request body for a personalized response.";
    let status = 400;

    if (productId) {
        responseMessage = `The product name for your product id ${productId} is Starfruit Explosion`;
        status = 200;
    }
    // const responseMessage = productId
    //     ? `The product name for your product id ${productId} is Starfruit Explosion`
    //     : "This HTTP triggered function executed successfully. Pass a productId in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        status: status,
        body: responseMessage
    };
}