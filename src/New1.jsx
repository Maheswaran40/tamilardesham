
// import React, { useEffect, useState } from 'react'
// import './New1.css'  

// function New1() {
//   const[users,setUsers]=useState([]);
//   const[uid,setUid]=useState("");
//   const[utitle,setUtitle]=useState("");
//   const [newUSer,setNewuser]=useState("addUser");
  
//     useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((response)=>(response.json()))
//     .then((json)=>setUsers(json))
//   },[])
//   return (
//     <div className='maindiv'>
//       <table>
//         <thead>
//           <th>ID</th>
//           <th>TITLE</th>
//           <th>completed</th>
//           <th>option</th>
//         </thead>
//         <tbody>
//           {users.map((user)=>
//           <tr key={user.id}>
//             <td>{user.id}</td>
//             <td>{user.title}</td>
//             <td>{user.completed}</td>
//             <td><button id='updatebut'>update</button><button id='deletebut' >delete</button> </td>
//           </tr>
// )}
//         </tbody>
//       </table>
//       <div className='indiv'>
//       <input type="text" value={userID} placeholder='Id'/>
//       <input type="text"  value={userTitle} placeholder='Title' />
//       <button onClick={(addUser)=>{(userId.target.value)(userTitle.target.value)}}>Add User</button>
//       </div>
//     </div>
//   )
// }

        
                
             
// export default New1