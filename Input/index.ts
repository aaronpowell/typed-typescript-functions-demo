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
}

const httpTrigger: AzureFunction = async function (context: InputFunctionContext, req: InputHttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = req.query.name;

    if (name) {
        context.bindings.myQueue = [`${name} was received`];
        context.res = { };
    } else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string"
        };
    }
};

export default httpTrigger;
