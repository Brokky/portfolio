import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons";
import CustomIcon from "../../CustomIcon";

const contacts = [
    {
      icon: faEnvelope,
      link: "mailto:danielbrokky@gmail.com",
      text: "danielbrokky@gmail.com",
      size: "xl",
      ariaLabel: "Email",
      newTab: true,
    },
    {
      icon: faWhatsapp,
      link: "https://wa.me/972552876823",
      text: "WhatsApp",
      size: "2xl",
      ariaLabel: "WhatsApp",
      newTab: true,
    },
    {
      icon: faTelegram,
      link: "https://t.me/danielbrokk",
      text: "Telegram",
      size: "2xl",
      ariaLabel: "Telegram",
      newTab: true,
    },
  ];

const Contacts = () => {
  return (
    <address className="flex flex-col items-center py-6">
      <h3 className="text-2xl lg:text-3xl w-fit lg:w-full font-mono text-center border-b-2 border-green-600 inline-block hover:border-green-700 transition duration-300">
        Contacts
      </h3>
      <div className="flex flex-col gap-y-2 mt-4">
        {contacts.map((contact) => (
          <div key={contact.ariaLabel} className="flex items-center gap-x-2">
            <a
              href={contact.link}
              aria-label={contact.ariaLabel}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CustomIcon
                icon={contact.icon}
                size={contact.size}
                className="h-6 w-6"
              />
            </a>
            <a
              href={contact.link}
              className="text-green-400 hover:underline transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.text}
            </a>
          </div>
        ))}
      </div>
    </address>
  );
};

export default Contacts;
