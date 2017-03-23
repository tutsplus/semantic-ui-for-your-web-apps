import React, { Component } from 'react';
import { Input, Icon, Menu, Grid, Image } from 'semantic-ui-react';

export default class MyMenu extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return(
            <Grid.Row >
                <Menu fluid>
                    <Menu.Item header><Icon name='github'/></Menu.Item>
                    <Menu.Item>
                        <Input className='icon' icon='search' />
                    </Menu.Item>
                    <Menu.Item name='pullRequests' active={activeItem === 'pullRequests'} onClick={this.handleItemClick}>
                        Pull Requests
                    </Menu.Item>
                    <Menu.Item name='issues' active={activeItem === 'issues'} onClick={this.handleItemClick}>
                        Issues
                    </Menu.Item>
                    <Menu.Item header position='right'><Icon name='alarm'/></Menu.Item>
                    <Menu.Item header><Icon name='add'/></Menu.Item>
                    <Menu.Item header><Image src='/img/doctor.png' avatar /></Menu.Item>
                </Menu>
            </Grid.Row>
        )
    }


};