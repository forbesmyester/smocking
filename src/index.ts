export interface CheckProps {
    callIndex?: number;
}
export type Check = (checkProps: CheckProps) => boolean;

export type Smocking = {
    add: (check: Check) => Smocking;
    returns: (returns: any) => Smocking;
    calls: (n: number, ctx: any, params: any[]) => Smocking;
    specs: Spec[];
    get: Function;
    invocations: Invocation[];
}

export type Invocation = {
    checkIndex: number;
    params: any[];
    called: null|number;
    returned: any;
}


export interface Spec {
    check: Check;
    returns?: any;
    calls?: { paramIndex: number, ctx: any, withParams: any[] }
}


export default function smocking(): Smocking {

    let that:Smocking = <Smocking>{};

    that.specs = [];

    that.add = (check: Check) => {
        that.specs.push({check});
        return that;
    };

    that.returns = (returns: any) => {
        that.specs[that.specs.length - 1].returns = returns;
        return that;
    };

    that.calls = (paramIndex, ctx, withParams) => {
        that.specs[that.specs.length - 1].calls = {
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
            for (i = 0; i < that.specs.length; i++) {
                if (that.specs[i].check) {
                    let s = that.specs[i];
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
