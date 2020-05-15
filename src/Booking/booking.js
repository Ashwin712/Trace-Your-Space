import React from 'react'
import { Card, Segment, Button,Image } from 'semantic-ui-react'

const items = [
  {
    name: 'Project Report - April',
    description:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta:{
    },
    extra :<div style={{textAlign: "right"}}><Button>hi</Button></div>

  },
  {
    header: 'Project Report - May',
    description:
      'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
  },
  {
    header: 'Project Report - June',
    description:
      'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    meta: 'ROI: 27%',
  },
]


const booking = () => {

    const CardExampleGroups1 = ({items}) => {
        return(
            <div>
                {
                    items.map((value) =>(   
                    <Card centered={true} fluid = {true}>
                        <Card.Content>
                          <Image
                            floated='right'
                            size='mini'
                          />
                          <Card.Header>{value.name}</Card.Header>
                          <Card.Meta>Friends of Elliot</Card.Meta>
                          <Card.Description>
                            Steve wants to add you to the group <strong>best friends</strong>
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <div className='ui two buttons'>
                            <Button basic color='green'>
                              Approve
                            </Button>
                            <Button basic color='red'>
                              Decline
                            </Button>
                          </div>
                        </Card.Content>
                      </Card>) )
       
    }
          </div>
        )
        }

    return(
<>
<h1 style={{textAlign: "center"}}>List of Rooms Available </h1>
<CardExampleGroups1 items = {items}/>
</>
    )
}






export default booking