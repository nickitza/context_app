import React from "react";

  const AccountContext = React.createContext();

  export const AccountConsumer = AccountContext.Consumer

  class AccountProvider extends React.Component {
    state = {
      firstName: "Nicki",
      lastName: "Nixon",
      dateJoined: 01/25/15,
      favoriteAnimal: "Tiger",
    }
    render(){
      return(
        <AccountContext.Provider value={ this.state }>
          {this.props.children}
        </AccountContext.Provider>
      )
    }
  }
export default AccountProvider