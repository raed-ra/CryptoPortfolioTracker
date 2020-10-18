import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LoaderButton from "./LoaderButton";
import { useHistory } from "react-router-dom";
import axios from 'axios'
import { initialize } from "passport";
import m from 'moment';
import { parseISO } from 'date-fns'

function ModalEditSellCoin(props) {

  const [isLoading, setIsLoading] = useState(false);
  const [coin, setCoin] = useState()
  const [sellPrice, setSellPrice] = useState()
  const [quantity, setQuantity] = useState()
  const [currency, setCurrency] = useState()
  const [startDate, setStartDate] = useState()


  function validateForm() {
    return startDate !== "" && currency !== "" && sellPrice !== "" && quantity !== "" && coin !== "";
  }

  async function handleSubmit(event) {
    event.preventDefault();
    let payload = { coin, quantity, sellPrice, currency, startDate }
    setIsLoading(true);
    console.log(payload)
    try {
      // console.log(index)
      const response = await axios.update('http://localhost:3001/api/transactions/addcoin', payload, {
        withCredentials: true,
      })
      console.log("Editted transaction:" + response)
      props.submitted()
    } catch (e) {
      setIsLoading(false);
    }
  }

  // }

  useEffect(() => {
    let helperVar
    console.log(props);
    if ((props.data)[0] === undefined) {
      helperVar = {
        buyPrice: 0,
        change: "x",
        coin: "x",
        createdAt: "x",
        currency: "x",
        currentPrice: 0,
        id: "x",
        imageURL: "x",
        initialCost: "x",
        profitLoss: "x",
        quantity: 0,
        startDate: "x",
        totalValue: "x",
        updatedAt: "x",
        user_id: "x",
        __v: 0,
        _id: "x"
      }
    } else {
      helperVar = props.data[0]
      setCoin(helperVar.coin)
      setQuantity(helperVar.quantity)
      setSellPrice(helperVar.buyPrice)
      setCurrency(helperVar.currency)
      let time = parseISO(helperVar.startDate)
      setStartDate(time)
    }
   }, [props])

  console.log(props);
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header style={{ backgroundColor: "orange" }} closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit coin
          </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCoin">
                <Form.Label>Coin</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Coin"
                  value={coin}
                  onChange={e => setCoin(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridQuantity">
                <Form.Label>Sell quantity</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Quantity"
                  value={quantity}
                  onChange={e => setQuantity(e.target.value)}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Sell Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Sell Price"
                  value={sellPrice}
                  onChange={e => setSellPrice(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Sell Currency</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Currency of sold value"
                  value={currency}
                  onChange={e => setCurrency(e.target.value)}
                />
              </Form.Group >
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Sold on</Form.Label>
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
              </Form.Group>
            </Form.Row>

            <Button
              // block
              type="submit"
            // bsSize="large"
            // isLoading={isLoading}
            // disabled={!validateForm()}
            >
              Sell - Update Portfolio
        </Button>

            {/* <Button variant="primary" type="submit">
            </Button> */}
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "orange" }}>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalEditSellCoin




