import { Container, Label,Table, Row, Card, Col, CardTitle, CardText, Spinner } from "reactstrap";
import { Link, useHistory } from "react-router-dom";

const DataList = ({datalist}) => {

    let attarray = [];
    const history = useHistory();

    console.log("before id",datalist);

    if(datalist !== undefined && datalist.detail !== undefined){
      attarray = Object.keys(datalist.detail)
    }
    console.log(datalist.detail["day_id=20210505"]);

    const metadata = datalist.total ? (
      <Row style={{borderColor:'black', margin:'2% 0 5% 0'}}>
              <Col>
                <Card className="Card" body>
                  <CardTitle>Filesize:</CardTitle>  {datalist.total.fileSize}
                </Card>
              </Col>
              <Col>
                <Card body className="Card">
                  <CardTitle>Last Access Time:</CardTitle><CardText>{datalist.total.lastAccessTime}</CardText>
                </Card>
              </Col>
              <Col>
                <Card body className="Card"><CardTitle>Last Modified Time:</CardTitle>
                  <CardText>{datalist.total.lastModifiedTime}</CardText>
                </Card>
              </Col>
            </Row>
    ) : (<h1>loading</h1>);

    const tableData = datalist.detail ? (
           attarray.map((key,i) => {
            return (
              <tr key={i} className="tableRow">
                <td>{i}</td>
                <td>{key}</td>
                <td>{datalist.detail[key].fileSize}</td>
                <td>{datalist.detail[key].lastAccessTime}</td>
                <td>{datalist.detail[key].lastModifiedTime}</td>
              </tr>
              )
            })
    ) : (<h1>loading</h1>);

    return(
      <div className='mt-3'>
      <Container style={{maxWidth: '85%', margin:'0 0 0 8%'}}>
        <div className="mt-3">
          <Label style={{ marginRight: "7px" }}>Data Source List</Label>
          <Link className="btn btn-secondary" to="/adddata">
            Add Source
          </Link>
        </div>
        <div>{metadata}</div>
        <Row>
        <Table className="table table-dark table-striped table-bordered table-hover table-responsive" style={{margin:'0px 0px'}}>
          <thead className="text-center">
            <tr>
              <th>No</th>
              <th>Date</th>
              <th>fileSize</th>
              <th>lastAccessTime</th>
              <th>lastModifiedTime</th>
            </tr>
          </thead>
          <tbody>
            {/* add contain */}
            {tableData}
          </tbody>
        </Table>
      </Row>
      </Container>
      </div>
    )
}

export default DataList;


