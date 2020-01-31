import Vue from "vue";
import Vuex, { GetterTree } from "vuex";
import { saveStatePlugin } from "@/plugins/saveState";
import { IBoard, IBoardColumn } from "@/interfaces/board";
import { uuid } from "@/utils/uuid";

Vue.use(Vuex);

const defaultBoard: IBoard = {
  columns: [
    {
      name: "backlog",
      items: [
        {
          name: "Make a portfolio website",
          content: "do it",
          created: new Date(),
          id: "1234"
        },
        {
          name: "Change job",
          content: "also do it",
          created: new Date(),
          id: "33"
        }
      ]
    },
    {
      name: "todo",
      items: []
    },
    {
      name: "in progress",
      items: [
        {
          name: "Vue kanban board project",
          content: "already doing it",
          created: new Date(),
          id: "12345"
        }
      ]
    },
    {
      name: "done",
      items: []
    }
  ]
};

interface IState {
  board: IBoard;
}
const state: IState = {
  board: defaultBoard
};

const mutations = {
  CREATE_TASK(state, { tasks, name }) {
    tasks.push({
      id: uuid(),
      name,
      content: ""
    });
  },

  UPDATE_TASK(state, { task, key, value }) {
    Vue.set(task, key, value);
  },

  MOVE_TASK(state, { from, to, index }) {
    debugger;
    const [task] = from.splice(index, 1);
    to.push(task);
  }
};

const actions = {};

const getters: GetterTree<IState, IState> = {
  getTaskById: state => (id: string) => {
    for (const column of state.board.columns) {
      for (const task of column.items) {
        if (task.id === id) {
          return task;
        }
      }
    }
  },

  getTasksByColumnIndex: state => (columnIndex: number) =>
    state.board.columns[columnIndex].items || [],

  getColumnIndex: state => (column: IBoardColumn) =>
    state.board.columns.indexOf(column)
};

// tslint:disable-next-line:typedef
const localStorageBoard = localStorage.getItem("board");
if (localStorageBoard) {
  state.board = JSON.parse(localStorageBoard);
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {},
  plugins: [saveStatePlugin]
});
