import React, { useEffect, useState, useRef } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux'
// import Box from '@mui/material/Box';
import { TextField, Button } from '@mui/material';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
import { useAppSelector } from '../hooks'
import { displayModal } from '../store/modal'
import { reset } from '../store/orders'

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import OrderLine from '../components/OrderLine'
import styled from 'styled-components'
import { useForm, Resolver } from 'react-hook-form';

import { IMaskInput } from 'react-imask';
import NumberFormat, { InputAttributes } from 'react-number-format';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import { send } from 'emailjs-com';
import CloseIcon from '@mui/icons-material/Close';


interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

interface State {
  textmask: string;
  numberformat: string;
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(995) 000-000-000"
        definitions={{
          '#': /[1-9]/,
        }}
        // inputRef={ref}
        onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  },
);

const ButtonStyle = styled(Button)`
  background: black !important;
    font-weight: bold !important;
    box-shadow: none !important;
    padding: 15px 0 !important;
    font-size: 12px !important;
`

const IconSuccess = styled(CheckCircleOutlineIcon)`
width: 70px !important;
height: 70px !important;
display: flex !important;
margin: 0 auto !important;
fill: green !important;
`

const Popup = styled.div`
  padding: 40px 70px;
  text-align: center;
`

const PopupDescription = styled.div`
  padding-top: 50px;
  padding-bottom: 15px;
  font-size: 25px;
`

const CloseButton = styled(CloseIcon)`
width: 50px !important;
    height: 50px !important;
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    transition: all .3s !important;
    &:hover {
      transform: rotate(180deg) !important;
    }
`



type FormValues = {
  textmask: string;
  email: string;
  name: string;

};

export default function BasicModal() {
  const dispatch = useDispatch()
  const state = useAppSelector((state) => state) // [{}, {}]

  const show = state.modal.isShow

  const handleClose = () => {
    dispatch(displayModal({ isShow: false }))

  }
  const form: any = useRef();


  const { register, handleSubmit, getValues, formState: { errors } } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => {


    const { email, name, textmask } = data;

    const toSend = {
      text: `${textmask} заказ: ${JSON.stringify(state.orders)}`,
      name: name,
      email: email,
      reply_to: email
    }

    send('service_ogwt80f', 'template_7jvuass', toSend, 'fr-wuu4TadkXDU0-p')
      .then((result) => {
        // console.log(result.text);
        setIsSend(true)
      }, (error) => {
        alert(error.text);
      });
  });

  const [isSend, setIsSend] = useState(false)

  const [values, setValues] = React.useState<State>({
    textmask: '',
    numberformat: '1320',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleCloseOrder = (e: any) => {
    e.preventDefault();
    dispatch(reset())
  }



  useEffect(() => {
    if (!state.orders.orders.length) dispatch(displayModal(false))
  }, [state.orders.orders])

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        {
          isSend ?
            (<Popup>
              <CloseButton onClick={handleCloseOrder} />
              <h2>Ваш заказ создан</h2>
              <IconSuccess />
              <PopupDescription>{getValues('name')} Мы свяжемся с вами в ближайшее время</PopupDescription>
              <span>{values.textmask}</span>
            </Popup>
            ) : (

              <>
                <Modal.Header closeButton>
                  <Modal.Title>Ваш заказ:</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                  {
                    state.orders.orders.map(el => <OrderLine key={el.id} {...el} />)
                  }

                  <hr />
                  <div style={{ textAlign: 'right', marginBottom: 50 }}>Сумма: {state.orders.amount} ₾</div>


                  <form onSubmit={onSubmit} ref={form}>
                    <TextField
                      fullWidth
                      id="standard-helperText"
                      label="Ваше имя"
                      defaultValue=""
                      // helperText="Напишите имя"
                      variant="filled"
                      {...register("name", { required: true })}
                    />
                    <Box mb={3} />

                    <TextField
                      fullWidth
                      id="standard-helperText2"
                      label="Ваш Email"
                      defaultValue=""
                      // helperText="ERROR"
                      variant="filled"
                      {...register("email")}


                    />
                    <Box mb={3} />

                    <FormControl variant="standard">
                      <InputLabel htmlFor="formatted-text-mask-input">Телефон</InputLabel>
                      <Input
                        {...register("textmask", { required: true })}
                        required
                        fullWidth
                        value={values.textmask}
                        onChange={handleChange}
                        name="textmask"
                        id="formatted-text-mask-input"
                        inputComponent={TextMaskCustom as any}
                      />
                    </FormControl>
                    <Box mb={3} />
                    {/* <button> */}

                    <ButtonStyle variant="contained" fullWidth onClick={onSubmit}>
                      Оформить заказ
                    </ButtonStyle>

                    {/* 
            <input {...register("firstName")} placeholder="Bill" />
            {errors?.firstName && <p>{errors.firstName.message}</p>}

            <input {...register("lastName")} placeholder="Luo" />

            <input type="submit" /> */}
                  </form>


                </Modal.Body>
              </>
            )
        }
        {/* <Modal.Footer>
          <ButtonStyle type="submit" variant="contained" fullWidth onClick={handleClose}>
            Оформить заказ
          </ButtonStyle>
        </Modal.Footer> */}
      </Modal>
      {/* <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal> */}
    </div>
  );
}