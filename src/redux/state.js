
let reRenderTree = () => {
  // subscribe - reRenderTree
}

let state = { // server's part
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
    NewPostText: "go to hell"
  }
};

window.state = state;
//---------------------------------------------------------------------------------------------------
export const addPost = () => { // function add post
  let newPost = {
    id: 3,
    message: state.postPage.NewPostText,
    like: 0
  };
  
  state.postPage.PostData.push(newPost);
  state.postPage.NewPostText = ''; // clear text-area

  reRenderTree(state); // we use state as method to send it to 'render function'
};

export let updateNewPostText = (NewText) => { //FLUX func

  state.postPage.NewPostText = NewText;
  reRenderTree(state);
}
//---------------------------------------------------------------------------------------------------------------
export const sendNewMessage = () => {  //send message
  let newMessage = {
    message: state.dialogsPage.NewMessage
  }

  state.dialogsPage.MessagesData.push(newMessage);
  state.dialogsPage.NewMessage = '';
  reRenderTree(state);
};

export let updateNewMessage = (newMessage) => {
  state.dialogsPage.NewMessage = newMessage;
  reRenderTree(state);
} 

export const subscribe = (observer) => { // observer -> pattern
  reRenderTree = observer;
}


export default state;


