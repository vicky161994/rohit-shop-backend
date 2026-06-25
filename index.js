const { createItem, getItems, updateItem } = require("./controllers/itemController");
const dotenv = require('dotenv');
dotenv.config()

exports.handler = async (event) => {
    const eventMethod = event.httpMethod
    let result;
    console.log({eventMethod})
    switch(eventMethod) {
        case 'POST':
            result = await insertIntoDatabase(event);
            break;
        case 'GET':
            result = await getDataFromDatabase(event);
            break;
        case 'PUT':
            result = await updateDatabase(event);
            break;
        default:
            result = { message: 'Unsupported method' };
    }
    console.log('result is : ', result)
    return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
}

async function insertIntoDatabase(event) {
    const eventBody =  JSON.parse(event.body);
    const payload = {
        name: eventBody.name,
        costPrice: eventBody.costPrice,
        sellingPrice: eventBody.sellingPrice
    }
    const createResp = await createItem(payload)
    console.log({createResp})
    return createResp;
}

async function getDataFromDatabase(event){
    const itemList = await getItems(event)
    return itemList
}

async function updateDatabase(event) {
    const id = event.queryStringParameters.id
    console.log({id})
    const eventBody =  JSON.parse(event.body);
    const payload = {
        name: eventBody.name,
        costPrice: eventBody.costPrice,
        sellingPrice: eventBody.sellingPrice
    }
    const updateResp = await updateItem(id, payload)
    console.log({updateResp})
    return updateResp;
}