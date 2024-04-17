
import React, { useState } from 'react'; 
import data from './data.json';

function Home(){

    const [users, setUsers] = useState(data.users)
    const [text, setText] = useState("");


    const handleCheck = (Arr, val) => {
        return Arr.find(item => item.includes(val));
    }
    
    const searchInterest = (interest) => {
        setText(interest)
        if(interest.length > 0){
        let results = users.filter(user => {
            let interestsArr = user.interests; 
            let rst = handleCheck(interestsArr, interest)
            if(rst){
                return user 
            }
     
         });

         setUsers(results)
        } else {
            setUsers(data.users)
            setText("")
        }
    }



    return(
        <div className="container">
            <div className="row" style={{ marginTop: 20, marginBottom: 20}}>
                <div className="col-md-12">
                    <input           
                        value={text}
                        type="string" 
                        placeholder="Enter your keyword"  
                        onChange={(e) => searchInterest(e.target.value)}/>
                </div>
            </div>

            <div className="results">
                <div className="title">
                    Your Search Interests:  {text}
                </div>
            </div>

            <div  className='content'>
                            <div className='usertitle'>
                                ID
                            </div>
                            <div className='usertitle'>
                                Name
                            </div>
                            <div className='usertitle'>
                                Gender 
                            </div>
                            <div className='usertitle'>
                                Location 
                            </div>

                            <div className='usertitle'>
                                Interests  
                            </div>
            </div>
        
            { users.map( (user, index) => 
                {
                    return(
                        <div key={index} className='content'>
                            <div className='usertitle'>
                                {user.id}
                            </div>
                            <div className='usertitle'>
                                {user.name}
                            </div>
                            <div className='usertitle'>
                                {user.gender}
                            </div>
                            <div className='usertitle'>
                                {user.location}
                            </div>
                            <div className='usertitle' style={{ width: 110}}>
                                    {user.interests.map((interest) => (
                                        <div key={interest}>
                                            {interest}
                                        </div>
                                    )
                                )}
                            </div>
                            
                        </div>
                    )
                   
                }
            )}
        </div>
    )

}


export default Home;