import React from "react";
import { toast } from "react-toastify";
import { useLocalStore } from "mobx-react";
import { reaction } from "mobx";
import { ITask } from "./interfaces";

const ApplicationService = React.createContext<
  ReturnType<typeof useApplicationService>
>(null as any);

export const useApplicationService = () => {
  const state = useLocalStore(() => ({
    tasks: [] as ITask[],
    kindOfModal: "",
    selectedTask: {} as ITask,
    get tasksWithTime() {
      return state.tasks.filter((t) => t.timeStart !== 0 || t.duration !== 0);
    },
    get isRunningTask() {
      return state.tasks.find((t) => t.isRunning === true);
    },
    get arePausedTasks() {
      return state.tasks.filter((t) => t.isStopped === true);
    },
    appendTask: (task: ITask): void => {
      state.tasks.push(task);
    },
    prependTask: (task: ITask): void => {
      state.tasks.unshift(task);
    },
    showCreateTaskModal(): void {
      state.kindOfModal = "create";
    },
    showReportModal(): void {
      state.kindOfModal = "report";
    },
    closeHandler(): void {
      state.kindOfModal = "";
    },
    createTask(task: ITask): void {
      state.appendTask(task);
      state.closeHandler();
    },
    createTaskAndActivate(task: ITask): void {
      if (state.tasks.find((task) => task.isRunning === true)) {
        task.isRunning = false;
        task.isStopped = true;

        toast.info(
          "You have a task that is running yet, so this task added to active task but as stopped!"
        );
      }

      state.prependTask(task);
      state.closeHandler();
    },
    updateTask(task: ITask): void {
      const inxTask = state.tasks.findIndex((t) => t.id === task.id);
      state.tasks.splice(inxTask, 1, task);
      state.closeHandler();
    },
    startedTask(id: number): void {
      const runningTask = state.tasks.find((task) => task.isRunning === true);
      if (runningTask) {
        toast.info(
          "You have a task that is running yet. It will stoped and running a task that you choosed?"
        );

        runningTask.isRunning = false;
        runningTask.isStopped = true;
        runningTask.duration = +new Date() - runningTask.timeStart;
        runningTask.timeStart = 0;
      }

      const task = state.tasks.find((t) => t.id === id);
      if (task) {
        task.isRunning = true;
        task.isStopped = false;
        task.isCompleted = false;
        task.timeStart = +new Date();
      }
    },
    pausedTask(id: number): void {
      const task = state.tasks.find((t) => t.id === id);
      if (task) {
        task.isRunning = false;
        task.isStopped = true;
        task.isCompleted = false;
        task.duration = task.duration + +new Date() - task.timeStart;
        task.timeStart = 0;
      }
    },
    stopedTask(id: number): void {
      const task = state.tasks.find((t) => t.id === id);
      if (task) {
        task.isRunning = false;
        task.isStopped = false;
        task.isCompleted = true;
        task.duration =
          task.timeStart > 0
            ? task.duration + +new Date() - task.timeStart
            : task.duration;
        task.timeStart = 0;
      }
    },
    editTask: (task: ITask): void => {
      state.selectedTask = task;
      state.kindOfModal = "edit";
    },
    showConfirmationModal: (task: ITask): void => {
      state.kindOfModal = "confirmation";
      state.selectedTask = task;
    },
    deleteTask: (id: number): void => {
      const inxTask = state.tasks.findIndex((t) => t.id === id);
      state.tasks.splice(inxTask, 1);
      state.closeHandler();
    },
    getTimeAsSecondsFromTask: (task: ITask): number => {
      const taskDuration =
        task.timeStart > 0
          ? +new Date() - task.timeStart + task.duration
          : task.duration;
      return Math.round(taskDuration / 1000);
    },
    getTimeAsString: (secondsTime: number): string => {
      let spandTimeStr = "";

      if (secondsTime / 3600 >= 1) {
        const hours = Math.floor(secondsTime / 3600);
        spandTimeStr += `${hours}h`;
        secondsTime = secondsTime % 3600;
      }

      if (secondsTime / 60 >= 1) {
        const minutes = Math.floor(secondsTime / 60);
        spandTimeStr += ` ${minutes}m`;
        secondsTime = secondsTime % 60;
      }
      spandTimeStr += ` ${secondsTime}s`;

      return spandTimeStr;
    },
    getSpendTime: (task: ITask): string => {
      let secondsTime = state.getTimeAsSecondsFromTask(task);
      return state.getTimeAsString(secondsTime);
    },
  }));

  React.useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    state.tasks.splice(0, state.tasks.length, ...savedTasks);
  }, [state]);

  reaction(
    () => JSON.stringify(state.tasks),
    (json) => {
      localStorage.setItem("tasks", json);
    },
    {
      delay: 500,
    }
  );

  return state;
};

export default ApplicationService;
