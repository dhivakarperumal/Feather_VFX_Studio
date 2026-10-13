import emailjs from '@emailjs/browser';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const templateIds = {
  contact: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
  careers: import.meta.env.VITE_EMAILJS_CAREERS_TEMPLATE_ID,
};

export async function sendEmailJsForm(form, templateType) {
  const templateId = templateIds[templateType];
  const missingSettings = [
    !serviceId && 'VITE_EMAILJS_SERVICE_ID',
    !publicKey && 'VITE_EMAILJS_PUBLIC_KEY',
    !templateId && `VITE_EMAILJS_${templateType.toUpperCase()}_TEMPLATE_ID`,
  ].filter(Boolean);

  if (missingSettings.length) {
    throw new Error(`EmailJS is not configured. Add ${missingSettings.join(', ')} to your .env file and restart the app.`);
  }

  try {
    return await emailjs.sendForm(serviceId, templateId, form, { publicKey });
  } catch (error) {
    if (error && typeof error === 'object' && 'status' in error && 'text' in error) {
      throw new Error(`EmailJS error ${error.status}: ${error.text}`);
    }

    throw error;
  }
}
