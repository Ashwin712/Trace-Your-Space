import React from "react";
import { Button, Table } from "semantic-ui-react";

const headerRow = ["Company", "Admin", "Email", "Mobile", "Action"];

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

const renderBodyRow = (data, i) => ({
  key: data.name || `row-${i}`,
  cells: [
    data.tenantName,
    data.adminName,
    data.adminEmail,
    data.mobile,
    {
      icon: "tick",
      content: (
        <div>
          <Button primary>Accept</Button>
          <Button secondary>Decline</Button>
        </div>
      ),
    },
  ],
});

const slvlnData = Array(9).fill({
  tenantName: "Company Name",
  adminName: "Admin",
  adminEmail: "admin@admin.com",
  mobile: 9090909090,
});

const TenantFilter = ({ filterName }) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>`${filterName} tenants`</h1>
      <Table
        celled
        headerRow={headerRow}
        renderBodyRow={renderBodyRow}
        tableData={slvlnData}
      />
    </>
  );
};

export default TenantFilter;
