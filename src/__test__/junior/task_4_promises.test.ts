import {promiseRejects} from "../../junior/task_4_promises";

describe('Junior Task | Promises', () => {
    it('catches an error if promise rejects', async () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(jest.fn());

        await promiseRejects();

        expect(consoleSpy).toHaveBeenCalledWith('reject?')
    })
})