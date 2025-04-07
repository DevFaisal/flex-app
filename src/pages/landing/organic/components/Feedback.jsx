import React from 'react';
import HeaderNote from '../../../components/ui/HeaderNote';
import { SiTheboringcompany } from 'react-icons/si';
import { section } from 'motion/react-m';

const Feedback = () => {
  const testimonials = [
    {
      description:
        'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
      name: 'Sarah Johnson',
      title: 'Marketing Director',
    },
    {
      description:
        'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra quis. Eget vitae arcu vivamus sit tellus, viverra quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
      name: 'Michael Chen',
      title: 'Team Lead',
    },
    {
      description:
        'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
      name: 'Alex Rodriguez',
      title: 'Product Manager',
    },
    {
      description:
        'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
      name: 'Alex Rodriguez',
      title: 'Product Manager',
    },
    {
      description:
        'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
      name: 'Alex Rodriguez',
      title: 'Product Manager',
    },
  ];

  return (
    <section className="bg-[#F2F4F8] py-12 md:py-20 px-4">
      <div className="">
        <HeaderNote title="PAY FOR WHAT YOU OWE" note="What Early Users Are Saying" />

        <div className="mt-10 flex flex-nowrap overflow-scroll gap-6 pb-4 -mx-4 px-4 md:px-0 md:-mx-0 snap-x">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              description={testimonial.description}
              Icon={SiTheboringcompany}
              name={testimonial.name}
              title={testimonial.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;

function Card({ Icon = null, description = '', name = '', title = '' }) {
  return (
    <section className="even:h-[400px] odd:h-[420px] flex items-center justify-center">
      <div className="flex-shrink-0 snap-center w-[280px] sm:w-[350px] md:w-[380px] bg-white flex flex-col rounded-2xl shadow-lg">
        <div className="flex flex-col p-6 h-full">
          <div className="flex justify-center mb-5">
            {Icon && <Icon size={60} className="text-secondary" />}
          </div>

          <div className="flex-grow overflow-y-auto mb-6">
            <p className="text-start text-base md:text-lg text-gray-800">"{description}"</p>
          </div>

          <div className="flex items-center gap-4 mt-auto">
            <img
              className="rounded-full w-14 h-14 object-cover border-2 border-gray-100"
              src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
              alt={name}
            />
            <div>
              <p className="font-medium text-gray-900">{name}</p>
              <p className="text-sm text-gray-600">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
