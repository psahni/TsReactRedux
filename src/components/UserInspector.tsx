import * as React from "react";
import { AddFriend } from './AddFriend';
import { FriendList } from './FriendList';

export class UserInspector extends React.Component<undefined, undefined> {
    render() {
        return (
          <div>
            <FriendList friends={['A', 'B', 'C']}/>
            <AddFriend/>
          </div>
        );
    }
}