export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

export default function isValidPassword(password = "") {
  if (typeof password !== "string") password = String(password);

  if (password.length !== 10) {
    return false;
  }

  
  if (!/^[a-zA-Z0-9]+$/.test(password)) {
    return false;
  }

  for (let i = 0; i < password.length - 2; i++) {
    const char1 = password.charCodeAt(i);
    const char2 = password.charCodeAt(i + 1);
    const char3 = password.charCodeAt(i + 2);

    if (
      (char2 === char1 + 1 && char3 === char2 + 1) ||
      (char2 === char1 - 1 && char3 === char2 - 1)
    ) {
      return false;
    }
  }

  
  if (forbiddenPasswords.includes(password)) {
    return false;
  }

  
  const uniqueChars = new Set(password);
  if (uniqueChars.size < 4) {
    return false;
  }


  if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
    return false;
  }

  
  if (password.replace(/[^0-9]/g, "").length < 2) {
    return false;
  }

  return true;
}
