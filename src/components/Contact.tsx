import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const ContactContainer = styled.section`
  padding: 60px 20px;
  background: #f0f0f0;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #000;
    margin: 0 20px;
  }
`;

const TitleContainer = styled.div`
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  font-family: 'Great Vibes', cursive;
  font-size: 60px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 600px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: 'Sedan SC', serif;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: 'Sedan SC', serif;
  height: 150px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background: #333;
  color: white;
  cursor: pointer;
  font-family: 'Sedan SC', serif;
  &:hover {
    background: #555;
  }
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      subject: "Contato via site"
    };

    emailjs.send('service_wi2ans1', 'template_v6t98is', templateParams, 'zbKEsFg52hnGMSbQw')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Mensagem enviada com sucesso!');
      }, (err) => {
        console.log('FAILED...', err);
        alert('Houve um erro ao enviar a mensagem. Tente novamente.');
      });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
    <TitleContainer id="contact">
      <Title>contato</Title>
    </TitleContainer>
    <ContactContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Seu nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Seu email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Textarea
          name="message"
          placeholder="Sua mensagem"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit">Enviar</Button>
      </Form>
    </ContactContainer>
    </>
  );
}

export default Contact;
