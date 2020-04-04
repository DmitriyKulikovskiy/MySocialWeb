const SEND_MESSAGE = 'SEND_MESSAGE';

  
let initialState = {  
    DialogsData: [
        { id: 1, Name: "John Price" },
        { id: 2, Name: "Antony Hopkins" },
        { id: 3, Name: "Marina Wonks" },
        { id: 4, Name: "Lara Power" },
        { id: 5, Name: "Ronda Rou" }
      ],
      MessagesData: [
        { message: "hi Number 1" },
        { message: "hi Number 2" },
        { message: "hi Number 3" },
        { message: "hi Number 4" },
        { message: "hi Number 5" }
      ]
}
    const dialogsPageReducer = (state = initialState,action) => {
        switch (action.type) {
            case SEND_MESSAGE: {
                let newMessage = action.NewMessage;
                return {
                ...state,
                MessagesData: [...state.MessagesData,{id: 6, message: newMessage}]
                }
            }
            default: 
                return state;
        }
    
    }
    
//export action objects to Messages
export const ActionCreatorAddMessage = (NewMessage) => ({type: 'SEND_MESSAGE', NewMessage});

export default dialogsPageReducer;