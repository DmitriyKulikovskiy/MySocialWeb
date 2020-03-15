const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';
  
  
  const dialogsPageReducer = (state,action) => {
        switch (action.type) {
            case SEND_MESSAGE:
                let newMessage = state.NewMessage;
                state.MessagesData.push({id: 6, message: newMessage});
                state.NewMessage = '';
                return state;  
            case UPDATE_NEW_MESSAGE:
                state.NewMessage = action.messageText;
                return state;
            default: 
                return state;
        }
    
    }
    
//export action objects to Messages
export const ActionCreatorAddMessage = () => ({type: 'SEND_MESSAGE'});
export const ActionCreatorUpdateMessage = (text) => ({type: 'UPDATE_NEW_MESSAGE', messageText: text})

export default dialogsPageReducer;