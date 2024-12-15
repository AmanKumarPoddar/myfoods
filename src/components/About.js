import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent Component Did Mount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <UserContext.Consumer>
          {(data) => (
            <h1 className="font-bold text-xl">
              Logged User:{data.loggedInUser}
            </h1>
          )}
        </UserContext.Consumer>
        <h2>
          This portion of the webpage refers to the working of Life Cycle
          Methods in Class Based Components
        </h2>

        <UserClass name={"Aman"} location={"Dharan"} contact={"9812310120"} />
        <UserClass
          name={"Amadsdan"}
          location={"Dharan"}
          contact={"9812310120"}
        />
        {/* <User /> */}
      </div>
    );
  }
}

export default About;
