import {printSmartClip} from "../../junior/task_1_smart_clip";

describe('Junior Task | Fizz Buzz', () => {
    it('prints numbers and terms as expected', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(jest.fn());

        printSmartClip();

        expect(consoleSpy).toHaveBeenCalledTimes(100);
        expect(consoleSpy).toHaveBeenNthCalledWith(3, '3 smart');
        expect(consoleSpy).toHaveBeenNthCalledWith(5, '5 clip');
        expect(consoleSpy).toHaveBeenNthCalledWith(15, '15 smart clip');
    })
})