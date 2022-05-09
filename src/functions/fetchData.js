function FetchData(){
    const http = new XMLHttpRequest
    http.open('GET', 'https://brunches-database.herokuapp.com/', true)
    http.send()
    http.onload = function(){
        // console.log(http.response)
        // return (http.response)
        const a = http.response
        console.log(a)
    }
}

export default FetchData;