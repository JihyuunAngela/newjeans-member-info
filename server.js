const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())
app.use(express.static(__dirname + '/public'));

const newjeansMembers = {
    'minji': {
        'age': 18,
        'birthName': 'Kim Minji',
        'nationality': 'Korean'
    },
    'hanni':{
        'age': 18,
        'birthName': 'Hanni Pham',
        'birthLocation': 'Vietnamese-Australian'
    },
    'danielle':{
        'age': 17,
        'birthName': 'Danielle Marsh / Mo Jihye',
        'birthLocation': 'Korean-Australian'
    },
    'haerin':{
        'age': 16,
        'birthName': 'Kang Haerin',
        'birthLocation': 'Korean'
    },
    'hyein':{
        'age': 14,
        'birthName': 'Lee Hyein',
        'birthLocation': 'Korean'
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    // parameter name is request.params.name
    const newjeansMembersName = request.params.name.toLowerCase()

    if( newjeansMembers[newjeansMembersName] ){
        response.json(newjeansMembers[newjeansMembersName])
    }else{
        response.json(newjeansMembers['unknown'])
    }

})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})