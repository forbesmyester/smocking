"use strict";
function smocking() {
    var specs = [];
    var callIndex = 0;
    var that = {};
    that.add = function (check) {
        specs.push({ check: check });
        return that;
    };
    that.returns = function (returns) {
        specs[specs.length - 1].returns = returns;
        return that;
    };
    that.calls = function (paramIndex, ctx, withParams) {
        specs[specs.length - 1].calls = {
            paramIndex: paramIndex,
            ctx: ctx,
            withParams: withParams
        };
        return that;
    };
    that.invocations = [];
    that.get = function () {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var i = 0;
            for (i = 0; i < specs.length; i++) {
                if (specs[i].check({ callIndex: callIndex })) {
                    callIndex = callIndex + 1;
                    var s = specs[i];
                    var called = null;
                    if (s.calls) {
                        called = s.calls.paramIndex;
                        args[s.calls.paramIndex].apply(s.calls.ctx, s.calls.withParams);
                    }
                    var returns = null;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = smocking;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdBO0lBRUksSUFBSSxLQUFLLEdBQVcsRUFBRSxDQUFDO0lBQ3ZCLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztJQUVsQixJQUFJLElBQUksR0FBdUIsRUFBRSxDQUFDO0lBRWxDLElBQUksQ0FBQyxHQUFHLEdBQUcsVUFBQyxLQUFZO1FBQ3BCLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxZQUFLLEVBQUMsQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFDLE9BQVk7UUFDeEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLFVBQVU7UUFDckMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHO1lBQzVCLHNCQUFVO1lBQ1YsUUFBRztZQUNILHNCQUFVO1NBQ2IsQ0FBQztRQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLEdBQUcsR0FBRztRQUNQLE1BQU0sQ0FBQztZQUFDLGNBQU87aUJBQVAsV0FBTyxDQUFQLHNCQUFPLENBQVAsSUFBTztnQkFBUCw2QkFBTzs7WUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDVixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ2hDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBQyxvQkFBUyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzlCLFNBQVMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO29CQUMxQixJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLElBQUksTUFBTSxHQUFnQixJQUFJLENBQUM7b0JBQy9CLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUNWLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQzt3QkFDNUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUMxQixDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFDWCxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FDckIsQ0FBQztvQkFDTixDQUFDO29CQUNELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDbkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlCLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO29CQUN4QixDQUFDO29CQUVELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO3dCQUNsQixVQUFVLEVBQUUsQ0FBQzt3QkFDYixNQUFNLEVBQUUsSUFBSTt3QkFDWixNQUFNLEVBQUUsTUFBTTt3QkFDZCxRQUFRLEVBQUUsT0FBTztxQkFDcEIsQ0FBQyxDQUFDO29CQUVILE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ25CLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0lBRUYsTUFBTSxDQUFDLElBQUksQ0FBQztBQUVoQixDQUFDO0FBL0REOzBCQStEQyxDQUFBIn0=