import React from 'react'
import { Table, TableHeaderCell, TableBody, TableRow, TableCell } from 'semantic-ui-react'

const headerRow = ['Company', 'Admin', 'Email', 'Mobile', 'Action']

// export default class Tenants extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             loading: false,
//         }
//     }

//     async componentDidMount() {
//         this.setState({ loading: true })
//         const apiData = await callAPI();
//         this.setState({ loading: false })

//     }
// }

// const renderBodyRow = (data, i) => {
//     const { status, name } = data;
//     return (key: name || `row-${i}`,
//         warning: !!(status && status.match('Requires Action')),
//             cells: [
//                 name || 'No name specified',
//                 status ? { key: 'status', icon: 'attention', content: status } : 'Unknown',
//                 notes
//                     ? { key: 'notes', icon: 'attention', content: notes, warning: true }
//                     : 'None',
//             ],)
// };

const renderBodyRow = ({ name, status, notes }) => ({
    key: name,
    cells : [name, status, notes]
})

const data = [{
    name: 'Name',
    status: 'Requires Action',
    Notes: 'notes'
}]



const Tenants = () => (
    <Table
        celled
        headerRow={headerRow}
        renderBodyRow={renderBodyRow}
        tableData={data}
    />
);

export default Tenants;

