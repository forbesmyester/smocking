import smocking from '../src/index';
import * as Types from '../src/types';
import test from 'ava';

test.cb('Can call a smocked function', function(t) {

    let s = smocking()
        .add(({callIndex}) => { return callIndex < 2; })
        .returns(42)
        .calls(3, "HELLO", [null, 'OK'])
        .add(({callIndex}) => { return true; })
        .returns(43)
        .calls(1, "GOOD MORNING", [null, 'WHO ARE YOU?']);

    let f = s.get();
    let that: string[] = [];
    let msg: string[] = [];
    let r: number[] = [];

    function next(this: string, err, myMsg) {
        that.push(this);
        msg.push(myMsg);
    }

    r = [f(1, 2, 3, next), f(4, 5, 6, next), f(7, next)];


    let interval = setInterval(() => {
        if (msg.length == 3) {
            t.deepEqual(that, ['HELLO', 'HELLO', 'GOOD MORNING']);
            t.deepEqual(msg, ['OK', 'OK', "WHO ARE YOU?"]);
            t.deepEqual(r, [42, 42, 43]);
            t.deepEqual(
                [
                    { checkIndex: 0, params: [1, 2, 3, next],
                        called: 3, returned: 42 },
                    { checkIndex: 0, params: [4, 5, 6, next],
                        called: 3, returned: 42 },
                    { checkIndex: 1, params: [7, next],
                        called: 1, returned: 43 }
                ],
                s.invocations
            );
            clearInterval(interval);
            t.end();
        }
    }, 10);

});
