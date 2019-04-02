import { AzureFunction, Context, HttpRequest } from "@azure/functions"

interface InputHttpRequest extends HttpRequest {
    query: {
        name: string
    }
}

interface InputFunctionContext extends Context {
    bindings: {
        myQueue: string[]
    }

    res: {
        status?: number
        body: string
    }
}

const httpTrigger: AzureFunction = async function (context: InputFunctionContext, req: InputHttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = req.query.name;

    if (name) {
        context.bindings.myQueue = [`${name} was received`];
        context.res = {
            body: "Message added to the queue"
        };
    } else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string"
        };
    }
};

export default httpTrigger;
