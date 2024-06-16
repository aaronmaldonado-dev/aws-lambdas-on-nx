import { APIGatewayProxyEvent } from 'aws-lambda';
import { handler } from "./myLambda01/app";

const main = async (event: APIGatewayProxyEvent) => {
    const res = await handler(event);
    console.log('res:', res);
};

main({} as APIGatewayProxyEvent);
