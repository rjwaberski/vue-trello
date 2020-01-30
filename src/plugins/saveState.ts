import { Store, Mutation } from "vuex";

export function saveStatePlugin(store: Store<any>): void {
  store.subscribe((mutation: Mutation<any>, state: any) => {
    localStorage.setItem("board", JSON.stringify(state.board));
  });
}
