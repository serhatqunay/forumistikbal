'use client';

import { useState } from 'react';
import styles from './page.module.css';
import type { Faq } from './faqs';

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className={styles.list}>
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`${styles.item} ${openIndex === i ? styles.itemOpen : ''}`}
        >
          <button
            className={styles.question}
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
          >
            <span>{faq.question}</span>
            <span className={styles.icon} aria-hidden="true">
              {openIndex === i ? '−' : '+'}
            </span>
          </button>
          {openIndex === i && (
            <div className={styles.answer}>
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
