import { APIGatewayProxyEvent } from 'aws-lambda';
import { helloWorld } from '@aws-lambdas-on-nx/hello-world';

export const handler = async (event: APIGatewayProxyEvent) => {
    console.log('event:', event);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from myLambda01 and ' + helloWorld(),
            input: event,
        }),
    };
};
