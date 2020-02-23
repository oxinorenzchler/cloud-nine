const initialState = {
    projects:[
        {id:1, title:'Enable Sim Card', content:'dlksajdlksjaldjlksadkjaksdklsjkljdklsjlkdlka'},
        {id:2, title:'Jollibee Bida Ang Saya', content:'dlksajdlksjaldjlksadkjaksdklsjkljdklsjlkdlka'},
        {id:3, title:'Astoron 735', content:'dlksajdlksjaldjlksadkjaksdklsjkljdklsjlkdlka'}
    ]
}

const projectReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT_REQUEST':
            console.log('created project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('error in creating project', action.err) 
            return state
        default: return state
    }
}

export default projectReducer