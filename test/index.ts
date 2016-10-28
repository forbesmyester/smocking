import smocking from '../src/index';
import * as Types from '../src/types';
import test from 'ava';

test('Can call a smocked function', function(t) {

    let s = smocking()
        .add(({callIndex}) => { return callIndex == 0; })
        .returns(42)
        .calls(3, "HELLO", [null, 'OK'])

    let f = s.get();
    let that: string|null = null;
    let msg: string|null = null;

    function next(this: string, err, myMsg) {
        that = this;
        msg = myMsg;
    }

    let r = f(1, 2, 3, next);

    t.is(that, 'HELLO');
    t.is(msg, 'OK');
    t.is(r, 42);
    t.deepEqual(
        [{ checkIndex: 0, params: [1, 2, 3, next], called: 3, returned: 42}],
        s.invocations
    );

});
