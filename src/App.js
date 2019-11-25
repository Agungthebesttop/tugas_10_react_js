import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";
import {Grid,Container, Flag, Icon, Input, Header, Image, Divider, Label, Button} from "semantic-ui-react";

class App extends Component {
  render(){

    return(
      <div>
      <br />
        <Grid container >
          <Grid.Column>
              <Flag name='id' />
          </Grid.Column>
          <Grid.Column>
              <Icon name='angle left' />
          </Grid.Column>
          <Grid.Column>
              <Icon name='angle right' />
          </Grid.Column>
          <Grid.Column width={10}>
              <Input fluid icon='star' placeholder='Search...' />
          </Grid.Column>
          <Grid.Column width={3}>
            <Header as='h3'>
              <Image src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> Martino
            </Header>
          </Grid.Column>
        </Grid>
        <Divider horizontal>SELAMAT DATANG !!!</Divider>
        <Container textAlign="right">
          <Label as='a' color='teal' tag>SPORT</Label>
        </Container>
        <br /><br />
        <Container textAlign="center">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Where does it come from?
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </p>
          <Button color='teal' icon labelPosition='left'>
            Tambahkan Tautan Ke List
            <Icon name='plus' />
          </Button>
        </Container>
      </div>
    )
  }
}
export default App;
