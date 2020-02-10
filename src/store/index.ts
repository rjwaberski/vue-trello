import Vue from "vue";
import Vuex, { GetterTree } from "vuex";
import { saveStatePlugin } from "@/plugins/saveState";
import { IBoard, IBoardColumn, IBoardItem } from "@/interfaces/board";
import { uuid } from "@/utils/uuid";
import { getInitialData } from '@/utils/data';
Vue.use(Vuex);

const defaultBoard: IBoard = getInitialData();

interface IState {
  board: IBoard;
}
const state: IState = {
  board: defaultBoard
};

const mutations = {
  CREATE_TASK(
    state: IState,
    { tasks, name }: { tasks: IBoardItem[]; name: string }
  ) {
    tasks.push({
      id: uuid(),
      name,
      content: "",
      created: new Date()
    });
  },

  UPDATE_TASK(
    state: IState,
    { task, key, value }: { task: IBoardItem; key: number; value: IBoardItem }
  ) {
    Vue.set(task, key, value);
  },

  MOVE_TASK(state: IState, { from, to, index }) {
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
