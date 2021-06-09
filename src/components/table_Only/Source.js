import { Container, Label,Table, Row, Card, Col, CardTitle, CardText, Spinner } from "reactstrap";
import { Link, useHistory } from "react-router-dom";

const DataList = ({datalist}) => {

  console.log(datalist[0]);

    let attarray = [];
    const history = useHistory();

    console.log("before id",datalist[0]);

    if(datalist[0] !== undefined && datalist[0].detail !== undefined){
      attarray = Object.keys(datalist[0].detail)
    }


    const handleDelete = (id) => {
      console.log("run handleDelete");
      fetch('http://localhost:8000/table_name/detail/' + id,{method: 'DELETE'})
      .then(res => console.log("Status:",res.status, "; Body:",res))
      .then(history.push('/tableonlysourcelist'))
    }

     const spin = ()=> {if(datalist == null){
      return(
        <Spinner color="primary" />
      )
    }}

    return(
        <Container>
       <div className="mt-3">
         <Label style={{ marginRight: "10px" }}>Data Source List</Label>
         <Link className="btn btn-secondary" to="/adddata">
           Add Source
         </Link>
       </div>
           {
            datalist.map((singledata,i) => {
            return(
                <Row>
                  <Col>
                    <Card body style={{backgroundColor: '#808000', fontSize:'20px', borderColor:'black' ,margin:'2% 0 5% 0'}}>
                      <CardTitle>Filesize:</CardTitle>  {singledata.total.fileSize}</Card>
                  </Col>
                  <Col>
                    <Card body style={{backgroundColor: '#808000', fontSize:'20px', margin:'2% 0 5% 0'}}>
                      <CardTitle>Last Access Time:</CardTitle><CardText>{singledata.total.lastAccessTime}</CardText></Card>
                  </Col>
                  <Col>
                    <Card body style={{backgroundColor: '#808000', fontSize:'20px', margin:'2% 0 5% 0'}}><CardTitle>Last Modified Time:</CardTitle>
                      <CardText>{singledata.total.lastModifiedTime}</CardText>
                    </Card>
                  </Col>
                </Row>
              )
            })
           }
          <Row>
           <Table className="table table-dark table-striped table-bordered table-hover table-responsive" style={{margin:'0px 5px 0 10px'}}>
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
            {
               attarray.map((key,i) => {
                return (
                  <tr key={i} className="text-center">
                    <td>{i}</td>
                    <td>{key}</td>
                    <td>{datalist[0].detail[key].fileSize}</td>
                    <td>{datalist[0].detail[key].lastAccessTime}</td>
                    <td>{datalist[0].detail[key].lastModifiedTime}</td>
                    {/* <td>
                      <Button size="sm">Edit</Button>{' '}
                      <Button color="primary" size="sm" onClick={() => handleDelete(key)}>Delete</Button>
                    </td> */}
                  </tr>
                 )
              })
             }
              </tbody>
            </Table>
          </Row>
        </Container>
    )
}

export default DataList;


