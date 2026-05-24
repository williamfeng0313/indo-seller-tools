export default function FAQSection({
    faqs,
  }: {
    faqs: {
      question: string;
      answer: string;
    }[];
  }) {
    return (
      <section className="max-w-4xl mx-auto mt-24">
  
        <h2 className="text-3xl font-bold">
          Frequently Asked Questions
        </h2>
  
        <div className="mt-10 space-y-8">
  
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold">
                {faq.question}
              </h3>
  
              <p className="mt-2 text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
  
        </div>
  
      </section>
    );
  }