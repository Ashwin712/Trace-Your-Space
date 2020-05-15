import React from 'react'
import { Table, Button, ButtonGroup } from 'semantic-ui-react'

export const TenantRow = (props) => (
    <Table.Row>
        <Table.Cell>
            {props.title}
        </Table.Cell>

        <Table.Cell>
            {props.title}
        </Table.Cell>

        <Table.Cell>
            {props.title}
        </Table.Cell>

        <Table.Cell>
            {props.title}
        </Table.Cell>

        <Table.Cell>
            {props.title}
        </Table.Cell>

        <Table.Cell>
            <ButtonGroup>
                
            </ButtonGroup>
        </Table.Cell>
    </Table.Row>
)