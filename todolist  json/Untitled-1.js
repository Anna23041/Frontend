// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response => response.json()) // открываем коробку
//   .then(data => {    
//     console.log("Пользователи:", data)

//     var newData = data.slice(0,5)
//     console.log(newData)

//     const newTitles = newData.map(user => user.title)
//     console.log(newTitles)

// });

// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ title:"My new book x",body:"From Anna x" })
//   })
//     .then(r => r.json())
//     .then(book => console.log("Создано:", book));


//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(r => r.json())
//     .then(book => console.log(book))


            
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(r => r.json())
        .then(list => console.log(list))

    

        fetch(" https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title:"My buisnes" })
      })
        .then(r => r.json())
        .then(list => console.log("Создано:", list));

         
        fetch(" https://jsonplaceholder.typicode.com/todos/201", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({completed:true })
          })
            .then(r => r.json())
            .then(list => console.log("Сделано", list));




        fetch(" https://jsonplaceholder.typicode.com/todos/201", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title:"My buisnes" })
          })
            .then(r => r.json())
            .then(list => console.log("Удалено:", list));
    





