import {removeConfidentialInfo, UserState} from "../../junior/task_3_shallow_copy";

describe('Junior Task | Shallow Copy', () => {
    it('States the shallow copy problem.', () => {
        const initialState: UserState = {
            user: {
                name: 'Max Mustermann',
                email: 'max.mustermann@smartclip.tv',
                password: 'some_confidential_password'
            },
            campaigns: ['campaign 1', "campaign 2"],
            creatives: [1, 2, 3, 4]
        }

        const publicInfo = removeConfidentialInfo(initialState);

        expect(publicInfo.user.password).toBeUndefined();
        expect(initialState.user.password).toBeUndefined();
    })
})