// import React from 'react'

// const ProfilePage = () => {
//   const user = {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     role: 'Admin',
//     joinedDate: '2023-01-15',
//     lastLogin: '2024-12-20'
//   }

//   return (
//     <div style={styles.container}>
//       <div style={styles.profileBox}>
//         <h2 style={styles.title}>User Profile</h2>
//         <div style={styles.infoRow}>
//           <label htmlFor='name' style={styles.label}>
//             Name:
//           </label>
//           <input
//             type='text'
//             id='name'
//             value={user.name}
//             style={styles.input}
//             readOnly
//           />
//         </div>
//         <div style={styles.infoRow}>
//           <label htmlFor='email' style={styles.label}>
//             Email:
//           </label>
//           <input
//             type='email'
//             id='email'
//             value={user.email}
//             style={styles.input}
//             readOnly
//           />
//         </div>
//         <div style={styles.infoRow}>
//           <label htmlFor='role' style={styles.label}>
//             Role:
//           </label>
//           <input
//             type='text'
//             id='role'
//             value={user.role}
//             style={styles.input}
//             readOnly
//           />
//         </div>
//         <div style={styles.infoRow}>
//           <label htmlFor='joinedDate' style={styles.label}>
//             Joined Date:
//           </label>
//           <input
//             type='text'
//             id='joinedDate'
//             value={user.joinedDate}
//             style={styles.input}
//             readOnly
//           />
//         </div>
//         <div style={styles.infoRow}>
//           <label htmlFor='lastLogin' style={styles.label}>
//             Last Login:
//           </label>
//           <input
//             type='text'
//             id='lastLogin'
//             value={user.lastLogin}
//             style={styles.input}
//             // readOnly
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',

//     background: "linear-gradient(to bottom right, #39b996, white)",

//     borderRadius: '10px'
//   },
//   profileBox: {
//     width: '600px',
//     padding: '30px',
//     borderRadius: '10px',
//     backgroundColor: '#fff',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     textAlign: 'left'
//   },
//   title: {
//     textAlign: 'center',
//     marginBottom: '20px',
//     fontSize: '2rem',
//     color: '#333'
//   },
//   infoRow: {
//     display: 'flex',
//     flexDirection: 'column',
//     marginBottom: '15px'
//   },
//   label: {
//     marginBottom: '5px',
//     fontSize: '1rem',
//     color: '#555'
//   },
//   input: {
//     padding: '10px',
//     fontSize: '1rem',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//     backgroundColor: '#f9f9f9'
//   }
// }

// export default ProfilePage

import React from 'react'

interface User {
  name: string
  email: string
  role: string
  joinedDate: string
  lastLogin: string
}

const ProfilePage: React.FC = () => {
  const user: User = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    joinedDate: '2023-01-15',
    lastLogin: '2024-12-20'
  }
  

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'white'
      }}
    >
      <div
        style={{
          width: '60vw',
          padding: '40px',
          borderRadius: '10px',
          background: 'linear-gradient(to bottom right, #39b996,black)',
          boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0)',
          textAlign: 'left',
          color: 'white'
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '20px',
            fontSize: '2rem'
          }}
        >
          User Profile
        </h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '15px'
          }}
        >
          <label htmlFor='name' style={styles.label}>
            Name:
          </label>
          <input
            type='text'
            id='name'
            value={user.name}
            style={styles.input}
            readOnly
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '15px'
          }}
        >
          <label htmlFor='email' style={styles.label}>
            Email:
          </label>
          <input
            type='email'
            id='email'
            value={user.email}
            style={styles.input}
            readOnly
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '15px'
          }}
        >
          <label htmlFor='role' style={styles.label}>
            Role:
          </label>
          <input
            type='text'
            id='role'
            value={user.role}
            style={styles.input}
            readOnly
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '15px'
          }}
        >
          <label htmlFor='joinedDate' style={styles.label}>
            Joined Date:
          </label>
          <input
            type='text'
            id='joinedDate'
            value={user.joinedDate}
            style={styles.input}
            readOnly
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '15px'
          }}
        >
          <label htmlFor='lastLogin' style={styles.label}>
            Last Login:
          </label>
          <input
            type='text'
            id='lastLogin'
            value={user.lastLogin}
            style={styles.input}
            readOnly
          />
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'white'
  },
  profileBox: {
    width: '60vw',
    padding: '40px',
    borderRadius: '10px',
    background: 'linear-gradient(to bottom right, #39b996,black)',
    boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0)',
    textAlign: 'left',
    color: 'white'
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '2rem'
  },

  label: {
    marginBottom: '5px',
    fontSize: '1rem',
    color: 'white'
  },
  input: {
    padding: '8px',
    //   backgroundColor:"gray",
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#ccc'
  }
}

export default ProfilePage
