//eslint-disable-next-line @typescript-eslint/no-explicit-any
type ArgumentFn = (arg: any) => any;
//eslint-disable-next-line @typescript-eslint/no-explicit-any
type PickFirstFn<T extends any[]> = T extends [...rest: infer U, firstFn: infer L] ? L : never;
//eslint-disable-next-line @typescript-eslint/no-explicit-any
type FirstFnParameterType<T extends any[]> = Parameters<PickFirstFn<T>>[any];
//eslint-disable-next-line @typescript-eslint/no-explicit-any
type LastFnReturnType<T extends any[]> = ReturnType<T[0]>;

export const compose =
    <T extends ArgumentFn[]>(...funcs: T) =>
    (initValue?: FirstFnParameterType<T>): LastFnReturnType<T> =>
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        funcs.reduceRight((value: any, func: ArgumentFn) => func(value), initValue);

//eslint-disable-next-line @typescript-eslint/no-explicit-any
type ArgumentFn2 = (arg1: any, arg2: any) => any;
type Compose2pTurple = [...ArgumentFn[], ArgumentFn2];
type FirstFnCompose2p<T extends Compose2pTurple> = T extends [...rest: infer U, firstFn: infer L] ? L : never;
type RestFnCompose2p<T extends Compose2pTurple> = T extends [...rest: infer U, firstFn: infer L] ? U : never;
type FirstFnCompose2pParameter<T extends Compose2pTurple> = Parameters<FirstFnCompose2p<T>>;
export const compose2p =
    <T extends Compose2pTurple>(...funcs: T) =>
    (arg1?: FirstFnCompose2pParameter<T>[0], arg2?: FirstFnCompose2pParameter<T>[1]) => {
        const first = funcs[funcs.length - 1] as FirstFnCompose2p<T>;
        const rest = funcs.slice(0, -1) as RestFnCompose2p<T>;
        return compose(...rest)(first(arg1, arg2));
    };

export const classNames = (...props: (string | undefined)[]) => {
    return [...props].filter(Boolean).join(' ');
};
