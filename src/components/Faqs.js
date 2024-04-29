// FAQPage.js
import React from 'react';

const FAQs = [
  {
    question: 'How to register?',
    answer: 'You can fill your details in Registration page and register in it.',
  },
  {
    question: 'How do we use it?',
    answer: 'You can click on the pages present on appbar and navigate to that page .According to you role the pages might be visible.',
  },
  {
    question: 'How can we check whether our appointment is confirmed or not?',
    answer: 'You can click on the appointments present on appbar and navigate to that and check whether your appointment is registered or not , If present,then its confirmed.',
  },
  {
    question: 'How often do we need to fill the surveys?',
    answer: 'Mostly once in 2 weeks or fill it whenever you have any concerns',
  },
  // Add more FAQs as needed
];

const FAQPage = () => {
  return (
    <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', padding: '1px',fontSize:'15px' }}>
      <h1>Frequently Asked Questions</h1>
      <div className='faqs-content'>
      <table border="1">
      <div style={{ marginTop: '2px'}}>
        {FAQs.map((faq, index) => (
          <div key={index} style={{ marginBottom: '2px' }}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
      </table>
      </div>
      </div>
  );
};

export default FAQPage;
