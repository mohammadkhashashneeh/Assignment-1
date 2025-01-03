let mystudents = ["ahmad","anas","ali",["widad","layan","esraa"]]; 


mystudents.forEach((i) => {
    if (Array.isArray(i) ) {
        i.forEach(j => {
            console.log(j.toUpperCase())
        });
        
    } else {
        console.log(i.toUpperCase())
    }
    
});