import React from 'react';
import { Phone, Mail } from 'lucide-react';
import './Contacts.css';

const teamMembers = [
  {
    id: 1,
    name: 'Тамара Ивановна Мордасова',
    position: 'Исполнительный директор Экспертной встречи «Техпро»',
    phone: '+7 (985) 424-46-67',
    email: 'techpro@s-kon.ru',
    image: '/images/contact1.png'
  },
  {
    id: 2,
    name: 'Елена Габидуловна Курбаналиева',
    position: 'Координатор проекта',
    phone: '+7 (495) 662-97-49',
    email: 'techpro@s-kon.ru',
    image: '/images/contact2.png'
  },
  {
    id: 3,
    name: 'Ирина Сергеевна Викторова',
    position: 'Деловая программа',
    phone: '+7 (495) 662-97-49',
    email: 'techpro@s-kon.ru',
    image: '/images/contact3.png'
  }
];

const Contacts: React.FC = () => {
  return (
    <section id="contacts" className="contacts-section">
      <div className="container">
        <h2 className="section-title">Контакты</h2>
        
        <div className="team-members">
          {teamMembers.map(member => (
            <div key={member.id} className="team-card">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
                <div className="contact-details">
                  <div className="contact-item">
                    <Phone size={16} className="contact-icon" />
                    <span>{member.phone}</span>
                  </div>
                  <div className="contact-item">
                    <Mail size={16} className="contact-icon" />
                    <span>{member.email}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contacts;