
function searchName(searchWord, limit , callback){
    const name = [

        "Abigail", "Alexandra", "Alison",        
        "Amanda", "Angela", "Bella",     
        "Carol", "Caroline", "Carolyn",      
        "Deirdre", "Diana", "Elizabeth",       
        "Ella", "Faith", "Olivia", "Penelope"]
    
    let myName = name.filter(cari => cari.includes(searchWord))
    let batas = myName.slice(0,limit)
    
    callback(batas)

}

//function 2
function showName(batas)
    console.log(batas)
}

searchName("an",3, showName)