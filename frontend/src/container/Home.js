import React, { Component } from 'react'
import { Button,Form,  Container, Col, ListGroup, Card, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ACTIONS from "../Redux/Action";
import { connect } from "react-redux";
class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      items:'',
      selectedkey:'',
      confirmAction:''
    }
  }
  componentDidMount(){
    this.getItem()
  }
  getItem = () => {
    this.props.getItem().then(() => {
      let res = this.props.itemList
      if(res.status){
        this.setState({addedItems:res.listData})
      }
    })
  }

  onChangeEvent (e) {
    let {value} = e.target
    this.setState({items:value})
  }

  addItem = () => {
    let { items } =this.state
    let formdata = new FormData();
    formdata.append('name',items)
    this.props.addItem(formdata).then(() => {
      if(this.props.addStatus.status){
        this.setState({items:''})
        toast.success(this.props.addStatus.message,{
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        },
          this.getItem()
        );
      }else{
        toast.error(this.props.addStatus.message,{
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        },
          this.getItem()
        );
      }
   })
  }

  onSelectItem(key,action){
    let {selectedkey} = this.state
    switch (action) {
      case 'set':
          this.setState({selectedkey: selectedkey === key?'':key, confirmAction:selectedkey === key?'':'set'})
        break;
      case 'add':
          this.setState({selectedkey: selectedkey === key?'':key, confirmAction:selectedkey === key?'':'add'})
        break;
      default:
        break;
    }
  }

  moveTo(action){
    let {selectedkey} =this.state

    switch (action) {
      case 'select':
        let selectItem = {itemid: selectedkey , selected: '1'}
        this.props.selectItem(selectItem).then(() => {
          if(this.props.selectStatus.status){
            this.getItem()
          }
          this.setState({confirmAction:''})
        })
        break;
      case 'add':
        let addItem = {itemid: selectedkey , selected: '0'}
        this.props.selectItem(addItem).then(() => {
          if(this.props.selectStatus.status){
            this.getItem()
          }
          this.setState({confirmAction:''})
        })
        break;
      default:
        break;
    }
  }

  render() {
    let { items , addedItems,selectedkey,confirmAction} = this.state
    return (
      <Container className="my-5">
        <Form className="mb-3">
          <Form.Row>
            <Col>
              <Form.Control value={items} onChange={ e => this.onChangeEvent(e)} placeholder="Enter Item Name and Click Add" />
            </Col>
            <Col md={2} sm={4}>                
              <Button className="btn-block" onClick={ () => this.addItem()}>Add</Button>
            </Col>
          </Form.Row> 
        </Form>
        <Row className="align-items-top">
          <Col>
            <Card className="shadow">
              <h4 className="my-4 text-center">Added Items</h4>
              <ListGroup variant="flush">
                {addedItems&&addedItems.map((list,key)=>(
                 list.selected === '0'&&<ListGroup.Item className={ confirmAction==='set' && list.id === selectedkey?'bg-info':''} key={key} value={list.id} onClick={ () => this.onSelectItem(list.id,'set')}>{ list.name }</ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
            <Col md={2} sm={4}>
              <Button className="btn-block" disabled={ confirmAction==='add'?false:true } onClick={()=>this.moveTo('add')}><i className="fas fa-arrow-left"></i></Button>
              <Button className="btn-block" disabled={ confirmAction==='set'?false:true } onClick={()=>this.moveTo('select')}><i className="fas fa-arrow-right"></i></Button>
            </Col>
          <Col> 
            <Card className="shadow">
            <h4 className="my-4 text-center">Selected Items</h4>
              <ListGroup variant="flush">
              {addedItems&&addedItems.map((list,key)=>(
                list.selected === '1'&&<ListGroup.Item className={ confirmAction==='add' && list.id === selectedkey?'bg-info':''} key={key} value={list.id} onClick={ () => this.onSelectItem(list.id,'add')}>{ list.name }</ListGroup.Item>
              ))}
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    )
  }
}
const mapStateToProps = state => ({
  addStatus: state.addReducer,
  itemList: state.getReducer,
  selectStatus: state.selectReducer
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(ACTIONS.addItem(item)),
  selectItem: item => dispatch(ACTIONS.selectItem(item)),
  getItem: () => dispatch(ACTIONS.getItem()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Home);