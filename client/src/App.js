import React from "react";
import Login from "./components/Login/Login";
import NewUser from "./components/NewUser/NewUser";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: []
    };
  }

  // componentDidMount() {
  //   axios
  //     .get("")
  //     .then(res => {
  //       this.setState({ schools: res.data });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       this.setState({ error: err });
  //     });
  // }

  // addSchool = school => {
  //   axios
  //     .post("", school)
  //     .then(res => {
  //       this.setState({ schools: res.data });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       this.setState({ error: err });
  //     });
  // };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Login />

          <NewUser />

          <p>Test for GitHub PR</p>
        </header>
      </div>
    );
  }
}
export default App;
