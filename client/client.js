window.onload = function () {


    let links = document.getElementsByTagName("link");
    for (let cl in links)
    {
        let link = links[cl];
        if (link.rel === "stylesheet")
            link.href += "";
    }


    const body = document.body;
    console.log("APP");

    
}



// const test = document.createElement("div");
// test.innerText = "I'M ALIVE";
// body.append(test);