import React, { Component } from 'react'
import { Grid, Icon, Header, Button, Menu } from 'semantic-ui-react'

export default class SubMenu extends Component {
    state = {}

  	handleItemClick = (e, { name }) => this.setState({ activeItem: name })
	render() {
    		const { activeItem } = this.state


	return (
        <Grid.Row>
            <Grid.Column width={1}>
	            <Icon name='archive'/>
            </Grid.Column>
            <Grid.Column width={6}>
	            <Header as='h2' color='blue'>JoeDeveloper/My Project</Header>
            </Grid.Column>
            <Grid.Column width={3}>
            </Grid.Column>
            <Grid.Column width={2}>
	            <Button content='Watch' icon='unhide' label='25' labelPosition='right' />
            </Grid.Column>
            <Grid.Column width={2}>
                <Button content='Star' icon='star' label='19' labelPosition='right' />
            </Grid.Column>
            <Grid.Column width={2}>
	            <Button content='Fork' icon='fork' label='3' labelPosition='right' />
            </Grid.Column>
            <Grid.Column width={16}>
	            <Menu tabular>
        	        <Menu.Item icon='code' name='Code'  active={activeItem === 'Code'} onClick={this.handleItemClick} />
        	        <Menu.Item icon='warning circle' name='Issues' active={activeItem === 'Issues'} onClick={this.handleItemClick} />
           	        <Menu.Item icon='share alternate' name='Pullrequests' active={activeItem === 'Pullrequests'} onClick={this.handleItemClick} />
              	    <Menu.Item icon='clone' name='Projects' active={activeItem === 'Projects'} onClick={this.handleItemClick} />
              	    <Menu.Item icon='book' name='Wiki' active={activeItem === 'Wiki'} onClick={this.handleItemClick} />
              	    <Menu.Item icon='heartbeat' name='Pulse' active={activeItem === 'Pulse'} onClick={this.handleItemClick} />
              	    <Menu.Item icon='bar chart' name='Graphs' active={activeItem === 'Graphs'} onClick={this.handleItemClick} />
              	    <Menu.Item icon='setting' name='Settings' active={activeItem === 'Settings'} onClick={this.handleItemClick} />
                </Menu>
            </Grid.Column>




        </Grid.Row>

    )


	}

}