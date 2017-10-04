import * as React from "react";

export interface FriendProps { friends: Array<string> };

export class FriendList extends React.Component<FriendProps, undefined> {
  constructor() {
    super();
  }

  componentWillMount() {
  }

  display() {
    const friends = this.props.friends;
    
    return friends.map((name) => {
      return <div className="user-friends-list p-5" key={name}>{name}</div>
    })
  }

  public render() {
    return (
      <div>
        {this.display()}
      </div>
    );
  }
}