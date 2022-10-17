import user from '../services/demo'
type AddState = {
    count: number;
}
type AddAction = {
    payload: {
        data: string;
    };
}
export default {
    // namespace: 'create',
    state: {
        count: 0,
        a: 0,
        b: 0,
        c: 0,
    },
    reducers: {
        add(state: AddState, action: AddAction) {
            const { count } = state;
            return {
                ...state,
                count: count + 1,
            }
        },
    },
    effects: {
        *addAsync({ payload }: any, { put, call }: any) {
            const data: string = yield call(user.user.getUser, payload)
            yield put({
                type: 'add',
                payload: {
                    data
                }
            })
        },
    },
}