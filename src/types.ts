export interface CheckProps { callIndex?: number; }

export type Check = (checkProps: CheckProps) => boolean;

export type Smocking = {
    add: (check: Check) => Smocking;
    returns: (returns: any) => Smocking;
    calls: (n: number, ctx: any, params: any[]) => Smocking;
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
    calls?: { paramIndex: number, ctx: any, withParams: any[] };
}
