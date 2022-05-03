fetch("/greet")
  .then((response) => response.json())
  .then((data) => {
    // An array of objects is returned, we want the first one
    const info = data[0];
    document.querySelector("title").innerText = "Welcome to " + info.class_num;
    document.querySelector("h1").innerText = "Welcome to " + info.class_num;
    document.querySelector("h2").innerText = info.class_name;
    document.querySelector(".comment").innerText = info.class_message
  })
