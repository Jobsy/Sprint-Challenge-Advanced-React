import React from "react";
import { Card, Icon, Button, Header, Image, Modal } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class Players extends React.Component {
  constructor(props) {
    super(props);
    this.colorArr = [
      "red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black", "red",
      "red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black", "red",
      "red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black", "red",
      "red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black", "red",
      "red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black", "red",
      "red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black", "red",
      "red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black", "red",
      "red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black", "red",
    ]
  }

  render() {
    return (
      <div>
        <h1>Players</h1>
        <div class="ui four cards">
          {this.props.playersProps === [] ? null : this.props.playersProps.map((player, index) => (
            this.color = `${this.colorArr[index]} card`,
            <a class={this.color}>
              <div class="image">
                <img src={player.avatar_url} />
                <p>{player.name}</p>
              </div>

              <Modal trigger={<Button>Show Details</Button>}>
                <Modal.Header>{player.login}</Modal.Header>
                <Modal.Content image>
                  <Image wrapped size='medium' src={player.avatar_url} />
                  <Modal.Description>
                    <Header>{player.name}'s Profile</Header>
                    <p>Player Place of Birth: <h4>{player.country}</h4></p>
                    <p>Total number of player searches: <h4>{player.searches}</h4></p>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </a>
          ))}
        </div>
      </div>
    )
  }
}


export default Players;