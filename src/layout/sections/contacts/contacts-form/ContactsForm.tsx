import {ElementRef, useRef} from 'react'

import emailjs from '@emailjs/browser'
import styled from 'styled-components'
import {ButtonWithIcon} from "@/components/button-icon";


export const ContactsForm = () => {

    const form = useRef<ElementRef<'form'>>(null)


    const sendEmail = (e: any) => {
        e.preventDefault()
        if (!form.current) {
            return
        }

        emailjs.sendForm('service_93qe5ld', 'template_1k35jfd', form.current, 'GVshRN7duZ3VPul2Z').then(
            result => {
                console.log(result.text)
            },
            error => {
                console.log(error.text)
            }
        )
        e.target.reset()
    }


    return (
        <Form onSubmit={sendEmail} ref={form}>
            <Field type="text" name="user_name" placeholder='Name' required/>

            <Field
                autoComplete='email'
                name='user_email'
                placeholder='Email'
                required
                type='email'
            />

            <Field as='textarea' name='message' placeholder='Message' required/>

            <ButtonWithIcon type={'submit'}>{'send message'}</ButtonWithIcon>
        </Form>
    )
}

const Form = styled.form`
    max-width: 450px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 14px auto 0;
    align-items: center;

    textarea {
        resize: none;
        height: 75px;
    }
`
const Field = styled.input`
    width: 100%;
    background-color: ${props => props.theme.colors.project};
    color: ${props => props.theme.colors.text};
    border: none;
    height: 35px;
    padding: 5px 15px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    border-radius: 1px;
    filter: ${props => props.theme.colors.filter};

    &::placeholder {
        text-transform: capitalize;
        color: ${props => props.theme.colors.textSecondary};
        opacity: 0.5;
    }

    &:focus-visible {
        outline: 1px solid rgba(167, 167, 167, 0.5);
    }
`
