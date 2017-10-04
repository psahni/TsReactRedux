import * as React from "react";

export class AddFriend extends React.Component<any, undefined> {
    render() {
        return (
          <form>
            <input type='text'/>
            <button type="submit">Add</button>
					</form>
        );
    }
}