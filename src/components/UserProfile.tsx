import * as React from "react";

export class UserProfile extends React.Component<any, any> {
    render() {
        return (
             <div className="container d-flex">
                <div className="left-container">
                    <h3 className="heading">User Profile</h3>
                    <div className="d-flex m-b-10 m-l-10">
                        <div className="image-container">
					    </div>
					    <div className="user-name m-l-10">                  
						    <h1>Prashant Sahni</h1>
					    </div>                        
                    </div>
                </div> 
            </div>
        )
    }
}