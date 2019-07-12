function post() {
  let username = document.getElementById('username').value;
  let comment = document.getElementById('comment').value;
  let commentTimeStamp = document.getElementById('commentTimeStamp').value;

  let d = new Date();
  let p = document.createElement("p");
  let h1 = document.createElement("h1");
  let h3 = document.createElement("h3");

  p.innerHTML = d.toString();
  h1.innerHTML = username;
	h3.innerHTML = comment;

  document.getElementById("commentTimeStamp").appendChild(p);
  document.getElementById("commentTimeStamp").appendChild(h1);
	document.getElementById("commentTimeStamp").appendChild(h3);
};
