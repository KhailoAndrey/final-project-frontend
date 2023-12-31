export const nameRegex =
  /^([A-ZА-ЯЁІЇЄҐ'][A-Za-zА-Яа-яЁёІіЇїЄєҐґ']+\s?){1,26}$|^([A-ZА-ЯЁІЇЄҐ'][a-zA-Zа-яА-ЯЁёІіЇїЄєҐґ'\s]*(?:-[A-ZА-ЯЁІЇЄҐ'][a-zA-Zа-яА-ЯЁёІіЇїЄєҐґ'\s]*)){1,26}$/;
export const cityRegex =
  /^[A-ZА-ЯЁІЇЄҐ][a-zA-Zа-яА-ЯЁёІіЇїЄєҐґ]*$|^[A-ZА-ЯЁІЇЄҐ][a-zA-Zа-яА-ЯЁёІіЇїЄєҐґ\s]*[A-ZА-ЯЁІЇЄҐ][a-zA-Zа-яА-ЯЁёІіЇїЄєҐґ\s]*$|^[A-ZА-ЯЁІЇЄҐ][a-zA-Zа-яА-ЯЁёІіЇїЄєҐґ\s]*(?:-[A-ZА-ЯЁІЇЄҐ][a-zA-Zа-яА-ЯЁёІіЇїЄєҐґ\s]*)$|^[A-ZА-ЯЁІЇЄҐ][a-zA-Zа-яА-ЯЁёІіЇїЄєҐґ\s]*(?:-\s*[A-ZА-ЯЁІЇЄҐ][a-zA-Zа-яА-ЯЁёІіЇїЄєҐґ\s]*)*(?:,\s*[A-ZА-ЯЁІЇЄҐ][a-zA-Zа-яА-ЯЁёІіЇїЄєҐґ\s]*)$|^[A-ZА-ЯЁІЇЄҐ][a-zA-Zа-яА-ЯЁёІіЇїЄєҐґ\s-]*(?:,\s[A-ZА-ЯЁІЇЄҐ][a-zA-Zа-яА-ЯЁёІіЇїЄєҐґ\s-]*)[A-ZА-ЯЁІЇЄҐ][a-zA-Zа-яА-ЯЁёІіЇїЄєҐґ\s]*$/;
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z.-]+\.[a-z]{2,}$/;
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
export const phoneRegex = /^\+380\d{9}$/;
export const birthdayRegex = /^(0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
