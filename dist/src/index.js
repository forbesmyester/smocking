"use strict";
function smocking() {
    var that = {};
    that.specs = [];
    that.add = function (check) {
        that.specs.push({ check: check });
        return that;
    };
    that.returns = function (returns) {
        that.specs[that.specs.length - 1].returns = returns;
        return that;
    };
    that.calls = function (paramIndex, ctx, withParams) {
        that.specs[that.specs.length - 1].calls = {
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
            for (i = 0; i < that.specs.length; i++) {
                if (that.specs[i].check) {
                    var s = that.specs[i];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQTZCQTtJQUVJLElBQUksSUFBSSxHQUFzQixFQUFFLENBQUM7SUFFakMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFFaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxVQUFDLEtBQVk7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxZQUFLLEVBQUMsQ0FBQyxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFDLE9BQVk7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsVUFBVTtRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRztZQUN0QyxzQkFBVTtZQUNWLFFBQUc7WUFDSCxzQkFBVTtTQUNiLENBQUM7UUFDRixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBRXRCLElBQUksQ0FBQyxHQUFHLEdBQUc7UUFDUCxNQUFNLENBQUM7WUFBQyxjQUFPO2lCQUFQLFdBQU8sQ0FBUCxzQkFBTyxDQUFQLElBQU87Z0JBQVAsNkJBQU87O1lBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1YsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDckMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUN0QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN0QixJQUFJLE1BQU0sR0FBZ0IsSUFBSSxDQUFDO29CQUMvQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDVixNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7d0JBQzVCLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FDMUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQ1gsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQ3JCLENBQUM7b0JBQ04sQ0FBQztvQkFDRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ25CLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztvQkFDeEIsQ0FBQztvQkFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQzt3QkFDbEIsVUFBVSxFQUFFLENBQUM7d0JBQ2IsTUFBTSxFQUFFLElBQUk7d0JBQ1osTUFBTSxFQUFFLE1BQU07d0JBQ2QsUUFBUSxFQUFFLE9BQU87cUJBQ3BCLENBQUMsQ0FBQztvQkFFSCxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNuQixDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztJQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFFaEIsQ0FBQztBQTdERDswQkE2REMsQ0FBQSJ9