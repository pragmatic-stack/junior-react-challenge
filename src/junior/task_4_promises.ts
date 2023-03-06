/**
 * Can you explain Promises in JavaScript?
 *
 * Is the catch block triggered here when the Promise rejects?
 */

export const promiseRejects = async () => {
    try {
        await Promise.reject();
    } catch {
        console.log("reject?");
    }
}