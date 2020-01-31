import Vue from "vue";
import Vuex, { GetterTree } from "vuex";
import { saveStatePlugin } from "@/plugins/saveState";
import { IBoard } from "@/interfaces/board";

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

const getters: GetterTree<IState, IState> = {
  getTask: state => (id: string) => {
    for (const column of state.board.columns) {
      for (const task of column.items) {
        if (task.id === id) {
          return task;
        }
      }
    }
  }
};

// tslint:disable-next-line:typedef
const localStorageBoard = localStorage.getItem("board");
if (localStorageBoard) {
  state.board = JSON.parse(localStorageBoard);
}

export default new Vuex.Store({
  state,
  getters,
  mutations: {},
  actions: {},
  modules: {},
  plugins: [saveStatePlugin]
});
