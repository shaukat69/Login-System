// Initial State For Context API 
export const initialState = null;

export const reducer = (state, action) => {
    if(action.type === "USER"){
        // here we will get payload value from login and logout page 
        return action.payload;
    }
    
    // If payload is true then state will be true 
    return state;
}