// import React, { useEffect } from "react";
// // import { connect } from "react-redux";
// import { fetchUsers } from "./userActions";

// const UserList = ({ userData, fetchUsers }) => {
//   useEffect(() => {
//     fetchUsers();
//   }, [fetchUsers]);
//   return (
//     <div>
//       {userData.loading ? (
//         <h3>Loading...</h3>
//       ) : userData.error ? (
//         <h3>{userData.error}</h3>
//       ) : (
//         <div>
//           <h3>Users List</h3>
//           <div>
//             {userData &&
//               userData.users &&
//               userData.users.map((user) => <p>{user.name}</p>)}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     userData: state,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchUsers: () => dispatch(fetchUsers()),
//   };
// };
// export default (mapStateToProps, mapDispatchToProps)(UserList);
