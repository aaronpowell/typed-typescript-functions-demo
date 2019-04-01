import { AzureFunction, Context } from "@azure/functions"

const queueTrigger: AzureFunction = async function (context: Context, queueItem: string): Promise<void> {
    context.log('Queue received a message:');
    context.log(`\t${queueItem}`);
};

export default queueTrigger;
