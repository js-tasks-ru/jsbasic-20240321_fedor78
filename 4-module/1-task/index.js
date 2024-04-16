function makeFriendsList(friends) {
  const elemUl = document.createElement("ul");
  friends.map((friend) => {
    let elemLi = document.createElement("li");
    elemLi.textContent = friend.firstName + friend.lastName;
    elemUl.appendChild(elemLi);
  });
  return elemUl;
}
