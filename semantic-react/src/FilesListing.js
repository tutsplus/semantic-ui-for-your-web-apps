import React, { Component } from 'react'
import { Grid, Table, Icon, Image } from 'semantic-ui-react'

export default class FileListing extends Component {

    render() {
        return (
            <Grid.Row>
	            <Table>
                    <Table.Header>
	                    <Table.Row>
 		                    <Table.HeaderCell colSpan='3'><Image src='/img/doctor.png' avatar />
                                JoeDevelopers first commit</Table.HeaderCell>
   	                    </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
	                        <Table.Cell collapsing>
		                        <Icon name='folder' /> node_modules
	                        </Table.Cell>
   	                        <Table.Cell>Initial commit</Table.Cell>
                            <Table.Cell collapsing textAlign='right'>10 hours ago</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Icon name='folder' /> test
                            </Table.Cell>
                            <Table.Cell>Initial commit</Table.Cell>
                            <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Icon name='folder' /> build
                            </Table.Cell>
                            <Table.Cell>Initial commit</Table.Cell>
                            <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Icon name='file outline' /> index.js
                            </Table.Cell>
                            <Table.Cell>Initial commit</Table.Cell>
                            <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Icon name='file outline' /> Gruntfile.js
                            </Table.Cell>
                            <Table.Cell>Initial commit</Table.Cell>
                            <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
  		                </Table.Row>

                    </Table.Body>
                </Table>
            </Grid.Row>

		
		)
 	}
};