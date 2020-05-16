import React from "react";
import { Button, Table, Dimmer, Loader, Confirm } from "semantic-ui-react";
import { tenantList, approveTenant, rejectTenant } from "../shared/service/Services";


const headerRow = ["Tenant Name", "Admin", "Admin's Email", "Admin's Mobile", "Action"];
const slvln = [
  {
    "tenantId": "ab0cd3dc-9c4a-4d0b-bad4-aa26a99ef236",
    "tenantName": "nineleaps",
    "adminName": null,
    "adminEmailId": null,
    "adminPhoneNumber": null
  }
]


class Tenants extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], loading: false, action: '', id: '' };
  }

  openConfirm = () => {
    this.setState({ confirm: true })
  }


  closeConfirm = () => {
    this.setState({ confirm: false })
  }

  async componentDidMount() {
    this.setState({ loading: true });
    tenantList().then((res) => {
      console.log('tenant list api', res);
      this.setState({
        data: res,
        loading: true,
        confirm: false
      })
    })
  }

  approveHandler = (evt, data) => {
    this.setState({ action: 'approve' }, () => { this.openConfirm() });
  }


  rejectHandler = (evt, data) => {
    this.setState({ action: 'reject' }, () => { this.openConfirm() })
  }


  confirmHandler = () => {
    const { id, action } = this.state;
    if (action === 'approve') {
      this.setState({ loading: true })
      approveTenant(id).then((res) => {
        this.setState({ loading: false });
      })
    }

    if (action === 'reject') {
      this.setState({ loading: true })
      rejectTenant(id).then((res) => {
        this.setState({ loading: false });
      })
    }

    tenantList().then((res) => {
      console.log('tenant list api', res);
      this.setState({
        data: res,
        loading: true,
        confirm: false
      })
    })

  }

  renderBodyRow = (data, i) => {
    const { tenantId, tenantName, adminName, adminEmailId, adminPhoneNumber } = data;
    this.setState({ id: tenantId });
    return (
      {
        key: tenantId || `row-${i}`,
        cells: [
          tenantName || 'Looks like an error',
          adminName || 'Looks like an error',
          adminEmailId || 'Looks like an error',
          adminPhoneNumber || 'Looks like an error',
          {
            icon: "tick",
            content: (
              <div>
                <Button primary onClick={this.approveHandler}>Accept</Button>
                <Button secondary onClick={this.rejectHandler}>Decline</Button>
              </div>
            ),
          },
        ],
      }
    )

  }

  render() {

    return (
      <>
        <h1 style={{ textAlign: "center" }}>List of Tenant requests</h1>
        <Table
          celled
          headerRow={headerRow}
          renderBodyRow={this.renderBodyRow}
          tableData={this.state.data}
        />
        <Dimmer active={this.state.loading} inverted>
          <Loader />
        </Dimmer>

        <Confirm
          open={this.state.confirm}
          onCancel={this.closeConfirm}
          onConfirm={this.confirmHandler}
        />
      </>
    );
  }
}

export default Tenants;
