export default function FAQ() {
  const faqs = [
    {
      question: "Як додати нове завдання?",
      answer: "Введіть текст завдання у поле вводу та натисніть кнопку 'Додати'.",
    },
    {
      question: "Чи можна редагувати завдання?",
      answer: "Так, натисніть кнопку 'Редагувати' біля завдання, щоб змінити текст.",
    },
    {
      question: "Як видалити завдання?",
      answer: "Щоб видалити завдання, натисніть кнопку 'Видалити'.",
    },
    {
      question: "Що робити, якщо завдання виконано?",
      answer:
        "Поставте галочку біля завдання, щоб відзначити його як виконане.",
    },
  ];

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "'Arial', sans-serif",
        color: "#333",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Часті запитання (FAQ)</h1>
      <ul style={{ listStyle: "none", padding: "0" }}>
        {faqs.map((faq, index) => (
          <li
            key={index}
            style={{
              marginBottom: "15px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "10px",
            }}
          >
            <h2 style={{ fontSize: "1.2rem", margin: "0 0 5px 0" }}>
              {faq.question}
            </h2>
            <p style={{ margin: "0", fontSize: "1rem", color: "#555" }}>
              {faq.answer}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}