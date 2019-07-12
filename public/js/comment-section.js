function post() {
  //collect user info
  let username = document.getElementById('username').value;
  let comment = document.getElementById('comment').value;
  let commentTimeStamp = document.getElementById('commentTimeStamp').value;
  //Create new tags
  let h1 = document.createElement("strong");
  let h3 = document.createElement("p");
  let p = document.createElement("p");
  let d = new Date();
  //put user into in the tags
  h1.innerHTML = username;
	h3.innerHTML = comment;
  p.innerHTML = d.toString();
  //put the tags into a new div for people to see
  document.getElementById("commentTimeStamp").appendChild(h1);
	document.getElementById("commentTimeStamp").appendChild(h3);
  document.getElementById("commentTimeStamp").appendChild(p);
};
