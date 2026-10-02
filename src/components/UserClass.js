import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "default",
      },
    };
    // console.log(this.props.name + "constructor is called");
  }

  componentDidMount() {
    // console.log(this.props.name + "child component did mount");
    // const data = await fetch("https://api.github.com/users/coderanjan");
    // const json = await data.json();
    // console.log(json);
    // this.setState({ userInfo: json });
    this.timer = setInterval(() => {
      console.log("anjan");
    }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.count != prevState.count) {
    }
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
    console.log("unmount");
  }
  render() {
    // console.log(this.props.name + "render is called");

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact: @anjan123</h4>
      </div>
    );
  }
}

export default UserClass;
