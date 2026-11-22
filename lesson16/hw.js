const users = [
    { id: 1, name: "Tom" },
    { id: 2, name: "Jack" },
    { id: 1, name: "Tom-new" },
    { id: 3, name: "Lucy" },
    { id: 2, name: "Jack-new" }
  ];
  
  const map = new Map();
  users.forEach(user => map.set(user.id, user));

  const answer = [...map.values()]
  
  console.log(answer);