(function(){this.app=angular.module("goals"),this.app.controller("goalController",["$scope","goalModel",function(n,t){var e;return e=function(){return t.index().then(function(t){return n.goals=t.data})},n["new"]=function(e){return t.postGoal(e).then(function(){return n.goals.push(e),n.goal=""})},n.update=function(n){return t.update(n)},n.destroy=function(n){return t.destroy(n).then(function(){return n["delete"]=!0})},e()}]),this.app.controller("taskController",["$scope","taskModel","goalModel",function(n,t,e){var o,r,u;return e.index().then(function(t){var e;return n.goals=t.data,e={},_.each(n.goals,function(n){return e[n.id]=n.name}),n.align=function(n){return n.goal_id?e[n.goal_id]:"what goal?"}}),r=function(){return t.index().then(function(t){var e;return e=t.data,n.tasks=_.filter(e,function(n){return n.completed===!1&&moment(n.snooze)<moment()?n:void 0})})},o=function(){return t.index().then(function(t){var e;return e=t.data,n.completedTasks=_.filter(e,function(n){return n.completed===!0?n:void 0})})},u=function(){return t.index().then(function(t){var e;return e=t.data,n.snoozedTasks=_.filter(e,function(n){return n.completed===!1&&moment(n.snooze)>moment()?n:void 0})})},n["new"]=function(e){return e.snooze=moment(),n.tasks.push(e),n.task="",t.postTask(e)},n.update=function(n){return t.update(n)},n.snooze=function(n){return n.snooze=moment(n.snooze).add(3,"days"),t.update(n)},n["return"]=function(n){return n.snooze=moment(),t.update(n)},n.complete=function(n){return n.completed=!0,t.update(n)},n.destroy=function(n){return t.destroy(n).then(function(){return n["delete"]=!0})},r(),o(),u()}])}).call(this);