import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const PricingPage = () => {
  const plans = [
    {
      name: 'Bezpłatny Okres Próbny',
      price: 'Darmowy',
      duration: '7 dni',
      features: [
        'Podstawowy dostęp do siłowni',
        '1 trening personalny',
        'Wsparcie e-mail',
        'Brak opcji personalizacji treningu',
        'Dostęp do forum społecznościowego',
        'Podstawowe statystyki treningowe',
        'Szafka na rzeczy osobiste'
      ],
      action: 'Zapisz się już teraz',
      theme: 'bg-gray-50 text-black',
      recommended: false
    },
    {
      name: 'Roczny okres',
      price: '129 zł / miesiąc',
      duration: 'Rozliczenie roczne',
      features: [
        'Wszystko z Bezpłatnego Okresu Próbnego',
        'Do 20 wejść miesięcznie',
        'Priorytetowe wsparcie e-mail',
        'Dostęp do grupowych zajęć fitness',
        'Strefa treningu funkcjonalnego',
        'Rozszerzone statystyki treningowe',
        'Dostęp do sauny i łaźni'
      ],
      action: 'Najbardziej opłacalny',
      theme: 'bg-gray-100 text-black',
      recommended: true
    },
    {
      name: 'Karnet Premium',
      price: '159 zł / miesiąc',
      features: [
        'Pierwszy miesiąc za darmo',
        'Wszystko z Karnetu Grupowego',
        'Nieograniczony dostęp do siłowni',
        'Wsparcie telefoniczne',
        'Indywidualne plany treningowe',
        'Dedykowany trener personalny',
        'Zaawansowane statystyki treningowe',
        'Prywatna szafka i ręczniki'
      ],
      action: 'Dla najbardziej wymagających',
      theme: 'bg-gray-50 text-black',
      recommended: false
    }
  ];


  return (
    <div className='bg-gray-50 py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
      <div className='max-w-7xl mx-auto divide-y-2 divide-gray-200'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-gray-900'>Wybierz karnet</h2>
          <p className='mt-2 text-base text-gray-500'>Wybór należy do Ciebie od kiedy zaczniesz lepsze życie</p>
        </div>
        <div className='mt-10 grid gap-6 lg:grid-cols-3'>
          {plans.map((plan) => (
            <div key={plan.name} className={`p-8 border rounded-lg ${plan.theme} ${plan.recommended ? 'ring ring-offset-2 ring-rose-600' : ''}`}>
              <h3 className='text-2xl font-bold'>{plan.name}</h3>
              <p className='mt-4 text-xl text-gray-700'>{plan.duration}</p>
              <p className='mt-2 text-3xl font-extrabold'>{plan.price}</p>
              <ul className='mt-6 space-y-2'>
                {plan.features.map((feature) => (
                  <li key={feature} className='flex items-center'>
                    <FaCheckCircle className='text-green-500' aria-hidden='true' />
                    <span className='ml-3 text-sm text-gray-600'>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className='mt-6 w-full bg-gray-100 py-2 px-4 rounded-md text-gray-700 font-medium hover:bg-gray-200'>{plan.action}</button>
            </div>
          ))}
        </div>
        <div className='mt-12 py-8 flex flex-wrap justify-center items-center border-t border-gray-300'>
         
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
