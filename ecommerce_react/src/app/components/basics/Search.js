import React from 'react'
import { Container, Row, Col, Button } from 'mdbreact';

class FormSearch extends React.Component {

  render() {
    return(
      <Container className="fluid cntr-fluid">
        <form className="form-inline active-pink-4 mb-4">
          <input className="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search" />
          
             <Button rounded type="submit" className="fa fa-search" aria-hidden="true"></Button>
          
        </form>
      </Container>
    )
  }
}

export default FormSearch
