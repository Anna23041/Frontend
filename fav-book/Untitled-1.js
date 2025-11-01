
        fetch("http://localhost:3000/api/books")
        .then(r => r.json())
        .then(list => console.log(list))

        fetch("http://localhost:3000/api/books")
        .then(response => response.json()) 



                fetch(" http://localhost:3000/api/favorites/2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title:"My book" })
      })
        .then(r => r.json())
        .then(list => console.log("Создано:", list));


        fetch(" http://localhost:3000/api/favorites/2", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title:"Pride and Prejudice" })
        })
      .then(r => r.json())
      .then(list => console.log("Удалено:", list));


      
      fetch("http://localhost:3000/api/health")
      .then(r => r.json())
      .then(list => console.log(list))




      fetch("http://localhost:3000/api/favorites")
      .then(response => response.json()).then(list => console.log(list))

//


