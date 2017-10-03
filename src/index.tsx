import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";
import { UserProfile } from "./components/UserProfile";

ReactDOM.render(
    <UserProfile userId={10} />,
    document.getElementById("example")
);