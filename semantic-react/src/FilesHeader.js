import React, { Component } from 'react'
import { Grid, Header, Icon, Menu } from 'semantic-ui-react'

export default class FileListHeader extends Component {

	render() {
        return (
            <Grid.Row>
                <Grid.Column width={16}>
	                <Header as='h4'>Description will go here for the project!</Header>
                </Grid.Column>
                <Grid.Column width={16}>
	                <Menu fluid widths={4}>
   		                <Menu.Item header><Icon name='history'/>1 commit</Menu.Item>
        	            <Menu.Item header><Icon name='fork'/>1 branch</Menu.Item>
        	            <Menu.Item header><Icon name='tag'/>2 release</Menu.Item>
        	            <Menu.Item header><Icon name='user'/>1 contributor</Menu.Item>
     	            </Menu>
                </Grid.Column>
            </Grid.Row>
        
        )
	}
};