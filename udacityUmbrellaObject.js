const umbrella = {
  color: "pink",
  isOpen: false,
  open: function() { 
    if (umbrella.isOpen) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
   },
  close: function() {
    if (!umbrella.isOpen) {
      return "The umbrella is already closed!";
    } else {
      umbrella.isOpen = false;
      return "Julia closes the umbrella";
    }
  }
};


const facebookProfile = {
  name: 'Daniel',
  friends: 5,
  messages: ['This is where you will find posts!'],
  
  postMessage: function postMessage(message) {
      messages.push(message);
  },
  
  deleteMessage: function deleteMessage(index) {
      messages.splice(index, 1);
  },
  
  addFriend: function addFriend() {
      friends++;
  },
  
  removeFriend: function removeFriend() {
      friends--;
  }
};