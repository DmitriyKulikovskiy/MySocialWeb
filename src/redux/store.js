// import dialogsPageReducer from "./dialogsPage-reducer";
// import postPageReducer from "./postPage-reducer";

// let store = {
//   _reRenderTree() {
//     // subscribe - reRenderTree
//   },
//   subscribe(observer) {
//     // observer -> pattern
//     this._reRenderTree = observer;
//   },
//   _state: {
//     // server's part
//     dialogsPage: {
//       DialogsData: [
//         { id: 1, Name: "John Price" },
//         { id: 2, Name: "Antony Hopkins" },
//         { id: 3, Name: "Marina Wonks" },
//         { id: 4, Name: "Lara Power" },
//         { id: 5, Name: "Ronda Rou" }
//       ],
//       MessagesData: [
//         { message: "hi Number 1" },
//         { message: "hi Number 2" },
//         { message: "hi Number 3" },
//         { message: "hi Number 4" },
//         { message: "hi Number 5" }
//       ],
//       NewMessage: ""
//     },
//     postPage: {
//       PostData: [
//         { id: 1, message: "Hi, This is very good job!", like: 20 },
//         { id: 2, message: "Oh, this was pretty cool", like: 10 }
//       ],
//       NewPostText: ""
//     }
//   },
//   getState() {
//     return this._state;
//   },

//   dispatch(action) {//action - object  {type: 'ADD-POST'}

//     this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
//     this._state.postPage = postPageReducer(this._state.postPage, action);
//     this._reRenderTree(this._state);
//   }
// };


// export default store;
