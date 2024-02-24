import emailjs from "@emailjs/browser";

const mail = ({ name, email, message }) => {
  return emailjs.send(
    process.env.service_1e5nadq,
    process.env.template_sklubr9,
    { name, email, message },
    process.env.NEXT_PUBLIC_USER_IDtemplate_sklubr9
  );
};

export default mail;
