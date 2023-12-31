import React, {useState} from 'react'

const Inputs = () => {
  const [userRegistration, setUserRegistration] = useState({
    username: '', email:'', phone:'',branch:''})

    const [records, setRecords] = useState([]);

    const handleInput =(e) =>{
const name = e.target.name;
const value = e.target.value;
setUserRegistration({...userRegistration, [name]:value })
    }

const sub = async (e)=> {
e.preventDefault();
const { username, email, phone,branch} = userRegistration;
if(username && email && phone && branch){
const res = await fetch("https://iitbhu-18a05-default-rtdb.firebaseio.com/userDataRecords.json",
{
  method:"POST",
  headers:{
    "Content-Type":"application/json",
  },
  body: JSON.stringify({
username, 
    email, 
    phone,
    branch,
  }),
}
);
if(!res){
  alert('Error while submitting form')  ;   
  return false
  }else{
    setUserRegistration( {username: '', email:'', phone:'',branch:''})
    alert(`Form submitted successfully`);
  }
}else{
    setUserRegistration( {username: '', email:'', phone:'',branch:''})
  alert('Error while submitting form')  ;  
}

}
    
  return (
<>
    <div className="form-control my-3 ak">
        <header>
            <h2>ECell Club IIT(BHU)</h2>
            <hr/>
        </header>
    <form method="POST" action="" onSubmit= { sub }>

    <div className='d-flex flex-column mb-3'>
    
        <label htmlFor="username"><h3>StudentName</h3></label>
        <input type="text" autoComplete="off" className='form-input'
        value={userRegistration.username}
        onChange={handleInput}
placeholder='studentName'
        name='username' id='username'/>
    </div>
    <div className='d-flex flex-column mb-3'>
        <label htmlFor="email"><h3>Email-Id</h3></label>
        <input type="text" autoComplete="off" className='form-input'
        value={userRegistration.email}
        onChange={handleInput}
placeholder='firstname.lastname.branchYear@iitbhu.ac.in'
        name='email' id='email'/>
    </div>
    <div className='d-flex flex-column mb-3'>
        <label htmlFor="phone"><h3>Phone</h3></label>
        <input type="text" autoComplete="off" className='form-input'
        value={userRegistration.phone}
        onChange={handleInput}
placeholder='Phone 000-000-0000'
        name='phone' id='phone'/>
    </div>
    <div className='d-flex flex-column mb-3'>
        <label htmlFor="branch"><h3>Specialisation</h3></label>
        <input type="text" autoComplete="off" className='form-input'
        value={userRegistration.branch}
        onChange={handleInput}
        placeholder='department'
        name='branch' id='branch'/>
    </div>
    <button className='btn' type='submit'>Submit</button>
    </form>
    </div>
    <div>
     {
      records.map((cE)=>{
        const { id,username,email,phone,branch} = cE;
        return(
          <div className="nda" key={cE.id}>
            <p>{username}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{branch}</p>
          </div>

        )
      })
     }
    </div>
    </>
  )
}

export default Inputs
