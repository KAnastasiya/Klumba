import Form from '../form/Form';
import Input from '../input/Input';

const FormRequestCall = () => {
  const type = 'request-call';

  return (
    <Form
      type={type}
      tips='Оставьте свой контактый телефон, и мы свяжемся с Вами для уточнения деталей.'
      btnText='Заказать звонок'
      sendedText='Заказ звонка'>
      <Input
        form={type}
        type='text'
        id='phone'
        name='phone'
        title='Телефон'
        placeholder='+38(044)555-55-55' />
    </Form>
  );
};

export default FormRequestCall;
