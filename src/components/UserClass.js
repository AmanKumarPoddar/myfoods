import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        bio: "Web Developer",
        location: "Dharan",
        avatar_url: "https://avatardummy",
      },
    };
    console.log("Child Constructor");
  }
  async componentDidMount() {
    console.log(this.props.name + " Component Did Mount");
    //API CALL
    const data = await fetch(" https://api.github.com/users/amankumarpoddar");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    //Demonstration of Cleanup
    // this.timer = setInterval(() => {
    //   console.log("Namaste React Op");
    // }, 1000);
  }
  componentDidUpdate() {
    console.log("Component Did Update");
  }
  componentWillUnmount() {
    //Demonstration of cleanup
    // clearInterval(this.timer);
    console.log("Component Will Unmount");
  }
  render() {
    console.log("Child Render");

    const { name, bio, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="avatar" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Bio: {bio}</h4>
      </div>
    );
  }
}
export default UserClass;
