import * as React from "react";
import { UserInspector } from './UserInspector';
export interface ProfieProps { userId: Number }

export class UserProfile extends React.Component<ProfieProps, any> {

    constructor() {
      super();       
      this.state = {
        name: 'Prashant Sahni',
        friendsCount: 3
      }
    }

    componentWillMount() {
    }

    displayFriends(page: string = '') {
        const classNames = page == 'profile' ? 'image-container friends m-t-10 m-l-10' : 'user-friends-list p-5';
        
        return ['Pankaj', 'Ashish', 'Diljohn'].map((name) => {
            return (
              <div key={name} className={classNames}>
                <span key={name}> {name}</span>
              </div>
            );
        });
    }



    render() {
        return (
             <div className="container d-flex">
                <div className="left-container">
                    <h3 className="heading">User Profile</h3>
                    <div className="d-flex m-b-10 m-l-10">
                        <div className="image-container">
					    </div>
					    <div className="user-name m-l-10">                  
						    <h1>{this.state.name}</h1>
					    </div>
                        <div className="friends-count">
                            Friends Count: <span className="count">{this.state.friendsCount}</span>
                        </div>                                              
                    </div>
                    <div className="d-flex friends-row">
                        {this.displayFriends('profile')}                        
                    </div>
                </div>
                <div className="right-container">
                    <h3 className="p-5">Friends</h3>
				    <div className="p-5">
                        <UserInspector/>
				    </div>                
                </div>
            </div>
        )
    }
}