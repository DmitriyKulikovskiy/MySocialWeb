
let store = {
  _reRenderTree() {
    // subscribe - reRenderTree
  },
  subscribe(observer) { // observer -> pattern
    this._reRenderTree = observer;
  },

 //--------------------------------------------------------------------
  _state: { // server's part
  dialogsPage: {
    DialogsData: [
      { id: 1, Name: "John Price" },
      { id: 2, Name: "Antony Hopkins" },
      { id: 3, Name: "Marina Wonks" },
      { id: 4, Name: "Lara Power" },
      { id: 5, Name: "Ronda Rou" }
    ],
    MessagesData: [
        { message: "hi Number 1",},
        { message: "hi Number 2" },
        { message: "hi Number 3" },
        { message: "hi Number 4" },
        { message: "hi Number 5" }
      ],
    NewMessage: "hello"
  },
  postPage: {
    PostData: [
      { id: 1, message: "Hi, This is very good job!", like: 20 },
      { id: 2, message: "Oh, this was pretty cool", like: 10 }
    ],
    NewPostText: "Darkness"
  }
  },
  getState() {
    return this._state;
  },
  //--------------------------------------------------------------------
  dispatch(action) {  //action - object  {type: 'ADD-POST'}
  debugger;
    if(action.type === 'ADD-POST') { // post's dispatch
      let newPost = {
        id: 3,
        message: this._state.postPage.NewPostText,
        like: 0
      };
      
      this._state.postPage.PostData.push(newPost);
      this._state.postPage.NewPostText = ''; // clear text-area
      this._reRenderTree(this._state); // we use state as method to send it to 'render function'
      
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        this._state.postPage.NewPostText = action.newText;
        this._reRenderTree(this._state);
    }


    


























    if(action.type === 'SEND-MESSAGE') { // message's dispatch
      let newMessage = {
       message: this._state.dialogsPage.NewMessage
      }
  
      this._state.dialogsPage.MessagesData.push(newMessage);
      this._state.dialogsPage.NewMessage = '';
      this._reRenderTree(this._state);

    } else if (action.type === 'UPDATE-NEW-MESSAGE') {
      this._state.dialogsPage.NewMessage = action.newMessage;
      this._reRenderTree(this._state);
    }
  }
}

export default store;


