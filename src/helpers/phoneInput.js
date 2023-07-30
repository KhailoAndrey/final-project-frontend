export function sanitizePhoneNumber(value) {
  return value.replace(/[^\d]/g, '');
}

// Функция для форматирования номера телефона
export function formatPhoneNumber(value) {
  const sanitizedValue = sanitizePhoneNumber(value);
  let formattedValue = "+38 ";

  if (sanitizedValue.length >= 3) {
    formattedValue += `(${sanitizedValue.slice(0, 3)}) `;
  }
  if (sanitizedValue.length >= 5) {
    formattedValue += `${sanitizedValue.slice(3, 6)}-`;
  }
  if (sanitizedValue.length >= 8) {
    formattedValue += `${sanitizedValue.slice(6, 8)}-`;
  }
  if (sanitizedValue.length >= 10) {
    formattedValue += `${sanitizedValue.slice(8)}`;
  }

  return formattedValue;
}