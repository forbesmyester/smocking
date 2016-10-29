import { Smocking, CheckProps, Check, Invocation, Spec } from  './types';


export default function smocking(): Smocking {

    let specs: Spec[] = [];
    let callIndex = 0;

    let that: Smocking = <Smocking>{};

    that.add = (check: Check) => {
        specs.push({check});
        return that;
    };

    that.returns = (returns: any) => {
        specs[specs.length - 1].returns = returns;
        return that;
    };

    that.calls = (paramIndex, ctx, withParams) => {
        specs[specs.length - 1].calls = {
            paramIndex,
            ctx,
            withParams
        };
        return that;
    };

    that.invocations = [];

    that.get = () => {
        return (...args) => {
            let i = 0;
            for (i = 0; i < specs.length; i++) {
                if (specs[i].check({callIndex})) {
                    callIndex = callIndex + 1;
                    let s = specs[i];
                    let called: null|number = null;
                    if (s.calls) {
                        called = s.calls.paramIndex;
                        args[s.calls.paramIndex].apply(
                            s.calls.ctx,
                            s.calls.withParams
                        );
                    }
                    let returns = null;
                    if (s.hasOwnProperty('returns')) {
                        returns = s.returns;
                    }

                    that.invocations.push({
                        checkIndex: i,
                        params: args,
                        called: called,
                        returned: returns
                    });

                    return returns;
                }
            }
        };
    };

    return that;

}
