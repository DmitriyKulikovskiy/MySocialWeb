export const followUnfollowMethodItem = (items,itemId, objPropName, NewObjProps) => {
    return items.map( u =>  {
        if (u[objPropName] === itemId) {
            return {...u, ...NewObjProps}
        }
        return u;
    })
}


/*  
 users: state.users.map( u =>  {
    if (u.id === action.userId) {
        return {...u, followed: true}
    }
    return u;
}) 

*/
