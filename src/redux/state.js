// server's part

let state = {
  dialogsPage: {
    DialogsData: [
      { id: 1, Name: "Man1" },
      { id: 2, Name: "Man2" },
      { id: 3, Name: "Man3" },
      { id: 4, Name: "Man4" },
      { id: 5, Name: "Man5" }
    ],
    MessagesData: [
        { message: "hi Number 1" },
        { message: "hi Number 2" },
        { message: "hi Number 3" },
        { message: "hi Number 4" },
        { message: "hi Number 5" }
      ],
  },
  postPage: {
    PostData: [
      { id: 1, message: "Hi, This is very good job!", like: "20" },
      { id: 2, message: "Oh, this was pretty cool", like: "10" }
    ]
  }
};

export default state;

//   PostData={PostData} DialogsData={DialogsData} MessagesData={MessagesData}
