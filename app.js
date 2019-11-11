
    window.onload = function(){
        var searchButton = document.getElementById("search");
        var result = document.getElementById("result");
        searchButton.onclick = function(){
            var xhr = new XMLHttpRequest();
            var url = "/superheroes.php"; 
            xhr.onreadystatechange = search;

            xhr.open('GET', url, true);
            xhr.send("s = superhero");

            function search(){
                if(xhr.readyState === XMLHttpRequest.DONE){
                    if(xhr.status === 200){
                        var response = xhr.responseText;
                        result.innerHTML = response;
                    }else{
                        alert("Superhero not found");
                    }
                }
            }
        }
    }