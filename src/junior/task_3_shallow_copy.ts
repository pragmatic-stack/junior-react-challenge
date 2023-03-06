/**
 * Look at the code and explain what happens here.
 *
 * Find problematic implementations within the given function body.
 */

export type UserState = {
    user: {
        name: string,
        email: string;
        password?: string;
    }
    campaigns?: string[];
    creatives?: number[];
}

export function removeConfidentialInfo(currentState: UserState) {
    const state = { ...currentState };

    // remove confidential info
    delete state.user.password;

    // clear these, we don't want to persist them
    delete state.campaigns;
    delete state.creatives;

    return state;
}