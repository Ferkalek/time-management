(this.webpackJsonptime_management=this.webpackJsonptime_management||[]).push([[0],{14:function(e,t,a){e.exports=a(24)},19:function(e,t,a){},20:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),s=a.n(r),o=(a(19),a(20),a(2)),i=a(7),c=a(13),u=a(3),d=a(1),m=l.a.createContext(null),p=m,f=Object(o.a)((function(e){var t=e.task,a=Object(n.useContext)(p),r=["progress-bar bg-blue-500"];return t.isRunning&&r.push("h-full"),l.a.createElement("div",{className:"text-gray-700 bg-white rounded shadow-sm hover:shadow-md mb-2 py-2 px-4 transition ease-in-out duration-300"},l.a.createElement("div",{className:"flex justify-between items-start mb-2"},l.a.createElement("h3",{className:"text-xs uppercase font-bold"},t.title),l.a.createElement("div",{className:"flex justify-end pt-1 flex-no-wrap"},l.a.createElement("button",{className:"ml-1 duration-300 ease-in-out hover:text-gray-900 transition",onClick:function(){return a.editTask(t)}},l.a.createElement("svg",{viewBox:"0 0 20 20",fill:"currentColor",className:"pencil-alt w-5 h-5"},l.a.createElement("path",{d:"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"}),l.a.createElement("path",{fillRule:"evenodd",d:"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",clipRule:"evenodd"}))),l.a.createElement("button",{className:"ml-1 duration-300 ease-in-out hover:text-gray-900 transition",onClick:function(){return a.showConfirmationModal(t)}},l.a.createElement("svg",{viewBox:"0 0 20 20",fill:"currentColor",className:"trash w-5 h-5"},l.a.createElement("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"}))))),l.a.createElement("div",{className:"flex justify-between items-center"},l.a.createElement("div",{className:"flex-1 progress border border-gray-400 bg-gray-300 h-2 overflow-hidden rounded"},l.a.createElement("div",{className:r.join(" ")})),l.a.createElement("div",{className:"flex"},!t.isRunning&&l.a.createElement("button",{className:"ml-1",onClick:a.startedTask.bind(null,t.id)},l.a.createElement("svg",{viewBox:"0 0 20 20",fill:"currentColor",className:"play w-5 h-5"},l.a.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",clipRule:"evenodd"}))),t.isRunning&&l.a.createElement("button",{className:"ml-1",onClick:a.pausedTask.bind(null,t.id)},l.a.createElement("svg",{viewBox:"0 0 20 20",fill:"currentColor",className:"pause w-5 h-5"},l.a.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"}))),(t.isRunning||t.isStopped)&&l.a.createElement("button",{className:"ml-1",onClick:a.stopedTask.bind(null,t.id)},l.a.createElement("svg",{viewBox:"0 0 20 20",fill:"currentColor",className:"stop w-5 h-5"},l.a.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z",clipRule:"evenodd"}))))),l.a.createElement("p",{className:"text-xs"},t.description))})),b=Object(o.a)((function(){var e=Object(n.useContext)(p);return l.a.createElement("div",null,l.a.createElement("h2",{className:"font-bold mb-4 text-gray-800 text-xl uppercase"},"Active tasks"),!e.isRunningTask&&!e.arePausedTasks.length&&l.a.createElement("p",{className:"text-gray-500 text-sm -mt-4"},"You do not have any active task."),e.isRunningTask&&l.a.createElement(f,{task:e.isRunningTask}),e.arePausedTasks&&e.arePausedTasks.map((function(e){return l.a.createElement(f,{key:e.id,task:e})})))})),v=Object(o.a)((function(e){var t=e.task,a=Object(n.useContext)(p),r=["absolute bottom-0 left-0 top-0 w-1"],s=["text-xs"];return t.isRunning?r.push("bg-teal-500"):t.isStopped?r.push("bg-gray-500"):t.isCompleted?(r.push("bg-black"),s.push("line-through")):r.push("bg-orange-500"),l.a.createElement("div",{className:"relative overflow-hidden text-gray-700 bg-white mb-2 py-2 px-4 rounded shadow-sm hover:shadow-md transition ease-in-out duration-300"},l.a.createElement("div",{className:r.join(" ")}),l.a.createElement("div",{className:"flex justify-between items-start mb-2"},l.a.createElement("h3",{className:"text-xs uppercase font-bold"},t.title),l.a.createElement("div",{className:"flex justify-end pt-1 flex-no-wrap"},!t.isRunning&&l.a.createElement("button",{className:"ml-1",onClick:a.startedTask.bind(null,t.id)},t.isCompleted?l.a.createElement("svg",{viewBox:"0 0 20 20",fill:"currentColor",className:"refresh w-5 h-5"},l.a.createElement("path",{fillRule:"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",clipRule:"evenodd"})):l.a.createElement("svg",{viewBox:"0 0 20 20",fill:"currentColor",className:"play w-5 h-5"},l.a.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",clipRule:"evenodd"}))),t.isRunning&&l.a.createElement("button",{className:"ml-1",onClick:a.pausedTask.bind(null,t.id)},l.a.createElement("svg",{viewBox:"0 0 20 20",fill:"currentColor",className:"pause w-5 h-5"},l.a.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"}))),(t.isRunning||t.isStopped)&&l.a.createElement("button",{className:"ml-1",onClick:a.stopedTask.bind(null,t.id)},l.a.createElement("svg",{viewBox:"0 0 20 20",fill:"currentColor",className:"stop w-5 h-5"},l.a.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z",clipRule:"evenodd"}))),l.a.createElement("button",{className:"ml-1 duration-300 ease-in-out hover:text-gray-900 transition",onClick:function(){return a.editTask(t)}},l.a.createElement("svg",{viewBox:"0 0 20 20",fill:"currentColor",className:"pencil-alt w-5 h-5"},l.a.createElement("path",{d:"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"}),l.a.createElement("path",{fillRule:"evenodd",d:"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",clipRule:"evenodd"}))),l.a.createElement("button",{className:"ml-1 duration-300 ease-in-out hover:text-gray-900 transition",onClick:function(){return a.showConfirmationModal(t)}},l.a.createElement("svg",{viewBox:"0 0 20 20",fill:"currentColor",className:"trash w-5 h-5"},l.a.createElement("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"}))))),l.a.createElement("p",{className:s.join(" ")},t.description))})),h=Object(o.a)((function(){var e=l.a.useContext(p);return l.a.createElement("div",null,l.a.createElement("h2",{className:"font-bold mb-4 mt-8 text-gray-800 text-xl uppercase"},"All tasks"),e.tasks.length?e.tasks.map((function(e){return l.a.createElement(v,{key:e.id,task:e})})):l.a.createElement("p",{className:"text-gray-500 text-sm -mt-4"},"You do not have any task."))})),x=a(5),g=Object(o.a)((function(){var e=Object(n.useState)(!1),t=Object(x.a)(e,2),a=t[0],r=t[1],s=Object(n.useContext)(p),o=Object(n.useRef)(null),i=Object(n.useRef)(null),c=["shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"];a&&c.push("border-red-500");var u=Object(n.useCallback)((function(){o.current.value="",i.current.value=""}),[]),d=Object(n.useCallback)((function(){if(o.current.value.trim()){var e={id:+new Date,title:o.current.value,description:i.current.value,isRunning:!1,isStopped:!1,isCompleted:!1,timeStart:0,duration:0};s.createTask(e),u()}else r(!0)}),[u,s]),m=Object(n.useCallback)((function(){if(o.current.value.trim()){var e=+new Date,t={id:e,title:o.current.value,description:i.current.value,isRunning:!0,isStopped:!1,isCompleted:!1,timeStart:e,duration:0};s.createTaskAndActivate(t),u()}else r(!0)}),[u,s]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mb-6 relative"},l.a.createElement("label",{className:"mb-1 block font-bold text-gray-700 text-sm uppercase",htmlFor:"title"},"Title"),l.a.createElement("input",{className:c.join(" "),ref:o,id:"title",type:"text",placeholder:"Title"}),a&&l.a.createElement("p",{className:"-mb-5 absolute bottom-0 italic left-0 text-red-500 text-xs"},"This field is required.")),l.a.createElement("div",{className:"mb-4"},l.a.createElement("label",{className:"mb-1 block font-bold text-gray-700 text-sm uppercase",htmlFor:"description"},"Description"),l.a.createElement("textarea",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",ref:i,id:"description",placeholder:"Description"})),l.a.createElement("div",{className:"flex justify-end"},l.a.createElement("button",{className:"bg-transparent hover:bg-blue-500 text-blue-700 px-2 py-1 uppercase text-xs font-bold hover:text-white border border-blue-500 hover:border-transparent rounded",onClick:d},"Create"),l.a.createElement("button",{className:"bg-transparent hover:bg-blue-500 text-blue-700 px-2 py-1 uppercase text-xs font-bold ml-2 hover:text-white border border-blue-500 hover:border-transparent rounded",onClick:m},"Create and activate")))})),k=Object(o.a)((function(){var e=Object(n.useContext)(p),t=Object(n.useState)(!1),a=Object(x.a)(t,2),r=a[0],s=a[1],o=Object(n.useState)(""),i=Object(x.a)(o,2),c=i[0],u=i[1],d=Object(n.useState)(""),m=Object(x.a)(d,2),f=m[0],b=m[1],v=["shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"];Object(n.useEffect)((function(){u(e.selectedTask.title),b(e.selectedTask.description)}),[e.selectedTask]),r&&v.push("border-red-500");var h=Object(n.useCallback)((function(e){u(e.target.value)}),[]),g=Object(n.useCallback)((function(e){b(e.target.value)}),[]),k=Object(n.useCallback)((function(){c.trim()?(e.selectedTask.title=c,e.selectedTask.description=f,e.updateTask(e.selectedTask)):s(!0)}),[c,e,f]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mb-6 relative"},l.a.createElement("label",{className:"mb-1 block font-bold text-gray-700 text-sm uppercase",htmlFor:"title"},"Title"),l.a.createElement("input",{className:v.join(" "),onChange:h,id:"title",type:"text",value:c,placeholder:"Title"}),r&&l.a.createElement("p",{className:"-mb-5 absolute bottom-0 italic left-0 text-red-500 text-xs"},"This field is required.")),l.a.createElement("div",{className:"mb-4"},l.a.createElement("label",{className:"mb-1 block font-bold text-gray-700 text-sm uppercase",htmlFor:"description"},"Description"),l.a.createElement("textarea",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",value:f,onChange:g,id:"description",placeholder:"Description"})),l.a.createElement("div",{className:"flex justify-end"},l.a.createElement("button",{className:"bg-transparent hover:bg-blue-500 text-blue-700 px-2 py-1 uppercase text-xs font-bold hover:text-white border border-blue-500 hover:border-transparent rounded",onClick:k},"Update")))})),E=Object(o.a)((function(){var e=Object(n.useContext)(p),t=Object(n.useCallback)((function(){var t=0;return e.tasksWithTime.forEach((function(a){t+=e.getTimeAsSecondsFromTask(a)})),e.getTimeAsString(t)}),[e]);return l.a.createElement("div",null,e.tasksWithTime&&e.tasksWithTime.map((function(t){return l.a.createElement("div",{key:t.id,className:"mt-2 flex justify-between items-start"},l.a.createElement("div",{className:"flex-1"},l.a.createElement("h2",{className:"font-medium text-md"},t.title),l.a.createElement("p",{className:"text-gray-700 text-sm"},t.description)),l.a.createElement("div",{className:"flex flex-col items-end ml-2"},t.isRunning&&l.a.createElement("div",{className:"bg-teal-500 border border-teal-600 mb-1 px-2 rounded-full text-white text-xs"},"Running"),l.a.createElement("div",{className:"font-medium text-gray-700 text-xs"},e.getSpendTime(t))))})),l.a.createElement("div",{className:"flex justify-between mt-4"},l.a.createElement("h4",{className:"font-bold text-sm uppercase"},"Total time:"),l.a.createElement("p",{className:"font-semibold text-gray-700 text-sm"},t())))})),w=Object(o.a)((function(){var e=Object(n.useContext)(p);return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"text-gray-700 text-sm font-medium"},"Are you sure that you want to delete task?"),l.a.createElement("div",{className:"flex justify-end mt-6"},l.a.createElement("button",{className:"w-20 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded",onClick:e.closeHandler},"No"),l.a.createElement("button",{className:"ml-2 w-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded",onClick:function(){return e.deleteTask(e.selectedTask.id)}},"Yes")))})),N=Object(o.a)((function(){var e=Object(n.useContext)(p),t="create"===e.kindOfModal?"Create a task":"edit"===e.kindOfModal?"Edit a task":"report"===e.kindOfModal?"Report":"Confirmation",a=Object(n.useCallback)((function(t){t.target===t.currentTarget&&e.closeHandler()}),[e]);return l.a.createElement("div",{className:"fixed top-0 left-0 right-0 bottom-0 z-50 p-6 flex justify-center items-center bg-black bg-opacity-75",onClick:a},l.a.createElement("div",{className:"bg-white max-w-sm p-6 rounded shadow-xl w-full relative z-10"},l.a.createElement("div",{className:"flex justify-between mb-2"},l.a.createElement("h2",{className:"uppercase text-gray-700 font-bold text-md"},t),l.a.createElement("button",{className:"cursor-pointer text-gray-700 hover:text-gray-900 transition ease-in-out duration-300",onClick:e.closeHandler},l.a.createElement("svg",{viewBox:"0 0 20 20",fill:"currentColor",className:"x w-6 h-6"},l.a.createElement("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})))),l.a.createElement("div",{className:"py-2"},"create"===e.kindOfModal&&l.a.createElement(g,null),"edit"===e.kindOfModal&&l.a.createElement(k,null),"report"===e.kindOfModal&&l.a.createElement(E,null),"confirmation"===e.kindOfModal&&l.a.createElement(w,null))))})),y=Object(o.a)((function(){var e=function(){var e=Object(u.d)((function(){return{tasks:[],kindOfModal:"",selectedTask:{},get tasksWithTime(){return e.tasks.filter((function(e){return 0!==e.timeStart||0!==e.duration}))},get isRunningTask(){return e.tasks.find((function(e){return!0===e.isRunning}))},get arePausedTasks(){return e.tasks.filter((function(e){return!0===e.isStopped}))},appendTask:function(t){e.tasks.push(t)},prependTask:function(t){e.tasks.unshift(t)},showCreateTaskModal:function(){e.kindOfModal="create"},showReportModal:function(){e.kindOfModal="report"},closeHandler:function(){e.kindOfModal=""},createTask:function(t){e.appendTask(t),e.closeHandler()},replaceRunningTask:function(e){e.isRunning=!1,e.isStopped=!0,e.duration=e.duration>0?+new Date-e.timeStart+e.duration:+new Date-e.timeStart,e.timeStart=0},createTaskAndActivate:function(t){var a=e.tasks.find((function(e){return!0===e.isRunning}));a&&(i.b.info("You have a task that is running yet, so a new task will replace the task is running!"),e.replaceRunningTask(a)),e.appendTask(t),e.closeHandler()},updateTask:function(t){var a=e.tasks.findIndex((function(e){return e.id===t.id}));e.tasks.splice(a,1,t),e.closeHandler()},startedTask:function(t){var a=e.tasks.find((function(e){return!0===e.isRunning}));a&&(i.b.info("You have a task that is running yet, so a new task will replace the task is running!"),e.replaceRunningTask(a));var n=e.tasks.find((function(e){return e.id===t}));n&&(n.isRunning=!0,n.isStopped=!1,n.isCompleted=!1,n.timeStart=+new Date)},pausedTask:function(t){var a=e.tasks.find((function(e){return e.id===t}));a&&(a.isRunning=!1,a.isStopped=!0,a.isCompleted=!1,a.duration=a.duration+ +new Date-a.timeStart,a.timeStart=0)},stopedTask:function(t){var a=e.tasks.find((function(e){return e.id===t}));a&&(a.isRunning=!1,a.isStopped=!1,a.isCompleted=!0,a.duration=a.timeStart>0?a.duration+ +new Date-a.timeStart:a.duration,a.timeStart=0)},editTask:function(t){e.selectedTask=t,e.kindOfModal="edit"},showConfirmationModal:function(t){e.kindOfModal="confirmation",e.selectedTask=t},deleteTask:function(t){var a=e.tasks.findIndex((function(e){return e.id===t}));e.tasks.splice(a,1),e.closeHandler()},getTimeAsSecondsFromTask:function(e){var t=e.timeStart>0?+new Date-e.timeStart+e.duration:e.duration;return Math.round(t/1e3)},getTimeAsString:function(e){var t="";if(e/3600>=1){var a=Math.floor(e/3600);t+="".concat(a,"h"),e%=3600}if(e/60>=1){var n=Math.floor(e/60);t+=" ".concat(n,"m"),e%=60}return t+=" ".concat(e,"s")},getSpendTime:function(t){var a=e.getTimeAsSecondsFromTask(t);return e.getTimeAsString(a)}}}));return l.a.useEffect((function(){var t,a=JSON.parse(localStorage.getItem("tasks")||"[]");(t=e.tasks).splice.apply(t,[0,e.tasks.length].concat(Object(c.a)(a)))}),[e]),Object(d.m)((function(){return JSON.stringify(e.tasks)}),(function(e){localStorage.setItem("tasks",e)}),{delay:500}),e}();return l.a.createElement(p.Provider,{value:e},l.a.createElement("div",{className:"main-wrapper"},l.a.createElement("div",{className:"header fixed top-0 left-0 right-0 z-10 bg-white flex-wrap py-4 px-6 border-b border-gray-300 shadow-sm flex justify-between items-center w-full"},l.a.createElement("h1",{className:"font-bold text-gray-800 text-md uppercase"},"Tasks management"),l.a.createElement("div",{className:"header__action-bar flex items-center"},l.a.createElement("button",{className:"bg-transparent hover:bg-blue-500 text-blue-700 px-2 py-1 uppercase text-xs font-bold ml-2 hover:text-white border border-blue-500 hover:border-transparent rounded",onClick:e.showCreateTaskModal},"Create a task"),l.a.createElement("button",{className:"bg-transparent hover:bg-blue-500 text-blue-700 px-2 py-1 uppercase text-xs font-bold ml-2 hover:text-white border border-blue-500 hover:border-transparent rounded",onClick:e.showReportModal},"Report"))),l.a.createElement("div",{className:"list-wrapper mx-auto max-w-sm md:max-w-lg py-4 px-6"},l.a.createElement(b,null),l.a.createElement(h,null)),e.kindOfModal&&l.a.createElement(N,null),l.a.createElement(i.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),l.a.createElement("div",{className:"py-4 px-6"},l.a.createElement("p",{className:"text-center text-gray-500 text-xs"},"\xa92020 Anton Ferkalek. All rights reserved."))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.6dc8b291.chunk.js.map