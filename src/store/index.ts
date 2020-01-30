import Vue from "vue";
import Vuex from "vuex";
import { saveStatePlugin } from "@/plugins/saveState";
import { IBoard } from "@/interfaces/board";

Vue.use(Vuex);

const defaultBoard: IBoard = {
  columns: [
    {
      name: "backlog",
      items: [
        {
          value: "Make a portfolio website",
          created: new Date(),
          id: "1234"
        },
        {
          value: "Change job",
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
          value: "Vue kanban board project",
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

// tslint:disable-next-line:typedef
const localStorageBoard = localStorage.getItem("board");
if (localStorageBoard) {
  state.board = JSON.parse(localStorageBoard);
}

export default new Vuex.Store({
  state,
  mutations: {},
  actions: {},
  modules: {},
  plugins: [saveStatePlugin]
});
